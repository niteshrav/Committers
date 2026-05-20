import { render, screen, within } from "@testing-library/react";
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
    expect(screen.getByText(/Founder-Led · No Middlemen · Direct Communication/i)).toHaveClass("section-kicker", "hero-kicker");
    expect(screen.getByText("Success")).toHaveClass("highlight-pill", "highlight-pill--glass", "highlight-pill--hero");
    expect(screen.getByTestId("hero-actions")).toHaveClass("hero-actions", "mobile-safe-actions");
    expect(screen.getByRole("link", { name: /Start a Free Conversation/i })).toHaveClass("btn-magnetic", "btn-hero-primary");
    expect(screen.getByRole("link", { name: /See What We Build/i })).toHaveClass("btn-magnetic-soft", "btn-hero-secondary");
  });

  it("uses icon glyphs instead of numbered badges in the offer grid", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    const grid = screen.getByTestId("home-offer-grid");
    expect(grid.querySelectorAll(".icon-badge-symbol svg")).toHaveLength(6);
    expect(grid.textContent).not.toContain("01");
    expect(grid.textContent).not.toContain("02");
    expect(grid.textContent).not.toContain("03");
  });

  it("adds premium abstract art above the services grid", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    const section = screen.getByTestId("home-services-section");
    expect(within(section).getByTestId("section-figure-layers")).toBeInTheDocument();
  });

  it("includes automation, AI integration, and MVP alongside core build offerings", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    const offerGrid = screen.getByTestId("home-offer-grid");
    expect(within(offerGrid).getByRole("heading", { name: /Automation Tools/i })).toBeInTheDocument();
    expect(within(offerGrid).getByRole("heading", { name: /AI Integration/i })).toBeInTheDocument();
    expect(within(offerGrid).getByRole("heading", { name: /^MVP Development$/i })).toBeInTheDocument();
  });

  it("keeps home service blurbs to a single short line each", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    const grid = screen.getByTestId("home-offer-grid");
    const blurbs = Array.from(grid.querySelectorAll(".card-service p.muted")) as HTMLParagraphElement[];
    expect(blurbs).toHaveLength(6);
    for (const p of blurbs) {
      expect(p.textContent?.trim().split(/\s+/).length ?? 0).toBeLessThanOrEqual(18);
      expect((p.textContent ?? "").length).toBeLessThanOrEqual(120);
    }
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
    expect(screen.getByText(/You work directly with Nitesh/i)).toBeInTheDocument();
    expect(screen.getByText(/not patched later/i)).toBeInTheDocument();
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

  it("uses updated homepage positioning and conversion copy", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    expect(
      screen.getByText(
        /Commiters builds premium websites, web apps, and AI-powered tools for startups and growing businesses worldwide/i,
      ),
    ).toBeInTheDocument();
    expect(screen.getByText(/talk directly to the founder/i)).toBeInTheDocument();
    expect(screen.getByText(/OUR SERVICES/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Everything You Need to Ship/i })).toBeInTheDocument();
    expect(screen.getByText(/production-ready AI-powered application/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Have a project in mind\?/i })).toBeInTheDocument();
    expect(screen.getByText(/early-stage studio that takes on a small number of projects/i)).toBeInTheDocument();
    expect(screen.getByText(/If your project is a good fit/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Tell Us What You're Building/i })).toBeInTheDocument();
  });

  it("does not show an unverified metrics stats bar (PDF: remove until backed by real numbers)", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    expect(screen.queryByTestId("home-stats-section")).not.toBeInTheDocument();
    expect(screen.queryByText(/Projects delivered/i)).not.toBeInTheDocument();
  });

  it("renders technology logos as a horizontal ticker without AWS in the stack", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    const tech = screen.getByTestId("home-tech-ticker");
    expect(tech.querySelector(".home-tech-ticker-track")).toBeTruthy();
    expect(tech.querySelectorAll("img")).toHaveLength(34);
    expect(within(tech).getAllByAltText("React")).toHaveLength(1);
    expect(tech.textContent?.toUpperCase() ?? "").not.toContain("AWS");
  });

  it("shows portfolio projects including AI Summariser and Customer Service Portal", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    const portfolio = screen.getByTestId("home-portfolio-section");
    expect(within(portfolio).getByRole("heading", { name: /AI Summariser/i })).toBeInTheDocument();
    expect(within(portfolio).getByRole("heading", { name: /Customer Service Portal/i })).toBeInTheDocument();
    expect(within(portfolio).getByText(/^Python, Google ADK, LLM$/)).toBeInTheDocument();
    expect(within(portfolio).getByText(/^LLM, RAG with React, Node\.js$/)).toBeInTheDocument();
    expect(within(portfolio).queryByText(/Product Dashboard Demo/i)).not.toBeInTheDocument();
    expect(within(portfolio).queryByText(/AI Integration Demo/i)).not.toBeInTheDocument();
  });
});
