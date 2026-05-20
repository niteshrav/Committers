import React, { useState } from "react";
import PageHeroImmersive from "../components/PageHeroImmersive";
import SectionFigure from "../components/SectionFigure";
import { IconGitHub, IconLinkedIn } from "../components/icons";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { SITE_CALENDLY_URL, SITE_GITHUB_URL, SITE_LINKEDIN_URL } from "../lib/siteLinks";
import { pageTitle } from "../lib/siteMeta";

function FounderPhoto() {
  const [useFallback, setUseFallback] = useState(false);

  if (useFallback) {
    return (
      <div className="founder-avatar founder-avatar--fallback" aria-hidden>
        NR
      </div>
    );
  }

  return (
    <img
      className="founder-photo"
      src="/founder.jpg"
      alt="Nitesh Rav — Founder & Lead Developer, Commiters"
      width={132}
      height={132}
      loading="lazy"
      decoding="async"
      onError={() => setUseFallback(true)}
    />
  );
}

export default function AboutPage() {
  useDocumentTitle(pageTitle("About"));

  return (
    <>
      <PageHeroImmersive centered>
        <span className="section-kicker">THE TEAM</span>
        <h1 className="hero-title typography-display">
          Built by a Developer, <span className="highlight-pill highlight-pill--glass highlight-pill--hero">Run for Founders</span>
        </h1>
        <p className="hero-subtext hero-subtext--premium">
          Commiters is a founder-led software studio based in Udaipur, India. We build websites, web apps, mobile applications,
          and AI-powered tools for startups and businesses across India, the US, and the UK — with direct founder involvement on
          every project.
        </p>
      </PageHeroImmersive>

      <section className="section">
        <div className="section-figure-host">
          <SectionFigure pattern="constellation" />
        </div>
        <div className="grid grid-2">
          <article className="card card-value">
            <div className="icon-badge">◎</div>
            <h2>Our Mission</h2>
            <p className="muted">
              To build software that actually ships — clean code, honest timelines, and direct communication on every project,
              no matter the size.
            </p>
          </article>
          <article className="card card-value">
            <div className="icon-badge icon-badge-teal">◉</div>
            <h2>Our Vision</h2>
            <p className="muted">
              To become the go-to software partner for founders who want a technical co-builder — not just a vendor — in their
              corner from day one.
            </p>
          </article>
        </div>
      </section>

      <section className="section section-centered">
        <span className="section-kicker">LEADERSHIP</span>
        <h2 className="section-title">Meet the Founder</h2>
        <FounderPhoto />
        <h3 className="founder-title">Nitesh Rav</h3>
        <p className="founder-tagline muted">Founder & Lead Developer · Udaipur, India</p>
        <div className="founder-social-row">
          <a href={SITE_LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="founder-social-link" aria-label="Nitesh on LinkedIn">
            <IconLinkedIn width={22} height={22} />
            <span>LinkedIn</span>
          </a>
          <a href={SITE_GITHUB_URL} target="_blank" rel="noopener noreferrer" className="founder-social-link" aria-label="Nitesh on GitHub">
            <IconGitHub width={22} height={22} />
            <span>GitHub</span>
          </a>
        </div>
        <p className="section-subtitle founder-description">
          Nitesh is a full-stack developer with hands-on experience in React, Node.js, PostgreSQL, and AI/LLM integration. He
          founded Commiters to offer something most agencies don&apos;t: direct access to the developer building your product.
          Every project at Commiters is scoped, built, and delivered by Nitesh personally — no junior developers, no outsourcing,
          no lost context between teams. Clients get faster decisions, cleaner code, and a builder who genuinely cares about the
          outcome.
        </p>
      </section>

      <section className="section">
        <div className="founder-principles reveal-on-scroll" data-testid="founder-principles">
          <article className="card">
            <h3>Direct founder involvement</h3>
            <p className="muted">
              You message the person writing your code — decisions happen in hours, not days.
            </p>
          </article>
          <article className="card">
            <h3>Clear scope and delivery cadence</h3>
            <p className="muted">
              Each phase has a fixed scope and a written update — so you always know what&apos;s done, what&apos;s next, and what it
              costs.
            </p>
          </article>
          <article className="card">
            <h3>Quality and long-term maintainability</h3>
            <p className="muted">
              Code is documented, tested, and handed over in a state you can maintain, extend, or hand to another developer
              without confusion.
            </p>
          </article>
        </div>
      </section>

      <section className="section section-centered">
        <span className="section-kicker">OUR VALUES</span>
        <h2 className="section-title">What Drives Us</h2>
        <div className="grid grid-4 margin-top-lg about-values-grid">
          <article className="card card-service">
            <div className="icon-badge">◎</div>
            <h3>Innovation First</h3>
            <p className="muted">
              We stay current with modern stacks and AI capabilities — so your product benefits from what&apos;s available today,
              not two years ago.
            </p>
          </article>
          <article className="card card-service">
            <div className="icon-badge">✦</div>
            <h3>Quality Delivered</h3>
            <p className="muted">
              We don&apos;t ship code we wouldn&apos;t put our name on. Every project includes testing, documentation, and a clean
              handoff.
            </p>
          </article>
          <article className="card card-service">
            <div className="icon-badge">◉</div>
            <h3>Client Focused</h3>
            <p className="muted">
              We tell you when something won&apos;t work, suggest better approaches when we see them, and flag risks early —
              because honest advice beats a yes-man.
            </p>
          </article>
          <article className="card card-service">
            <div className="icon-badge">◇</div>
            <h3>Async-Friendly</h3>
            <p className="muted">
              We work with clients across India, the US, and the UK. Written updates, clear communication, and overlap call
              hours for every timezone — progress never waits for a reply.
            </p>
          </article>
        </div>
      </section>

      <section className="section section-centered reveal-on-scroll" data-testid="about-cta-section">
        <div className="cta-panel">
          <h2 className="section-title">Want to work directly with Nitesh?</h2>
          <p className="muted">
            Book a free 20-minute call. No pitch, no pressure — just an honest conversation about your project.
          </p>
          <a className="btn btn-primary" href={SITE_CALENDLY_URL} target="_blank" rel="noopener noreferrer">
            Book a Free Call →
          </a>
        </div>
      </section>
    </>
  );
}
