import React from "react";
import PageHeroImmersive from "../components/PageHeroImmersive";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { pageTitle } from "../lib/siteMeta";

export default function AboutPage() {
  useDocumentTitle(pageTitle("About"));

  return (
    <>
      <PageHeroImmersive centered>
        <span className="section-kicker">ABOUT US</span>
        <h1 className="hero-title typography-display">
          The Team Behind <span className="highlight-pill highlight-pill--glass highlight-pill--hero">Your Vision</span>
        </h1>
        <p className="hero-subtext hero-subtext--premium">
          Commiters is a forward-thinking software company dedicated to building world-class digital
          experiences. Founded with a passion for technology, we help businesses thrive in the digital
          age.
        </p>
      </PageHeroImmersive>

      <section className="section">
        <div className="grid grid-2">
          <article className="card card-value">
            <div className="icon-badge">◎</div>
            <h2>Our Mission</h2>
            <p className="muted">
              To empower businesses with innovative, scalable, and user-centric software solutions
              that drive measurable growth and lasting value.
            </p>
          </article>
          <article className="card card-value">
            <div className="icon-badge icon-badge-teal">◉</div>
            <h2>Our Vision</h2>
            <p className="muted">
              To become a globally recognized software company known for transforming ideas into
              impactful digital products.
            </p>
          </article>
        </div>
      </section>

      <section className="section section-centered">
        <span className="section-kicker">LEADERSHIP</span>
        <h2 className="section-title">Meet the Founder</h2>
        <div className="founder-avatar">NR</div>
        <h3 className="founder-title">Nitesh Rav — Founder and CEO</h3>
        <p className="section-subtitle founder-description">
          A passionate technologist and entrepreneur driven by the belief that great software can
          transform businesses. With deep expertise in web and mobile development, the founder leads
          Commiters with a vision to deliver technology that truly matters.
        </p>
      </section>

      <section className="section">
        <div className="founder-principles reveal-on-scroll" data-testid="founder-principles">
          <article className="card">
            <h3>Direct founder involvement</h3>
            <p className="muted">You collaborate directly on decisions that shape outcomes and timelines.</p>
          </article>
          <article className="card">
            <h3>Clear scope and delivery cadence</h3>
            <p className="muted">Every milestone is defined, tracked, and reviewed with full transparency.</p>
          </article>
          <article className="card">
            <h3>Quality and long-term maintainability</h3>
            <p className="muted">Solutions are engineered for reliability, performance, and future growth.</p>
          </article>
        </div>
      </section>

      <section className="section section-centered">
        <span className="section-kicker">OUR VALUES</span>
        <h2 className="section-title">What Drives Us</h2>
        <div className="grid grid-3 margin-top-lg">
          <article className="card card-service">
            <div className="icon-badge">◎</div>
            <h3>Innovation First</h3>
            <p className="muted">We push boundaries with modern technologies and creative problem-solving.</p>
          </article>
          <article className="card card-service">
            <div className="icon-badge">✦</div>
            <h3>Quality Delivered</h3>
            <p className="muted">Every line of code is crafted with precision and tested for reliability.</p>
          </article>
          <article className="card card-service">
            <div className="icon-badge">◉</div>
            <h3>Client Focused</h3>
            <p className="muted">Your success is our success. We build partnerships, not just products.</p>
          </article>
        </div>
      </section>
    </>
  );
}
