import React from "react";
import { Link } from "react-router-dom";
import PageHeroImmersive from "../components/PageHeroImmersive";
import SectionFigure from "../components/SectionFigure";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { ROUTES } from "../lib/routes";
import { pageTitle } from "../lib/siteMeta";
import { SITE_CALENDLY_URL } from "../lib/siteLinks";
import {
  IconBolt,
  IconCodeBracket,
  IconDevicePhone,
  IconGlobe,
  IconLayers,
  IconSearch,
} from "../components/icons";

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "Do you work with international clients?",
    a: "Yes — we work with clients across India, the US, the UK, and Australia. All communication is in English and we're available for calls during US and UK business hours.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Absolutely. We sign NDAs and IP assignment agreements on every project before work begins.",
  },
  {
    q: "What timezone do you work in?",
    a: "We're based in Udaipur, India (IST, UTC+5:30). We schedule overlap calls between 6 PM–11 PM IST — which is morning in the US and afternoon in the UK.",
  },
  {
    q: "Fixed-price or hourly?",
    a: "Both. Most projects are fixed-price with a clear scope. Ongoing work is billed hourly. We'll recommend the right structure for your situation.",
  },
  {
    q: "How long does a typical project take?",
    a: "Marketing website: 2–3 weeks. Web application: 6–10 weeks. MVP: 4–8 weeks. Timelines are agreed in writing before we start.",
  },
  {
    q: "What if the scope changes?",
    a: "You get a written change request with the time and cost impact before we proceed. No surprise invoices.",
  },
];

export default function ServicesPage() {
  useDocumentTitle(pageTitle("Services"));

  return (
    <>
      <PageHeroImmersive centered>
        <h1 className="hero-title typography-display">
          Six Ways We Can <span className="text-gradient">Help You Ship</span>
        </h1>
        <p className="hero-subtext hero-subtext--premium">
          From a landing page to a production-ready AI integration — every engagement is scoped clearly, built cleanly, and
          delivered with full documentation. We work with startups, SMEs, and product teams worldwide.
        </p>
      </PageHeroImmersive>

      <section className="section">
        <div className="section-figure-host">
          <SectionFigure pattern="constellation" />
        </div>
        <article id="website-development" className="card service-row">
          <div>
            <div className="icon-badge icon-badge-symbol" aria-hidden>
              <IconGlobe width={26} height={26} />
            </div>
            <h2>Website Development</h2>
            <p className="muted">
              Fast, mobile-first websites built to rank on Google and convert visitors into enquiries. From portfolio sites to
              full marketing platforms — designed for trust, built for speed.
            </p>
            <Link to={ROUTES.contact} className="quote-link typography-link">
              Get a Quote →
            </Link>
          </div>
          <ul className="feature-columns feature-columns-tight">
            <li>Custom Design & Development</li>
            <li>Responsive & Mobile-First</li>
            <li>SEO Optimized</li>
            <li>CMS Integration</li>
            <li>Performance Optimized</li>
            <li>Ongoing Maintenance</li>
          </ul>
        </article>

        <article id="web-applications" className="card service-row">
          <div>
            <div className="icon-badge icon-badge-symbol" aria-hidden>
              <IconCodeBracket width={26} height={26} />
            </div>
            <h2>Web Applications</h2>
            <p className="muted">
              Custom web applications built on React and Node.js — from internal dashboards and admin tools to customer-facing
              SaaS products. Designed to handle real users from day one.
            </p>
            <Link to={ROUTES.contact} className="quote-link typography-link">
              Get a Quote →
            </Link>
          </div>
          <ul className="feature-columns feature-columns-tight">
            <li>React / Next.js / Node.js</li>
            <li>Real-time Features</li>
            <li>API Development</li>
            <li>Database Architecture</li>
            <li>Cloud Deployment</li>
            <li>Security Best Practices</li>
          </ul>
        </article>

        <article id="mobile-applications" className="card service-row">
          <div>
            <div className="icon-badge icon-badge-symbol" aria-hidden>
              <IconDevicePhone width={26} height={26} />
            </div>
            <h2>Mobile Applications</h2>
            <p className="muted">
              Cross-platform iOS and Android apps built with React Native. One codebase, two platforms — without sacrificing
              performance or user experience.
            </p>
            <Link to={ROUTES.contact} className="quote-link typography-link">
              Get a Quote →
            </Link>
          </div>
          <ul className="feature-columns feature-columns-tight">
            <li>iOS & Android Development</li>
            <li>Cross-platform Delivery</li>
            <li>App Store Deployment</li>
            <li>Push Notifications</li>
            <li>API Integrations</li>
            <li>Performance Monitoring</li>
          </ul>
        </article>

        <article id="automation-tools" className="card service-row">
          <div>
            <div className="icon-badge icon-badge-symbol" aria-hidden>
              <IconSearch width={26} height={26} />
            </div>
            <h2>Automation Tools</h2>
            <p className="muted">
              We build the internal tools your team actually uses — automated workflows, API integrations, background job
              processors, and reporting pipelines that eliminate manual work and reduce human error.
            </p>
            <Link to={ROUTES.contact} className="quote-link typography-link">
              Get a Quote →
            </Link>
          </div>
          <ul className="feature-columns feature-columns-tight">
            <li>Process automation &amp; orchestration</li>
            <li>API &amp; webhook integrations</li>
            <li>Scheduled jobs &amp; background workers</li>
            <li>Reporting &amp; alerting pipelines</li>
            <li>Low-friction operator UX</li>
            <li>Observability &amp; runbooks</li>
          </ul>
        </article>

        <article id="ai-integration" className="card service-row">
          <div>
            <div className="icon-badge icon-badge-symbol" aria-hidden>
              <IconLayers width={26} height={26} />
            </div>
            <h2>AI Integration</h2>
            <p className="muted">
              We integrate LLMs into your product the right way — with retrieval (RAG) grounded in your own data, evaluation
              harnesses to catch hallucinations, and guardrails that keep outputs safe and on-policy. No AI gimmicks. Practical,
              tested, production-ready.
            </p>
            <Link to={ROUTES.contact} className="quote-link typography-link">
              Get a Quote →
            </Link>
          </div>
          <ul className="feature-columns feature-columns-tight">
            <li>RAG &amp; knowledge-grounded answers</li>
            <li>LLM orchestration &amp; prompt lifecycle</li>
            <li>Evaluation harnesses &amp; safety checks</li>
            <li>Vector search &amp; document pipelines</li>
            <li>Human-in-the-loop review flows</li>
            <li>Cost &amp; latency-aware design</li>
          </ul>
        </article>

        <article id="mvp-development" className="card service-row">
          <div>
            <div className="icon-badge icon-badge-symbol" aria-hidden>
              <IconBolt width={26} height={26} />
            </div>
            <h2>MVP Development</h2>
            <p className="muted">
              Got an idea and a deadline? We scope your MVP to the essential features, build it in 4–8 weeks, and hand it over
              ready for real users and investor demos — with a roadmap for what comes next.
            </p>
            <Link to={ROUTES.contact} className="quote-link typography-link">
              Get a Quote →
            </Link>
          </div>
          <ul className="feature-columns feature-columns-tight">
            <li>Rapid Discovery Workshops</li>
            <li>Core Feature Prioritization</li>
            <li>Launch-ready Architecture</li>
            <li>Lean Delivery Timeline</li>
            <li>Usage Analytics Setup</li>
            <li>Iteration Roadmap</li>
          </ul>
        </article>
      </section>

      <section className="section section-centered">
        <span className="section-kicker">OUR PROCESS</span>
        <h2 className="section-title">How We Work</h2>
        <p className="section-subtitle">
          Every project follows the same four-phase process — so you always know what&apos;s happening, what&apos;s coming next, and
          what you&apos;re paying for.
        </p>

        <div className="process-flow-rail reveal-on-scroll" data-testid="process-flow-rail">
          <ol className="process-flow-steps">
            <li className="process-flow-step">
              <div className="process-step-marker">
                <IconSearch width={22} height={22} />
              </div>
              <h3 className="process-step-title">Discovery</h3>
              <p className="muted process-step-copy">
                Week 1 — We define goals, users, scope, and success criteria together. You get a written brief and fixed-price
                quote before any code is written.
              </p>
            </li>
            <li className="process-flow-connector" aria-hidden />
            <li className="process-flow-step">
              <div className="process-step-marker">
                <IconLayers width={22} height={22} />
              </div>
              <h3 className="process-step-title">Design</h3>
              <p className="muted process-step-copy">
                Week 2 — Wireframes and UI prototypes shared for your feedback. Nothing moves to code until you&apos;ve approved the
                design direction.
              </p>
            </li>
            <li className="process-flow-connector" aria-hidden />
            <li className="process-flow-step">
              <div className="process-step-marker">
                <IconCodeBracket width={22} height={22} />
              </div>
              <h3 className="process-step-title">Development</h3>
              <p className="muted process-step-copy">
                Weeks 3–6 — Weekly builds with written updates. You can see progress, give feedback, and track every milestone in
                real time.
              </p>
            </li>
            <li className="process-flow-connector" aria-hidden />
            <li className="process-flow-step">
              <div className="process-step-marker">
                <IconBolt width={22} height={22} />
              </div>
              <h3 className="process-step-title">Launch &amp; Support</h3>
              <p className="muted process-step-copy">
                Final week — Deployment, documentation, and a 2-week post-launch support window included on every project.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="section">
        <article className="card service-assurance reveal-on-scroll" data-testid="service-assurance">
          <div className="service-assurance-stack">
            <div>
              <span className="section-kicker">DELIVERY ASSURANCE</span>
              <h2 className="section-title">What every Commiters project includes</h2>
              <p className="section-subtitle">Not add-ons. Not extras. Standard on every project, every time.</p>
            </div>
            <ul className="assurance-list assurance-list--rich">
              <li>Written weekly progress updates — no surprises</li>
              <li>Performance-first, tested code with full documentation</li>
              <li>2-week post-launch support window included</li>
              <li>Direct founder communication — you message the developer, not a project manager</li>
            </ul>
          </div>
          <footer className="service-assurance-footer service-assurance-footer--start">
            <a href={SITE_CALENDLY_URL} className="btn btn-minimal btn-minimal--solid" target="_blank" rel="noopener noreferrer">
              Book a Free 20-Min Call →
            </a>
          </footer>
        </article>
      </section>

      <section className="section services-faq-section" data-testid="services-faq">
        <span className="section-kicker">FREQUENTLY ASKED</span>
        <h2 className="section-title">Questions we get asked a lot</h2>
        <div className="services-faq-list margin-top-lg">
          {FAQ_ITEMS.map((item) => (
            <details key={item.q} className="services-faq-item card">
              <summary className="services-faq-summary">{item.q}</summary>
              <p className="muted services-faq-answer">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
