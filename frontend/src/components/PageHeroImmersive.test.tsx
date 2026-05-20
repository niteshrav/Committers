import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PageHeroImmersive from "./PageHeroImmersive";

describe("PageHeroImmersive", () => {
  it("renders immersive glass hero shell for inner pages", () => {
    render(
      <MemoryRouter>
        <PageHeroImmersive centered>
          <h1>Page Title</h1>
        </PageHeroImmersive>
      </MemoryRouter>,
    );

    const shell = screen.getByTestId("page-hero-premium");
    expect(shell).toHaveClass("premium-hero", "premium-hero--immersive", "hero-centered");
    expect(screen.getByTestId("premium-hero-backdrop")).toHaveClass("premium-hero-backdrop");
    expect(shell.querySelector(".premium-hero-glass--page")).toBeTruthy();
    expect(screen.getByRole("heading", { name: /Page Title/i })).toBeInTheDocument();
  });

  it("renders optional companion content after the glass panel", () => {
    render(
      <MemoryRouter>
        <PageHeroImmersive companion={<p data-testid="hero-companion">Below glass</p>}>
          <h1>Hi</h1>
        </PageHeroImmersive>
      </MemoryRouter>,
    );

    const shell = screen.getByTestId("page-hero-premium").querySelector(".premium-hero-shell");
    expect(shell?.querySelector(".premium-hero-glass--page")).toBeTruthy();
    expect(screen.getByTestId("hero-companion")).toHaveTextContent("Below glass");
  });
});
