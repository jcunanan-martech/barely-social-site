type Field = {
  label: string;
  value: FormDataEntryValue | null;
  required?: boolean;
};

type SubmissionPayload = {
  submittedAt: string;
  formType: string;
  firstName: string;
  email: string;
  phone: string;
  company: string;
  links: string;
  message: string;
  sourceUrl: string;
  userAgent: string;
  fields: Record<string, string>;
};

const fallbackWebhookUrl = "https://hook.us2.make.com/er3qlen43suoqaibrnp3lcp8oxxs6sb4";

export async function POST(request: Request): Promise<Response> {
  const formData = await request.formData();
  const formType = textValue(formData.get("formType")) || "Contact";

  if (textValue(formData.get("website"))) {
    return thankYouResponse();
  }

  const fields =
    formType === "Systems Audit"
      ? [
          { label: "First name", value: formData.get("firstName"), required: true },
          { label: "Email", value: formData.get("email"), required: true },
          { label: "Business or product", value: formData.get("company"), required: true },
          { label: "What should we audit?", value: formData.get("links"), required: true },
          { label: "Tools and workflow pain", value: formData.get("message") },
        ]
      : [
          { label: "First name", value: formData.get("firstName"), required: true },
          { label: "Email", value: formData.get("email"), required: true },
          { label: "Phone", value: formData.get("phone") },
          { label: "What is on your mind?", value: formData.get("message"), required: true },
        ];

  const missingField = fields.find((field) => field.required && !textValue(field.value));
  const email = textValue(formData.get("email"));

  if (missingField || !isProbablyEmail(email)) {
    return statusResponse(
      "One small thing",
      "Please go back and make sure your name, email, and required details are filled in correctly.",
      400,
    );
  }

  await logSubmissionToSheet(buildSubmissionPayload(request, formData, formType, fields));

  return thankYouResponse();
}

function buildSubmissionPayload(
  request: Request,
  formData: FormData,
  formType: string,
  fields: Field[],
): SubmissionPayload {
  return {
    submittedAt: new Date().toISOString(),
    formType,
    firstName: textValue(formData.get("firstName")),
    email: textValue(formData.get("email")),
    phone: textValue(formData.get("phone")),
    company: textValue(formData.get("company")),
    links: textValue(formData.get("links")),
    message: textValue(formData.get("message")) || textValue(formData.get("notes")),
    sourceUrl: request.headers.get("referer") || request.url,
    userAgent: request.headers.get("user-agent") || "",
    fields: Object.fromEntries(fields.map((field) => [field.label, textValue(field.value)])),
  };
}

async function logSubmissionToSheet(submission: SubmissionPayload): Promise<void> {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL || fallbackWebhookUrl;

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.GOOGLE_SHEETS_WEBHOOK_SECRET
          ? { "X-Barely-Social-Secret": process.env.GOOGLE_SHEETS_WEBHOOK_SECRET }
          : {}),
      },
      body: JSON.stringify(submission),
    });

    if (!response.ok) {
      throw new Error(`Submission webhook returned ${response.status}`);
    }
  } catch {
    // Keep the visitor confirmation calm even if Make is being edited.
  }
}

function textValue(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value.trim() : "";
}

function isProbablyEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function thankYouResponse(): Response {
  return statusResponse(
    "Got it",
    "Thank you. We received your note and will come back with a plan that makes sense.",
    200,
  );
}

function statusResponse(title: string, message: string, status: number): Response {
  return new Response(
    `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(title)} | Barely Social</title>
    <style>
      body {
        min-height: 100vh;
        margin: 0;
        display: grid;
        place-items: center;
        background: radial-gradient(circle at 70% 20%, rgba(158, 255, 140, 0.25), transparent 24rem), #000;
        color: #f7fff6;
        font-family: Arial, Helvetica, sans-serif;
      }
      main {
        width: min(680px, calc(100% - 32px));
        border: 1px solid rgba(158, 255, 140, 0.34);
        border-radius: 28px;
        padding: clamp(28px, 6vw, 56px);
        background: rgba(8, 19, 12, 0.88);
        box-shadow: 0 24px 80px rgba(0, 0, 0, 0.4);
      }
      h1 {
        margin: 0 0 18px;
        font-size: clamp(2.5rem, 8vw, 5rem);
        font-weight: 400;
        letter-spacing: 0;
        line-height: 0.95;
      }
      p {
        margin: 0 0 28px;
        color: #b8c8ba;
        font-size: 1.15rem;
        line-height: 1.6;
      }
      a {
        min-height: 48px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #000;
        border-radius: 999px;
        padding: 0 22px;
        background: #9eff8c;
        color: #000;
        font-weight: 800;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <main>
      <h1>${escapeHtml(title)}</h1>
      <p>${escapeHtml(message)}</p>
      <a href="/#top">Back to site</a>
    </main>
  </body>
</html>`,
    {
      status,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
      },
    },
  );
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
