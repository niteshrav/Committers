import React from "react";
import { Link } from "react-router-dom";
import PageHeroImmersive from "../components/PageHeroImmersive";
import SectionFigure from "../components/SectionFigure";
import { IconBolt, IconCodeBracket, IconDevicePhone, IconGlobe, IconLayers, IconSearch } from "../components/icons";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { ROUTES } from "../lib/routes";
import { DEFAULT_DOCUMENT_TITLE } from "../lib/siteMeta";
import TechStackTicker from "../components/TechStackTicker";

export default function HomePage() {
  useDocumentTitle(DEFAULT_DOCUMENT_TITLE);

  return (
    <>
      <PageHeroImmersive
        companion={
          <div className="premium-metrics premium-metrics--immersive" data-testid="premium-metrics">
            <article>
              <h3>Founder-Led Delivery</h3>
              <p>
                You work directly with Nitesh — no account managers, no handoffs, no lost context.
              </p>
            </article>
            <article>
              <h3>Fast Launch Cycles</h3>
              <p>
                Weekly milestones with written updates — you always know exactly where your project stands.
              </p>
            </article>
            <article>
              <h3>Quality-First Engineering</h3>
              <p>Clean, tested, documented code — built to scale from day one, not patched later.</p>
            </article>
          </div>
        }
      >
        <span className="section-kicker hero-kicker">Founder-Led · No Middlemen · Direct Communication</span>
        <h1 className="hero-title typography-display typography-display--hero">
          Code Your <span className="highlight-pill highlight-pill--glass highlight-pill--hero">Success</span>
        </h1>
        <p className="hero-subtext hero-subtext--premium">
          Commiters builds premium websites, web apps, and AI-powered tools for startups and growing businesses worldwide. You
          talk directly to the founder — from first brief to final launch.
        </p>
        <div className="hero-actions mobile-safe-actions" data-testid="hero-actions">
          <Link className="btn btn-primary btn-magnetic btn-hero-primary" to={ROUTES.contact}>
            Start a Free Conversation
          </Link>
          <Link className="btn btn-secondary btn-magnetic-soft btn-hero-secondary" to={ROUTES.services}>
            See What We Build
          </Link>
        </div>
      </PageHeroImmersive>

      <section className="section section-centered reveal-on-scroll" data-testid="home-services-section">
        <div className="section-figure-host">
          <SectionFigure pattern="layers" />
        </div>
        <span className="section-kicker">OUR SERVICES</span>
        <h2 className="section-title">Everything You Need to Ship</h2>
        <p className="section-subtitle">
          From a simple marketing site to a production-ready AI-powered application — we scope it, build it, and hand it over
          clean.
        </p>
        <div className="grid grid-3 margin-top-lg" data-testid="home-offer-grid">
          <div className="card card-service">
            <div className="icon-badge icon-badge-symbol" aria-hidden>
              <IconGlobe width={26} height={26} />
            </div>
            <h3>Website Development</h3>
            <p className="muted">Websites and landing pages tuned for speed and trust.</p>
          </div>
          <div className="card card-service">
            <div className="icon-badge icon-badge-symbol" aria-hidden>
              <IconCodeBracket width={26} height={26} />
            </div>
            <h3>Web Applications</h3>
            <p className="muted">Custom web software for your team and your customers.</p>
          </div>
          <div className="card card-service">
            <div className="icon-badge icon-badge-symbol" aria-hidden>
              <IconDevicePhone width={26} height={26} />
            </div>
            <h3>Mobile Applications</h3>
            <p className="muted">Polished app experiences on iOS and Android.</p>
          </div>
          <div className="card card-service">
            <div className="icon-badge icon-badge-symbol" aria-hidden>
              <IconSearch width={26} height={26} />
            </div>
            <h3>Automation Tools</h3>
            <p className="muted">Workflows and integrations that reduce manual work.</p>
          </div>
          <div className="card card-service">
            <div className="icon-badge icon-badge-symbol" aria-hidden>
              <IconLayers width={26} height={26} />
            </div>
            <h3>AI Integration</h3>
            <p className="muted">Practical AI wired to your data with clear guardrails.</p>
          </div>
          <div className="card card-service">
            <div className="icon-badge icon-badge-symbol" aria-hidden>
              <IconBolt width={26} height={26} />
            </div>
            <h3>MVP Development</h3>
            <p className="muted">A focused first release you can ship and iterate on.</p>
          </div>
        </div>
      </section>

      <section className="section reveal-on-scroll" data-testid="home-portfolio-section">
        <span className="section-kicker">OUR WORK</span>
        <h2 className="section-title section-centered">Projects We&apos;re Proud Of</h2>
        <div className="grid grid-3 margin-top-lg home-portfolio-grid">
          <article className="card card-service home-portfolio-card">
            <h3 className="home-portfolio-title">Commiters.com</h3>
            <p className="muted home-portfolio-type">Website · React + Vite</p>
            <p className="muted">Our own site — designed and built from scratch.</p>
            <a className="quote-link typography-link" href="https://www.commiters.com/" target="_blank" rel="noopener noreferrer">
              View Live →
            </a>
          </article>
          <article className="card card-service home-portfolio-card">
            <h3 className="home-portfolio-title">AI Summariser</h3>
            <p className="muted home-portfolio-type">Python, Google ADK, LLM</p>
            <p className="muted">
              Condenses long documents and threads into accurate briefs — with evaluation hooks and guardrails suitable for
              production workflows.
            </p>
            <Link className="quote-link typography-link" to={ROUTES.contact}>
              Discuss this project →
            </Link>
          </article>
          <article className="card card-service home-portfolio-card">
            <h3 className="home-portfolio-title">Customer Service Portal</h3>
            <p className="muted home-portfolio-type">LLM, RAG with React, Node.js</p>
            <p className="muted">
              Ticketing, routing, and operator dashboards that give support teams clear SLAs, audit trails, and faster resolutions.
            </p>
            <Link className="quote-link typography-link" to={ROUTES.contact}>
              Discuss this project →
            </Link>
          </article>
        </div>
      </section>

      <section className="section section-centered reveal-on-scroll" data-testid="home-tech-stack-section">
        <span className="section-kicker">TECHNOLOGIES WE USE</span>
        <div className="home-tech-stack-anchor margin-top-lg">
          <TechStackTicker />
        </div>
      </section>

      <section className="section section-tight-top reveal-on-scroll" data-testid="home-cta-section">
        <div className="cta-panel">
          <h2>Have a project in mind?</h2>
          <p>
            We&apos;re an early-stage studio that takes on a small number of projects at a time. That means you get
            Nitesh&apos;s full attention — not a junior developer, not a template, not a rushed job.
          </p>
          <p>
            If your project is a good fit, we&apos;ll tell you honestly. If it&apos;s not, we&apos;ll tell you that too.
          </p>
          <Link className="btn btn-secondary" to={ROUTES.contact}>
            Tell Us What You&apos;re Building →
          </Link>
        </div>
      </section>
    </>
  );
}
