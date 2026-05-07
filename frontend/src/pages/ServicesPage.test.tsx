import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ServicesPage from "./ServicesPage";

describe("ServicesPage", () => {
  it("opens with the immersive premium hero block", () => {
    render(
      <MemoryRouter>
        <ServicesPage />
      </MemoryRouter>,
    );

    expect(screen.getByTestId("page-hero-premium")).toHaveClass("premium-hero", "premium-hero--immersive");
    expect(screen.getByRole("heading", { name: /Solutions That Scale With You/i })).toBeInTheDocument();
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
  });

  it("provides clear conversion links from service cards", () => {
    render(
      <MemoryRouter>
        <ServicesPage />
      </MemoryRouter>,
    );

    const quoteLinks = screen.getAllByRole("link", { name: /Get a Quote/i });
    expect(quoteLinks).toHaveLength(4);
    quoteLinks.forEach((link) => expect(link).toHaveClass("quote-link", "typography-link"));
  });

  it("shows premium assurance panel with minimal footer CTA", () => {
    render(
      <MemoryRouter>
        <ServicesPage />
      </MemoryRouter>,
    );

    const assurancePanel = screen.getByTestId("service-assurance");
    expect(assurancePanel).toHaveClass("service-assurance", "card");
    expect(screen.getByText(/Transparent weekly updates/i)).toBeInTheDocument();
    expect(screen.getByText(/Performance-first build/i)).toBeInTheDocument();
    expect(screen.getByText(/Post-launch support/i)).toBeInTheDocument();
    const cta = screen.getByRole("link", { name: /Book Strategy Call/i });
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

  it("communicates premium offer positioning clearly", () => {
    render(
      <MemoryRouter>
        <ServicesPage />
      </MemoryRouter>,
    );

    expect(screen.getByText(/for small and local businesses that need serious execution/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Premium execution without delivery surprises/i })).toBeInTheDocument();
  });

  it("uses tight single-line rhythm for service feature grids", () => {
    const { container } = render(
      <MemoryRouter>
        <ServicesPage />
      </MemoryRouter>,
    );

    const grids = container.querySelectorAll(".feature-columns.feature-columns-tight");
    expect(grids.length).toBe(4);
  });
});

