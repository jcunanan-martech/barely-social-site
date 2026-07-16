const services = [
  {
    title: "Landing Pages & Websites",
    kicker: "Launch pages, sales pages, service sites, conversion paths",
    copy:
      "Sharp pages built around your offer, audience, and next step. We make your site easier to trust, easier to navigate, and easier to buy from.",
  },
  {
    title: "Automation & Workflow Builds",
    kicker: "Lead routing, follow-ups, approvals, client ops",
    copy:
      "We connect the moving pieces behind the scenes so leads, clients, content, and updates stop living in a dozen disconnected places.",
  },
  {
    title: "Lifecycle Marketing Systems",
    kicker: "SaaS journeys, campaigns, content, retention loops",
    copy:
      "From first click to activation, nurture, and expansion, we design touchpoints that keep the right people moving without manual chaos.",
  },
];

const process = [
  {
    step: "01",
    title: "Map the messy parts",
    copy:
      "We look at your offer, website, customer journey, tools, content, and handoffs to find where leads slow down or work gets repeated.",
    note: "Find the leaks before building more pipes.",
  },
  {
    step: "02",
    title: "Build the growth system",
    copy:
      "Landing pages, workflows, automations, follow-ups, dashboards, and content support come together into one calm operating flow.",
    note: "Built to move, not just look cute.",
  },
  {
    step: "03",
    title: "Launch, learn, improve",
    copy:
      "You get clear readouts on what is converting, where people drop off, and what we are improving next so growth compounds instead of drifting.",
    note: "Receipts, improvements, no delusion.",
  },
];

const packages = [
  {
    name: "Foundation",
    label: "For businesses that need a cleaner digital base",
    highlight: false,
    items: [
      "Website or landing page audit",
      "Offer and lifecycle messaging map",
      "One landing page or workflow cleanup",
      "Basic automation recommendations",
      "Simple launch and measurement plan",
    ],
  },
  {
    name: "Growth System",
    label: "For teams ready to connect pages, content, and follow-up",
    highlight: true,
    items: [
      "Everything in Foundation",
      "Landing page or website build support",
      "Lead capture and nurture workflow",
      "Lifecycle emails or campaign assets",
      "Dashboard, QA, and monthly optimization",
    ],
  },
  {
    name: "Ops Partner",
    label: "For SaaS and service teams with moving parts",
    highlight: false,
    items: [
      "Everything in Growth System",
      "Multi-step lifecycle automation",
      "Website, funnel, and CRM handoff support",
      "Content, ads, and retention workflow alignment",
      "Ongoing reporting and system improvements",
    ],
  },
];

const faqs = [
  {
    question: "How much do your packages cost?",
    answer:
      "Foundation, Growth System, and Ops Partner are quoted after a free audit so the work actually fits your website, automations, tools, and level of support.",
  },
  {
    question: "Do you work with my industry?",
    answer:
      "Yes. Barely Social works especially well for SaaS companies, founder-led service brands, online businesses, agencies, consultants, and teams with messy manual workflows.",
  },
  {
    question: "Do you still offer social media support?",
    answer:
      "Yes. Social media is still part of the work when it supports the bigger system, especially content calendars, campaign assets, nurture content, and launch support.",
  },
  {
    question: "Do you offer month-to-month options?",
    answer:
      "Yes. No long 6 to 12 month lock-ins. The goal is to keep you because the work is good, not because the contract is clingy.",
  },
  {
    question: "Do you build the automations too?",
    answer:
      "Yes. We can map, build, test, and improve automations for lead capture, follow-up, onboarding, content approvals, reporting, and client workflows.",
  },
];

const stats = [
  ["3", "system tiers"],
  ["4+", "growth channels"],
  ["30", "days to map the chaos"],
];

const lifecycleSteps = [
  ["Attract", "Social, ads, search, referrals"],
  ["Convert", "Landing page, offer, lead capture"],
  ["Nurture", "Email, CRM, AI-assisted follow-up"],
  ["Activate", "Onboarding, handoffs, task triggers"],
  ["Retain", "Reporting, campaigns, expansion loops"],
];

const tools = [
  ["HubSpot", "hubspot.com"],
  ["Braze", "braze.com"],
  ["ActiveCampaign", "activecampaign.com"],
  ["Make.com", "make.com"],
  ["n8n", "n8n.io"],
  ["Keap", "keap.com"],
  ["Leadpages", "leadpages.com"],
  ["Kajabi", "kajabi.com"],
  ["GoHighLevel", "gohighlevel.com"],
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <img className="site-star hero-star hero-star-lg" src="/star-mark.svg" alt="" aria-hidden="true" />
        <img className="site-star hero-star hero-star-sm" src="/star-mark.svg" alt="" aria-hidden="true" />
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Barely Social home">
            <span className="brand-mark">
              <img src="/star-mark.svg" alt="" aria-hidden="true" />
            </span>
            <span>Barely Social</span>
          </a>
          <div className="nav-links">
            <a className="nav-link active" href="#services">
              <span aria-hidden="true">✦</span>
              <strong>Services</strong>
            </a>
            <a className="nav-link" href="#process">
              <span aria-hidden="true">◎</span>
              <strong>Process</strong>
            </a>
            <a className="nav-link" href="#packages">
              <span aria-hidden="true">▦</span>
              <strong>Packages</strong>
            </a>
            <a className="nav-link" href="#contact">
              <span aria-hidden="true">•</span>
              <strong>Contact</strong>
            </a>
          </div>
          <a className="nav-cta" href="#audit">
            Free Audit
          </a>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Growth systems for SaaS and founder-led brands</p>
            <h1>From scattered marketing to systems that sell, follow up, and scale.</h1>
            <p className="hero-lede">
              We build landing pages, websites, automations, and lifecycle
              workflows that turn attention into action. You run the business.
              We will connect the messy internet parts.
            </p>
            <div className="hero-actions" aria-label="Primary actions">
              <a className="button primary" href="#audit">
                Get a Free Systems Audit
              </a>
              <a className="button secondary" href="#packages">
                See Packages
              </a>
            </div>
            <div className="trust-row" aria-label="Included with audit">
              <span>No card required</span>
              <span>Lifecycle map included</span>
              <span>Built for busy teams</span>
            </div>
          </div>

          <div className="hero-panel" aria-label="Barely Social growth system preview">
            <div className="phone-shell">
              <div className="phone-dashboard">
                <span>BS</span>
                <div>
                  <strong>Lifecycle hub</strong>
                  <p>4 workflows active this week</p>
                </div>
              </div>
              <div className="post-card top-card">
                <span className="post-label">Landing Page</span>
                <strong>Lead magnet live</strong>
                <p>Offer, proof, CTA, and tracking ready.</p>
              </div>
              <div className="post-card mid-card">
                <span className="post-label">Automation</span>
                <strong>Follow-up sequence</strong>
                <p>CRM update, email nurture, task trigger.</p>
              </div>
              <div className="post-card bottom-card">
                <span className="post-label">Workflow</span>
                <strong>Client handoff cleaned</strong>
                <p>Form intake, reminders, and status updates.</p>
              </div>
              <div className="metric-card">
                <span>Monthly momentum</span>
                <strong>Marketing engine synced</strong>
                <p>Pages, content, automations, and reporting in one calm workflow.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="marquee" aria-label="Barely Social benefits">
        <span>Strategy</span>
        <span>Landing Pages</span>
        <span>Websites</span>
        <span>Automation</span>
        <span>Workflows</span>
        <span>Lifecycle</span>
      </section>

      <section className="section intro" id="services">
        <div className="section-heading">
          <p className="eyebrow">What we do</p>
          <h2>Marketing systems that stop feeling scattered and start acting like an advantage.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <p>{service.kicker}</p>
              <h3>{service.title}</h3>
              <span>{service.copy}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section split">
        <img className="site-star split-star" src="/star-mark.svg" alt="" aria-hidden="true" />
        <div>
          <p className="eyebrow">Beyond basic</p>
          <h2>Why Barely Social is more than a posting agency.</h2>
        </div>
        <div className="split-copy">
          <p>
            The sauce is not just better-looking posts. It is a system that makes
            your offer easier to understand, your pages easier to convert, and
            your follow-up easier to trust across every channel.
          </p>
          <p>
            Clear pages, clean automations, stronger lifecycle messaging, and
            reporting you can actually read on your lunch break. Cute brand,
            serious process.
          </p>
        </div>
      </section>

      <section className="section workflow" aria-label="AI workflow lifecycle marketing illustration">
        <div className="workflow-copy">
          <p className="eyebrow">AI workflow build</p>
          <h2>Lifecycle marketing that keeps moving after the first click.</h2>
          <p>
            We design the journey, then build the automations around it: capture
            the lead, route the data, trigger the next message, update the team,
            and surface what needs attention.
          </p>
        </div>
        <div className="workflow-visual" aria-hidden="true">
          <div className="workflow-core">
            <span>AI</span>
            <strong>Growth OS</strong>
            <small>rules + content + triggers</small>
          </div>
          {lifecycleSteps.map(([title, detail], index) => (
            <div className={`workflow-node node-${index + 1}`} key={title}>
              <span>{title}</span>
              <p>{detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section tools" aria-label="Tools Barely Social works with">
        <div className="section-heading compact">
          <p className="eyebrow">Tools we build with</p>
          <h2>We meet your stack where it already lives.</h2>
        </div>
        <div className="tools-panel">
          <p>
            CRM, email, landing page builders, automation platforms, and client
            workflows. We help connect the tools you already use, clean up the
            handoffs, and make the system easier to run.
          </p>
          <div className="tool-grid">
            {tools.map(([tool, domain]) => (
              <span className="tool-card" key={tool}>
                <img
                  src={`https://www.google.com/s2/favicons?domain=${domain}&sz=96`}
                  alt=""
                  aria-hidden="true"
                />
                <strong>{tool}</strong>
              </span>
            ))}
          </div>
          <p className="tools-more">And more. We can work with whichever tool your team already prefers.</p>
        </div>
      </section>

      <section className="section process" id="process">
        <div className="section-heading compact">
          <p className="eyebrow">Our process</p>
          <h2>How we turn messy marketing into a working system.</h2>
        </div>
        <div className="process-list">
          {process.map((item) => (
            <article className="process-item" key={item.step}>
              <span>{item.step}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
              <strong>{item.note}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section support">
        <img className="site-star support-star" src="/star-mark.svg" alt="" aria-hidden="true" />
        <div className="section-heading">
          <p className="eyebrow">Support zone</p>
          <h2>Always within reach to support your growth systems.</h2>
        </div>
        <div className="support-grid">
          <article>
            <span>#1</span>
            <h3>Pages That Convert</h3>
            <p>Your offers get clear structure, stronger proof, and smarter calls to action so traffic has somewhere useful to go.</p>
          </article>
          <article>
            <span>#2</span>
            <h3>Automations That Carry</h3>
            <p>Leads, reminders, handoffs, and follow-ups move without everyone needing to remember every tiny step.</p>
          </article>
          <article>
            <span>#3</span>
            <h3>Decisions With Data</h3>
            <p>No MBA-required charts. Just straight-up insights on clicks, conversions, drop-offs, and next best moves.</p>
          </article>
        </div>
      </section>

      <section className="section proof">
        <div className="proof-card">
          <p className="quote-mark">"</p>
          <blockquote>
            Barely Social turned our messy website, follow-ups, and content
            ideas into one clear system. It feels like we finally have a
            marketing ops team without the payroll headache.
          </blockquote>
          <div>
            <strong>Jordan Carter</strong>
            <span>Founder, SaaS operator</span>
          </div>
        </div>
        <div className="stats-grid" aria-label="Barely Social highlights">
          {stats.map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section packages" id="packages">
        <div className="section-heading">
          <p className="eyebrow">Package tiers</p>
          <h2>Choose the level of support that fits your workflow.</h2>
        </div>
        <div className="package-grid">
          {packages.map((tier) => (
            <article className={tier.highlight ? "package-card featured" : "package-card"} key={tier.name}>
              {tier.highlight && <span className="popular">Most popular</span>}
              <h3>{tier.name}</h3>
              <p>{tier.label}</p>
              <ul>
                {tier.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a className="button package-button" href="#contact">
                Inquire Now
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section faqs" id="faq">
        <div className="section-heading compact">
          <p className="eyebrow">FAQS</p>
          <h2>Frequently asked questions.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="contact-bridge" aria-label="Start with a free systems audit">
        <img className="site-star bridge-star" src="/star-mark.svg" alt="" aria-hidden="true" />
        <div className="bridge-copy">
          <p className="eyebrow">Ready when you are</p>
          <h2>Let us find the leaks before you rebuild the whole thing.</h2>
          <a className="button primary" href="#audit">
            Get a Free Systems Audit
          </a>
        </div>
        <div className="bridge-checklist" aria-hidden="true">
          <p>Free systems audit</p>
          <div>
            <span>01</span>
            <strong>Page clarity</strong>
            <small>Is the offer obvious and easy to act on?</small>
          </div>
          <div>
            <span>02</span>
            <strong>Follow-up gaps</strong>
            <small>Where are leads waiting, wandering, or dropping off?</small>
          </div>
          <div>
            <span>03</span>
            <strong>Workflow drag</strong>
            <small>What can be automated, simplified, or connected?</small>
          </div>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="contact-copy">
          <p className="eyebrow">Contact us</p>
          <h2>Your landing page, automation, and workflow support system.</h2>
          <p>
            Send the page, funnel, automation, or workflow you are trying to
            fix. We will come back with a plan that makes sense for your brand,
            your tools, and your brain.
          </p>
          <div className="contact-details">
            <a href="mailto:hello@barelysocial.co">hello@barelysocial.co</a>
            <a href="tel:+639621298003">+63 962 1298 003</a>
            <span>Philippines and beyond</span>
          </div>
        </div>
        <form className="contact-form" action="/api/submit" method="post">
          <input type="hidden" name="formType" value="Contact" />
          <input className="form-honeypot" name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <label>
            First name
            <input name="firstName" type="text" autoComplete="given-name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            Phone
            <input name="phone" type="tel" autoComplete="tel" />
          </label>
          <label>
            What is on your mind?
            <textarea name="message" rows={5} required />
          </label>
          <button type="submit">Okay, I am Done</button>
        </form>
      </section>

      <section className="audit-modal" id="audit" aria-label="Free systems audit form">
        <a className="audit-backdrop" href="#top" aria-label="Close audit popup" />
        <div className="audit-dialog" role="dialog" aria-modal="true" aria-labelledby="audit-title">
          <a className="audit-close" href="#top" aria-label="Close audit popup">x</a>
          <div className="audit-hero">
            <img className="site-star audit-star" src="/star-mark.svg" alt="" aria-hidden="true" />
            <p className="eyebrow">Free systems audit</p>
            <h2 id="audit-title">Get an audit that actually makes sense and does not make you spiral.</h2>
          </div>
          <form className="audit-form" action="/api/submit" method="post">
            <input type="hidden" name="formType" value="Systems Audit" />
            <input className="form-honeypot" name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <label>
              First name
              <input name="firstName" type="text" placeholder="Who should we send the audit notes to?" autoComplete="given-name" required />
            </label>
            <label>
              Email *
              <input name="email" type="email" placeholder="Where should we send the findings?" autoComplete="email" required />
            </label>
            <label>
              Business or product *
              <textarea name="company" rows={3} placeholder="Tell us what you sell, who it is for, and where the business is right now." required />
            </label>
            <label>
              What should we audit? *
              <input name="links" type="text" placeholder="Paste your website, landing page, funnel, signup flow, or key links." required />
            </label>
            <label>
              Tools and workflow pain
              <textarea name="message" rows={3} placeholder="What tools are you using, what feels manual, and where are leads or customers getting stuck?" />
            </label>
            <button type="submit">Send My Systems Audit Request</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div>
          <a className="brand" href="#top">
            <span className="brand-mark">
              <img src="/star-mark.svg" alt="" aria-hidden="true" />
            </span>
            <span>Barely Social</span>
          </a>
          <p>Growth systems for pages, workflows, automations, and lifecycle marketing.</p>
        </div>
        <div className="footer-links">
          <a href="https://www.linkedin.com" rel="noreferrer">LinkedIn</a>
          <a href="https://web.facebook.com" rel="noreferrer">Facebook</a>
          <a href="https://www.instagram.com" rel="noreferrer">Instagram</a>
        </div>
        <span>© 2026 Barely Social. All rights reserved.</span>
      </footer>
    </main>
  );
}
