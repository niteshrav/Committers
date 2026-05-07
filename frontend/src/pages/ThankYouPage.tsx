import React from "react";
import { Link } from "react-router-dom";
import PageHeroImmersive from "../components/PageHeroImmersive";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { ROUTES } from "../lib/routes";
import { pageTitle } from "../lib/siteMeta";

export default function ThankYouPage() {
  useDocumentTitle(pageTitle("Thank you"));

  return (
    <>
      <PageHeroImmersive centered>
        <h1 className="hero-title typography-display">Thank you for reaching out.</h1>
        <p className="muted hero-subtext--premium">
          Your project details were submitted successfully. We will review them and get back to you within 24 hours.
        </p>
        <div className="hero-actions">
          <Link className="btn btn-primary btn-hero-primary" to={ROUTES.home}>
            Back to Home
          </Link>
          <Link className="btn btn-secondary btn-hero-secondary" to={ROUTES.contact}>
            Contact
          </Link>
        </div>
      </PageHeroImmersive>
    </>
  );
}
