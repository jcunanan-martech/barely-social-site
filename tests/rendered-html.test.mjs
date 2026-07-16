import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

process.env.GOOGLE_SHEETS_WEBHOOK_URL = "https://example.test/barely-social-submissions";

const originalFetch = globalThis.fetch;
globalThis.fetch = async (input, init) => {
  const url = typeof input === "string" ? input : input instanceof URL ? input.href : input.url;

  if (url === process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
    assert.equal(init?.method, "POST");
    assert.equal(init?.headers?.["Content-Type"], "application/json");
    assert.doesNotThrow(() => JSON.parse(String(init?.body)));
    return new Response("ok");
  }

  return originalFetch(input, init);
};

async function render(path = "/", init = {}) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${Math.random()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html", ...(init.headers ?? {}) },
      ...init,
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Barely Social homepage and form wiring", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Barely Social/);
  assert.match(html, /From scattered marketing to systems that sell, follow up, and scale\./);
  assert.match(html, /action="\/api\/submit"/);
  assert.match(html, /method="post"/);
  assert.match(html, /name="formType" value="Contact"/);
  assert.match(html, /name="formType" value="Systems Audit"/);
  assert.doesNotMatch(html, /mailto:hello@barelysocial\.co"[^>]*method=/);
  assert.doesNotMatch(html, /make-form|make-submission-frame|codex-preview|Your site is taking shape/);
});

test("keeps source aligned with the server-side submit flow", async () => {
  const [page, route, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/api/submit/route.ts", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(page, /FormSubmitHelper|make-form|submittedAt|sourceUrl|userAgent/);
  assert.match(page, /className="contact-form" action="\/api\/submit" method="post"/);
  assert.match(page, /className="audit-form" action="\/api\/submit" method="post"/);
  assert.match(route, /formData\.get\("message"\)/);
  assert.match(route, /fallbackWebhookUrl/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});

test("accepts valid contact submissions", async () => {
  const form = new FormData();
  form.set("formType", "Contact");
  form.set("firstName", "Jec");
  form.set("email", "jec@example.com");
  form.set("message", "Please audit this workflow.");

  const response = await render("/api/submit", {
    method: "POST",
    body: form,
    headers: {
      referer: "http://localhost/#contact",
      "user-agent": "node-test",
    },
  });

  assert.equal(response.status, 200);
  assert.match(await response.text(), /Got it/);
});

test("accepts valid systems audit submissions", async () => {
  const form = new FormData();
  form.set("formType", "Systems Audit");
  form.set("firstName", "Jec");
  form.set("email", "jec@example.com");
  form.set("company", "Barely Social");
  form.set("links", "https://barelysocial.co");
  form.set("message", "Leads are getting lost after the form.");

  const response = await render("/api/submit", {
    method: "POST",
    body: form,
    headers: {
      referer: "http://localhost/#audit",
      "user-agent": "node-test",
    },
  });

  assert.equal(response.status, 200);
  assert.match(await response.text(), /Got it/);
});

test("rejects incomplete submissions and quietly absorbs honeypot spam", async () => {
  const incomplete = new FormData();
  incomplete.set("formType", "Contact");
  incomplete.set("firstName", "Jec");
  incomplete.set("email", "not-an-email");

  const invalidResponse = await render("/api/submit", {
    method: "POST",
    body: incomplete,
  });

  assert.equal(invalidResponse.status, 400);
  assert.match(await invalidResponse.text(), /One small thing/);

  const spam = new FormData();
  spam.set("formType", "Contact");
  spam.set("website", "https://spam.example");

  const spamResponse = await render("/api/submit", {
    method: "POST",
    body: spam,
  });

  assert.equal(spamResponse.status, 200);
  assert.match(await spamResponse.text(), /Got it/);
});
