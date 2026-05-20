import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createLead, LeadInput } from "../lib/api";
import PageHeroImmersive from "../components/PageHeroImmersive";
import SectionFigure from "../components/SectionFigure";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { ROUTES } from "../lib/routes";
import { pageTitle } from "../lib/siteMeta";
import { IconEnvelope, IconGitHub, IconLinkedIn, IconMapPin, IconPhone } from "../components/icons";
import {
  sanitizeNameInput,
  sanitizeTimelineInput,
  validateBudgetOptional,
  validateEmail,
  validateName,
  validateTimelineOptional,
} from "../lib/contactValidation";
import { BUDGET_RANGE_OPTIONS } from "../lib/budgetRanges";
import { LEAD_SERVICE_LABELS } from "../lib/leadServices";
import {
  buildOfficeMapDirectionsUrl,
  buildOfficeMapEmbedUrl,
  buildOfficeMapOpenUrl,
} from "../lib/officeMap";
import {
  COMMITERS_EMAIL_STRIP_DISPLAY,
  COMMITERS_PHONE_DISPLAY,
  buildMailtoPrimaryHref,
  buildTelHref,
  buildWhatsAppUrl,
} from "../lib/siteContact";
import { SITE_CALENDLY_URL, SITE_GITHUB_URL, SITE_LINKEDIN_URL } from "../lib/siteLinks";

const officeAddress = "82, Sobhagya Nagar, Nakoda Nagar, Udaipur, Rajasthan, India 313001";

const MESSAGE_PLACEHOLDER =
  "Describe what you're building, who it's for, and what success looks like. Don't worry about being too technical or not technical enough — just tell us the problem you're trying to solve.";

export default function ContactPage() {
  useDocumentTitle(pageTitle("Contact"));

  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState<Omit<LeadInput, "serviceNeeded"> & { serviceNeeded: LeadInput["serviceNeeded"] }>(
    {
      name: "",
      email: "",
      serviceNeeded: "Website Development",
      budgetRange: "",
      timeline: "",
      referenceLinks: "",
      message: "",
    },
  );

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const nameErr = validateName(form.name);
    const emailErr = validateEmail(form.email);
    const budgetErr = validateBudgetOptional(form.budgetRange ?? "");
    const timelineErr = validateTimelineOptional(form.timeline ?? "");
    const msgErr = !form.message.trim() ? "Please add a short description of what you're building." : null;

    const first =
      nameErr ?? emailErr ?? budgetErr ?? timelineErr ?? msgErr ?? null;
    if (first) return setError(first);

    setSubmitting(true);
    try {
      await createLead({
        name: form.name.trim(),
        email: form.email.trim(),
        serviceNeeded: form.serviceNeeded,
        budgetRange: form.budgetRange?.trim() ? form.budgetRange.trim() : undefined,
        timeline: form.timeline?.trim() ? form.timeline.trim() : "Not specified",
        referenceLinks: form.referenceLinks?.trim() ? form.referenceLinks : undefined,
        message: form.message.trim(),
      });
      navigate(ROUTES.thankYou);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Submission failed.";
      setError(msg);
    } finally {
      setSubmitting(false);
    }
  }

  const budgetSelectOptions = BUDGET_RANGE_OPTIONS.filter((o) => o !== "");

  return (
    <>
      <PageHeroImmersive centered>
        <h1 className="hero-title typography-display">
          Let&apos;s Build Something <span className="text-gradient">Together</span>
        </h1>
        <p className="muted hero-subtext--premium">
          Tell us what you&apos;re building. Every message is read by Nitesh personally — you&apos;ll hear back within 4 hours.
        </p>
      </PageHeroImmersive>

      <section className="section section-contact">
        <div className="contact-page-stack mobile-safe-layout" data-testid="contact-layout">
          <div className="section-figure-host section-figure-host--tight">
            <SectionFigure pattern="wave" />
          </div>

          <div className="contact-quick-block">
            <p className="contact-quick-preface" data-testid="contact-quick-preface">
              Prefer a faster route?
            </p>
            <div className="contact-quick-routes" data-testid="contact-quick-routes">
              <a
                href={buildWhatsAppUrl()}
                className="contact-quick-route contact-quick-route--whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp →
              </a>
              <a
                href={SITE_CALENDLY_URL}
                className="contact-quick-route contact-quick-route--calendly"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a 20-Min Call →
              </a>
            </div>
          </div>

          <div id="project-inquiry">
            <form onSubmit={onSubmit} aria-label="Contact form" className="contact-form-card contact-form-premium">
              <h2 className="contact-form-title">Tell us about your project</h2>
              <p className="contact-form-intro">
                Fill in what you know — we&apos;ll figure out the rest together on a call.
              </p>

              <div className="form-field-grid">
                <div className="form-field">
                  <div className="form-field-label-stack">
                    <label htmlFor="name">Full name</label>
                  </div>
                  <input
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm((s) => ({ ...s, name: sanitizeNameInput(e.target.value) }))}
                    placeholder="How we should address you"
                    autoComplete="name"
                    required
                  />
                </div>
                <div className="form-field">
                  <div className="form-field-label-stack">
                    <label htmlFor="email">Work email</label>
                  </div>
                  <input
                    id="email"
                    value={form.email}
                    onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                    placeholder="you@company.com"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="form-field-grid">
                <div className="form-field">
                  <div className="form-field-label-stack">
                    <label htmlFor="service">What do you need?</label>
                  </div>
                  <select
                    id="service"
                    value={form.serviceNeeded}
                    onChange={(e) => setForm((s) => ({ ...s, serviceNeeded: e.target.value as LeadInput["serviceNeeded"] }))}
                  >
                    {LEAD_SERVICE_LABELS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-field">
                  <div className="form-field-label-stack">
                    <label htmlFor="budget">Approximate budget (USD)</label>
                  </div>
                  <select
                    id="budget"
                    value={form.budgetRange ?? ""}
                    onChange={(e) => setForm((s) => ({ ...s, budgetRange: e.target.value }))}
                    aria-label="Approximate budget (USD)"
                  >
                    <option value="">Prefer not to say — we&apos;ll discuss scope first</option>
                    {budgetSelectOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-field-grid">
                <div className="form-field">
                  <div className="form-field-label-stack">
                    <label htmlFor="timeline">Ideal timeline</label>
                  </div>
                  <input
                    id="timeline"
                    value={form.timeline}
                    onChange={(e) => setForm((s) => ({ ...s, timeline: sanitizeTimelineInput(e.target.value) }))}
                    placeholder="Optional — e.g. launch before Q4"
                    autoComplete="off"
                  />
                </div>
                <div className="form-field">
                  <div className="form-field-label-stack">
                    <label htmlFor="referenceLinks">References or links</label>
                  </div>
                  <input
                    id="referenceLinks"
                    value={form.referenceLinks ?? ""}
                    onChange={(e) => setForm((s) => ({ ...s, referenceLinks: e.target.value }))}
                    placeholder="Site URL, Figma, Notion — optional"
                  />
                </div>
              </div>

              <div className="form-field form-field--full">
                <div className="form-field-label-stack">
                  <label htmlFor="message">Project overview</label>
                </div>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                  placeholder={MESSAGE_PLACEHOLDER}
                  required
                />
              </div>

              <div className="form-actions form-actions--start">
                <button className="btn btn-minimal btn-minimal--solid" type="submit" disabled={submitting}>
                  {submitting ? "Sending…" : "Send — we'll reply within 4 hours"}
                </button>
              </div>

              {error ? (
                <div className="error" role="alert">
                  {error}
                </div>
              ) : null}
            </form>
          </div>

          <div className="contact-follow-up-grid">
            <article className="card contact-next-steps" data-testid="contact-next-steps">
              <h3 className="contact-follow-up-title contact-follow-up-title--plain">What happens after you send this?</h3>
              <ol className="contact-next-steps-list contact-next-steps-list--pdf">
                <li>Nitesh reads your message — usually within 4 hours</li>
                <li>You get an honest reply — a question, a quote, or a direct suggestion</li>
                <li>If it&apos;s a good fit, we schedule a free 20-minute call to discuss your project</li>
              </ol>
              <p className="muted contact-next-steps-footnote">
                No automated responses. No sales team. Just a straight conversation.
              </p>
            </article>
            <article className="card contact-timezone-card" data-testid="contact-timezone">
              <p className="contact-timezone-lead">
                Based in Udaipur, India (IST · UTC+5:30)
              </p>
              <p className="muted">
                Available for calls: 6:00 PM – 11:00 PM IST
              </p>
              <p className="muted contact-timezone-equiv">
                (US Eastern: 7:30 AM – 12:30 PM · UK: 1:30 PM – 6:30 PM)
              </p>
            </article>
          </div>

          <div className="contact-bottom contact-bottom-split" data-testid="contact-bottom">
            <div className="contact-bottom-left" data-testid="contact-bottom-left">
              <div className="contact-icons-column" data-testid="contact-strip">
                <a href={buildTelHref()} className="contact-icon-row">
                  <span className="contact-strip-icon" aria-hidden>
                    <IconPhone width={22} height={22} />
                  </span>
                  <span className="contact-row-value">{COMMITERS_PHONE_DISPLAY}</span>
                </a>
                <a href={buildMailtoPrimaryHref()} className="contact-icon-row">
                  <span className="contact-strip-icon" aria-hidden>
                    <IconEnvelope width={22} height={22} />
                  </span>
                  <span className="contact-row-value">{COMMITERS_EMAIL_STRIP_DISPLAY}</span>
                </a>
                <a href={SITE_LINKEDIN_URL} className="contact-icon-row" target="_blank" rel="noopener noreferrer">
                  <span className="contact-strip-icon" aria-hidden>
                    <IconLinkedIn width={22} height={22} />
                  </span>
                  <span className="contact-row-value">linkedin.com/in/niteshrav</span>
                </a>
                <a href={SITE_GITHUB_URL} className="contact-icon-row" target="_blank" rel="noopener noreferrer">
                  <span className="contact-strip-icon" aria-hidden>
                    <IconGitHub width={22} height={22} />
                  </span>
                  <span className="contact-row-value">github.com/niteshrav</span>
                </a>
                <div className="contact-address-with-icon">
                  <span className="contact-strip-icon" aria-hidden>
                    <IconMapPin width={22} height={22} />
                  </span>
                  <p className="muted contact-address-text">{officeAddress}</p>
                </div>
              </div>
            </div>

            <div className="contact-bottom-right" data-testid="contact-bottom-right">
              <div className="office-map-card office-map-card--prominent">
                <iframe
                  title="Udaipur office location map"
                  src={buildOfficeMapEmbedUrl()}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <div className="office-map-actions">
                  <a href={buildOfficeMapOpenUrl()} target="_blank" rel="noreferrer noopener" className="quote-link typography-link">
                    Open in Google Maps
                  </a>
                  <a href={buildOfficeMapDirectionsUrl()} target="_blank" rel="noreferrer noopener" className="quote-link typography-link">
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
