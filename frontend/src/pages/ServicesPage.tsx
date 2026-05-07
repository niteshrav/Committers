import React from "react";
import { Link } from "react-router-dom";
import PageHeroImmersive from "../components/PageHeroImmersive";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { ROUTES } from "../lib/routes";
import { pageTitle } from "../lib/siteMeta";
import {
  IconBolt,
  IconCodeBracket,
  IconDevicePhone,
  IconGlobe,
  IconLayers,
  IconSearch,
} from "../components/icons";

export default function ServicesPage() {
  useDocumentTitle(pageTitle("Services"));

  return (
    <>
      <PageHeroImmersive centered>
        <h1 className="hero-title typography-display">
          Solutions That <span className="text-gradient">Scale With You</span>
        </h1>
        <p className="hero-subtext hero-subtext--premium">
          From concept to deployment, we deliver end-to-end digital solutions for small and local
          businesses that need serious execution.
        </p>
      </PageHeroImmersive>

      <section className="section">
        <article className="card service-row">
          <div>
            <div className="icon-badge icon-badge-symbol" aria-hidden>
              <IconGlobe width={26} height={26} />
            </div>
            <h2>Website Development</h2>
            <p className="muted">
              We build fast, responsive, and SEO-friendly websites that establish your online presence
              and convert visitors into customers.
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

        <article className="card service-row">
          <div>
            <div className="icon-badge icon-badge-symbol" aria-hidden>
              <IconCodeBracket width={26} height={26} />
            </div>
            <h2>Web Applications</h2>
            <p className="muted">
              Powerful, scalable web applications built with modern frameworks. From dashboards to
              SaaS platforms, we handle complexity with elegance.
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

        <article className="card service-row">
          <div>
            <div className="icon-badge icon-badge-symbol" aria-hidden>
              <IconDevicePhone width={26} height={26} />
            </div>
            <h2>Mobile Applications</h2>
            <p className="muted">
              Native and cross-platform apps crafted for smooth performance, clean UX, and strong
              business outcomes.
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

        <article className="card service-row">
          <div>
            <div className="icon-badge icon-badge-symbol" aria-hidden>
              <IconBolt width={26} height={26} />
            </div>
            <h2>MVP Development</h2>
            <p className="muted">
              Validate product ideas quickly with a focused MVP that is built for launch, feedback,
              and fast iteration.
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
        <p className="section-subtitle">A proven, transparent process that delivers results.</p>

        <div className="process-flow-rail reveal-on-scroll" data-testid="process-flow-rail">
          <ol className="process-flow-steps">
            <li className="process-flow-step">
              <div className="process-step-marker">
                <IconSearch width={22} height={22} />
              </div>
              <h3 className="process-step-title">Discovery</h3>
              <p className="muted process-step-copy">Goals, audience, and requirements.</p>
            </li>
            <li className="process-flow-connector" aria-hidden />
            <li className="process-flow-step">
              <div className="process-step-marker">
                <IconLayers width={22} height={22} />
              </div>
              <h3 className="process-step-title">Design</h3>
              <p className="muted process-step-copy">Wireframes and prototypes you approve.</p>
            </li>
            <li className="process-flow-connector" aria-hidden />
            <li className="process-flow-step">
              <div className="process-step-marker">
                <IconCodeBracket width={22} height={22} />
              </div>
              <h3 className="process-step-title">Development</h3>
              <p className="muted process-step-copy">Clean, scalable implementation.</p>
            </li>
            <li className="process-flow-connector" aria-hidden />
            <li className="process-flow-step">
              <div className="process-step-marker">
                <IconBolt width={22} height={22} />
              </div>
              <h3 className="process-step-title">Launch &amp; Support</h3>
              <p className="muted process-step-copy">Deploy, monitor, and iterate.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="section">
        <article className="card service-assurance reveal-on-scroll" data-testid="service-assurance">
          <div className="service-assurance-stack">
            <div>
              <span className="section-kicker">DELIVERY ASSURANCE</span>
              <h2 className="section-title">Premium execution without delivery surprises</h2>
              <p className="section-subtitle">
                Every engagement is structured to build trust, reduce risk, and keep momentum high.
              </p>
            </div>
            <ul className="assurance-list">
              <li>Transparent weekly updates</li>
              <li>Performance-first build</li>
              <li>Post-launch support</li>
            </ul>
          </div>
          <footer className="service-assurance-footer service-assurance-footer--start">
            <Link to={ROUTES.contact} className="btn btn-minimal btn-minimal--solid">
              Book Strategy Call
            </Link>
          </footer>
        </article>
      </section>
    </>
  );
}
