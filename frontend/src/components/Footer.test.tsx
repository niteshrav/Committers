import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "./Footer";
import { ROUTES } from "../lib/routes";

describe("Footer", () => {
  it("shows COMMITERS, tagline without the vision tagline, and copyright with inline nav", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );

    expect(screen.queryByText(/Your vision, our code/i)).not.toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: /Legal/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: /Company/i })).not.toBeInTheDocument();
    expect(screen.getByText(/Commiters Softwares\. All rights reserved\./i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^COMMITERS$/i })).toBeInTheDocument();

    const nav = screen.getByRole("navigation", { name: /Footer/i });
    expect(nav).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /^About$/i })).toHaveAttribute("href", ROUTES.about);
    expect(screen.getByRole("link", { name: /^Services$/i })).toHaveAttribute("href", ROUTES.services);
    expect(screen.getByRole("link", { name: /^Contact$/i })).toHaveAttribute("href", ROUTES.contact);
    expect(screen.getByRole("link", { name: /^Privacy$/i })).toHaveAttribute("href", ROUTES.privacyPolicy);
    expect(screen.getByRole("link", { name: /^Terms$/i })).toHaveAttribute("href", ROUTES.terms);
  });
});
