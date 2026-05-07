import React from "react";
import { Link } from "react-router-dom";
import PageHeroImmersive from "../components/PageHeroImmersive";
import { IconCodeBracket, IconDevicePhone, IconGlobe } from "../components/icons";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { ROUTES } from "../lib/routes";
import { DEFAULT_DOCUMENT_TITLE } from "../lib/siteMeta";

export default function HomePage() {
  useDocumentTitle(DEFAULT_DOCUMENT_TITLE);

  return (
    <>
      <PageHeroImmersive
        companion={
          <div className="premium-metrics premium-metrics--immersive" data-testid="premium-metrics">
            <article>
              <h3>Founder-Led Delivery</h3>
              <p>Direct communication from discovery to launch.</p>
            </article>
            <article>
              <h3>Fast Launch Cycles</h3>
              <p>Structured weekly milestones for predictable delivery.</p>
            </article>
            <article>
              <h3>Quality-First Engineering</h3>
              <p>TDD workflows and scalable architecture from day one.</p>
            </article>
          </div>
        }
      >
        <span className="section-kicker hero-kicker">FOUNDER-LED SOFTWARE STUDIO</span>
        <h1 className="hero-title typography-display typography-display--hero">
          Code Your <span className="highlight-pill highlight-pill--glass highlight-pill--hero">Success</span>
        </h1>
        <p className="hero-subtext hero-subtext--premium">
          Commiters builds premium websites and applications for small and local businesses that need speed, quality, and clear
          communication.
        </p>
        <div className="hero-actions mobile-safe-actions" data-testid="hero-actions">
          <Link className="btn btn-primary btn-magnetic btn-hero-primary" to={ROUTES.contact}>
            Book a Free Consultation
          </Link>
          <Link className="btn btn-secondary btn-magnetic-soft btn-hero-secondary" to={ROUTES.services}>
            Explore Services
          </Link>
        </div>
      </PageHeroImmersive>

      <section className="section section-centered reveal-on-scroll" data-testid="home-services-section">
        <span className="section-kicker">WHAT WE BUILD</span>
        <h2 className="section-title">Premium Product Delivery</h2>
        <p className="section-subtitle">
          Our process combines product strategy, design rigor, and engineering depth.
        </p>
        <div className="grid grid-3 margin-top-lg" data-testid="home-offer-grid">
          <div className="card card-service">
            <div className="icon-badge icon-badge-symbol" aria-hidden>
              <IconGlobe width={26} height={26} />
            </div>
            <h3>Website Development</h3>
            <p className="muted">High-performance websites designed for conversion and trust.</p>
          </div>
          <div className="card card-service">
            <div className="icon-badge icon-badge-symbol" aria-hidden>
              <IconCodeBracket width={26} height={26} />
            </div>
            <h3>Web Applications</h3>
            <p className="muted">Scalable platforms for operations, customer journeys, and growth.</p>
          </div>
          <div className="card card-service">
            <div className="icon-badge icon-badge-symbol" aria-hidden>
              <IconDevicePhone width={26} height={26} />
            </div>
            <h3>Mobile Applications</h3>
            <p className="muted">App experiences that feel fast, polished, and user-first.</p>
          </div>
        </div>
      </section>

      <section className="section section-tight-top reveal-on-scroll" data-testid="home-cta-section">
        <div className="cta-panel">
          <h2>Ready to turn your idea into revenue?</h2>
          <p>Tell us your idea and we will help you shape it into a scalable product.</p>
          <Link className="btn btn-secondary" to={ROUTES.contact}>
            Start Your Project Brief
          </Link>
        </div>
      </section>
    </>
  );
}
