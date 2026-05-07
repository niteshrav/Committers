import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../lib/routes";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer footer-rich">
      <div className="container footer-brand-block">
        <h3 className="footer-brand">COMMITERS</h3>
        <p className="muted footer-tagline">
          Crafting exceptional digital experiences through innovative web and mobile solutions.
        </p>
      </div>

      <div className="container footer-bottom-split">
        <div className="footer-copyright muted">© {year} Commiters Softwares. All rights reserved.</div>
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
