import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { APP_ROUTE_PATHS, ROUTES } from "./lib/routes";
import { DEFAULT_DOCUMENT_TITLE, pageTitle } from "./lib/siteMeta";

function expectedTitle(path: string): string {
  switch (path) {
    case ROUTES.home:
      return DEFAULT_DOCUMENT_TITLE;
    case ROUTES.about:
      return pageTitle("About");
    case ROUTES.services:
      return pageTitle("Services");
    case ROUTES.contact:
      return pageTitle("Contact");
    case ROUTES.privacyPolicy:
      return pageTitle("Privacy Policy");
    case ROUTES.terms:
      return pageTitle("Terms of Service");
    case ROUTES.thankYou:
      return pageTitle("Thank you");
    case ROUTES.notFound:
      return pageTitle("Page not found");
    default:
      throw new Error(`Untested route: ${path}`);
  }
}

describe("Site-wide consistency", () => {
  beforeEach(() => {
    document.title = "";
  });

  it.each(APP_ROUTE_PATHS)("route %s uses theme shell, layout, and document title", (path) => {
    render(
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>,
    );

    expect(document.querySelector(".site-shell")).toHaveAttribute("data-theme", "monochrome-navy");
    expect(screen.getByTestId("route-shell")).toHaveClass("route-shell", "route-transition");
    expect(screen.getByRole("main")).toHaveClass("container");
    expect(document.title).toBe(expectedTitle(path));
  });

  it("maps unknown URLs to the not-found experience with the same shell and title", () => {
    render(
      <MemoryRouter initialEntries={["/does-not-exist-yet"]}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByRole("heading", { name: /Page not found/i })).toBeInTheDocument();
    expect(document.querySelector(".site-shell")).toHaveAttribute("data-theme", "monochrome-navy");
    expect(document.title).toBe(pageTitle("Page not found"));
  });
});
