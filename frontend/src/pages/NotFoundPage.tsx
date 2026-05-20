import React from "react";
import { Link } from "react-router-dom";
import PageHeroImmersive from "../components/PageHeroImmersive";
import SectionFigure from "../components/SectionFigure";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { ROUTES } from "../lib/routes";
import { pageTitle } from "../lib/siteMeta";

export default function NotFoundPage() {
  useDocumentTitle(pageTitle("Page not found"));

  return (
    <>
      <PageHeroImmersive centered>
        <h1 className="hero-title typography-display">Page not found</h1>
        <p className="muted hero-subtext--premium">The page you are looking for does not exist or may have moved.</p>
        <div className="hero-actions">
          <Link className="btn btn-primary btn-hero-primary" to={ROUTES.home}>
            Go to Home
          </Link>
        </div>
      </PageHeroImmersive>
      <div className="section-figure-host section-figure-host--tight">
        <SectionFigure pattern="constellation" />
      </div>
    </>
  );
}
