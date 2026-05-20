import React from "react";
import { Link } from "react-router-dom";
import { IconEnvelope, IconGitHub, IconLinkedIn, IconPhone, IconWhatsApp } from "./icons";
import { ROUTES } from "../lib/routes";
import { buildTelHref, buildWhatsAppUrl, COMMITERS_EMAIL_PRIMARY, COMMITERS_PHONE_DISPLAY } from "../lib/siteContact";
import { SITE_GITHUB_URL, SITE_LINKEDIN_URL } from "../lib/siteLinks";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer footer-rich">
      <div className="container footer-brand-block">
        <h3 className="footer-brand">Commiters</h3>
        <p className="muted footer-tagline">Founder-led software studio based in Udaipur, India.</p>
        <p className="muted footer-tagline footer-tagline--sub">Building for clients across India, the US, and the UK.</p>
        <div
          className="footer-contact-icons-row"
          data-testid="footer-contact-icon-row"
          aria-label="Contact and profiles"
        >
          <a href={buildTelHref()} className="footer-contact-icon-link" aria-label={`Call ${COMMITERS_PHONE_DISPLAY}`}>
            <IconPhone width={22} height={22} aria-hidden />
          </a>
          <a
            href={`mailto:${COMMITERS_EMAIL_PRIMARY}`}
            className="footer-contact-icon-link"
            aria-label={`Email ${COMMITERS_EMAIL_PRIMARY}`}
          >
            <IconEnvelope width={22} height={22} aria-hidden />
          </a>
          <a
            href={buildWhatsAppUrl()}
            className="footer-contact-icon-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <IconWhatsApp width={22} height={22} aria-hidden />
          </a>
          <a
            href={SITE_LINKEDIN_URL}
            className="footer-contact-icon-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <IconLinkedIn width={22} height={22} aria-hidden />
          </a>
          <a
            href={SITE_GITHUB_URL}
            className="footer-contact-icon-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <IconGitHub width={22} height={22} aria-hidden />
          </a>
        </div>
      </div>

      <div className="container footer-bottom-split">
        <div className="footer-copyright muted">
          © {year} Commiters Softwares. All rights reserved.
        </div>
        <nav className="footer-inline-nav" aria-label="Footer">
          <Link to={ROUTES.about}>About</Link>
          <Link to={ROUTES.services}>Services</Link>
          <Link to={ROUTES.contact}>Contact</Link>
          <Link to={ROUTES.privacyPolicy}>Privacy</Link>
          <Link to={ROUTES.terms}>Terms</Link>
        </nav>
      </div>
    </footer>
  );
}
