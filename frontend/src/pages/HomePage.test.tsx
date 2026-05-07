import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HomePage from "./HomePage";

describe("HomePage", () => {
  it("shows cinematic premium hero direction via the shared immersive wrapper", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    expect(screen.getByRole("heading", { name: /Code Your Success/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Code Your Success/i })).toHaveClass(
      "hero-title",
      "typography-display",
      "typography-display--hero",
    );
    expect(screen.getByTestId("page-hero-premium")).toHaveClass("premium-hero", "premium-hero--immersive");
    expect(screen.getByTestId("page-hero-premium").querySelector(".premium-hero-glass--page")).toBeTruthy();
    expect(screen.getByText(/FOUNDER-LED SOFTWARE STUDIO/i)).toHaveClass("section-kicker", "hero-kicker");
    expect(screen.getByText("Success")).toHaveClass("highlight-pill", "highlight-pill--glass", "highlight-pill--hero");
    expect(screen.getByTestId("hero-actions")).toHaveClass("hero-actions", "mobile-safe-actions");
    expect(screen.getByRole("link", { name: /Book a Free Consultation/i })).toHaveClass(
      "btn-magnetic",
      "btn-hero-primary",
    );
    expect(screen.getByRole("link", { name: /Explore Services/i })).toHaveClass("btn-magnetic-soft", "btn-hero-secondary");
  });

  it("uses icon glyphs instead of numbered badges in the offer grid", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    const grid = screen.getByTestId("home-offer-grid");
    expect(grid.querySelectorAll(".icon-badge-symbol svg")).toHaveLength(3);
    expect(grid.textContent).not.toContain("01");
    expect(grid.textContent).not.toContain("02");
    expect(grid.textContent).not.toContain("03");
  });

  it("shows premium credibility metrics under hero", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    const metrics = screen.getByTestId("premium-metrics");
    expect(metrics).toHaveClass("premium-metrics", "premium-metrics--immersive");
    expect(screen.getByText(/Founder-Led Delivery/i)).toBeInTheDocument();
    expect(screen.getByText(/Fast Launch Cycles/i)).toBeInTheDocument();
    expect(screen.getByText(/Quality-First Engineering/i)).toBeInTheDocument();
  });

  it("marks primary homepage sections for scroll reveal motion", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    expect(screen.getByTestId("page-hero-premium")).toHaveClass("reveal-on-scroll");
    expect(screen.getByTestId("home-services-section")).toHaveClass("reveal-on-scroll");
    expect(screen.getByTestId("home-cta-section")).toHaveClass("reveal-on-scroll");
  });

  it("uses premium conversion copy for first impression", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    expect(screen.getByText(/small and local businesses/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Ready to turn your idea into revenue\?/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Start Your Project Brief/i })).toBeInTheDocument();
  });
});
