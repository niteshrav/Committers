import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ServicesPage from "./ServicesPage";
import { SITE_CALENDLY_URL } from "../lib/siteLinks";

describe("ServicesPage", () => {
  it("opens with the immersive premium hero block", () => {
    render(
      <MemoryRouter>
        <ServicesPage />
      </MemoryRouter>,
    );

    expect(screen.getByTestId("page-hero-premium")).toHaveClass("premium-hero", "premium-hero--immersive");
    expect(screen.getByRole("heading", { name: /Six Ways We Can Help You Ship/i })).toBeInTheDocument();
    expect(screen.getByTestId("section-figure-constellation")).toBeInTheDocument();
  });

  it("shows complete service lineup for current offer", () => {
    render(
      <MemoryRouter>
        <ServicesPage />
      </MemoryRouter>,
    );

    expect(screen.getByRole("heading", { name: /Website Development/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Web Applications/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Mobile Applications/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /MVP Development/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Automation Tools/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /AI Integration/i })).toBeInTheDocument();
  });

  it("anchors each service section for deep navigation from the navbar", () => {
    const { container } = render(
      <MemoryRouter>
        <ServicesPage />
      </MemoryRouter>,
    );

    const ids = [
      "website-development",
      "web-applications",
      "mobile-applications",
      "mvp-development",
      "automation-tools",
      "ai-integration",
    ];
    ids.forEach((id) => {
      const el = container.querySelector(`#${id}`);
      expect(el).toBeTruthy();
      expect(el).toHaveClass("service-row");
    });
  });

  it("provides clear conversion links from service cards", () => {
    render(
      <MemoryRouter>
        <ServicesPage />
      </MemoryRouter>,
    );

    const quoteLinks = screen.getAllByRole("link", { name: /Get a Quote/i });
    expect(quoteLinks).toHaveLength(6);
    quoteLinks.forEach((link) => expect(link).toHaveClass("quote-link", "typography-link"));
  });

  it("shows delivery assurance panel with Calendly CTA", () => {
    render(
      <MemoryRouter>
        <ServicesPage />
      </MemoryRouter>,
    );

    const assurancePanel = screen.getByTestId("service-assurance");
    expect(assurancePanel).toHaveClass("service-assurance", "card");
    const inAssurance = within(assurancePanel);
    expect(inAssurance.getByText(/Written weekly progress updates/i)).toBeInTheDocument();
    expect(inAssurance.getByText(/Performance-first, tested code/i)).toBeInTheDocument();
    expect(inAssurance.getByText(/2-week post-launch support window included/i)).toBeInTheDocument();
    expect(inAssurance.getByText(/Direct founder communication/i)).toBeInTheDocument();
    const cta = screen.getByRole("link", { name: /Book a Free 20-Min Call/i });
    expect(cta).toHaveAttribute("href", SITE_CALENDLY_URL);
    expect(cta).toHaveClass("btn", "btn-minimal", "btn-minimal--solid");
    expect(cta.closest(".service-assurance-footer")).toHaveClass("service-assurance-footer", "service-assurance-footer--start");
  });

  it("shows process flow as an icon rail without numeric step badges", () => {
    const { container } = render(
      <MemoryRouter>
        <ServicesPage />
      </MemoryRouter>,
    );

    expect(screen.getByTestId("process-flow-rail")).toBeInTheDocument();
    expect(container.querySelectorAll(".process-flow-rail .process-step-marker svg").length).toBe(4);
    expect(screen.queryByText(/^01$/)).not.toBeInTheDocument();
    expect(screen.queryByText(/^02$/)).not.toBeInTheDocument();
  });

  it("explains how we work with a four-phase subtitle", () => {
    render(
      <MemoryRouter>
        <ServicesPage />
      </MemoryRouter>,
    );

    expect(screen.getByRole("heading", { name: /How We Work/i })).toBeInTheDocument();
    expect(
      screen.getByText(/Every project follows the same four-phase process/i),
    ).toBeInTheDocument();
  });

  it("uses tight single-line rhythm for service feature grids", () => {
    const { container } = render(
      <MemoryRouter>
        <ServicesPage />
      </MemoryRouter>,
    );

    const grids = container.querySelectorAll(".feature-columns.feature-columns-tight");
    expect(grids.length).toBe(6);
  });

  it("surfaces an FAQ block with common international questions", () => {
    render(
      <MemoryRouter>
        <ServicesPage />
      </MemoryRouter>,
    );

    expect(screen.getByTestId("services-faq")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Questions we get asked a lot/i })).toBeInTheDocument();
    expect(screen.getByText(/Do you work with international clients\?/i)).toBeInTheDocument();
  });
});
