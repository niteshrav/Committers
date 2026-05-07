import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";
import { ROUTES } from "../lib/routes";

describe("Navbar", () => {
  it("shows COMMITERS brand lockup without navbar Get Started CTA", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    expect(screen.getByRole("link", { name: /^COMMITERS$/i })).toHaveAttribute("href", ROUTES.home);
    expect(screen.getByRole("link", { name: /^COMMITERS$/i })).toHaveClass("brand", "typography-brand");
    const primaryNav = screen.getByRole("navigation", { name: /Primary navigation/i });
    expect(within(primaryNav).getByRole("link", { name: /^Home$/i })).toHaveClass("nav-primary-link");
    expect(within(primaryNav).getByRole("link", { name: /^About$/i })).toHaveClass("nav-primary-link");
    expect(screen.queryByRole("link", { name: /Get Started/i })).not.toBeInTheDocument();
    expect(screen.queryByText(/Softwares/i)).not.toBeInTheDocument();
    expect(screen.getByRole("banner")).toHaveClass("header", "header-light");
  });

  it("applies visual hover only while the pointer is over the link", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    const primaryNav = screen.getByRole("navigation", { name: /Primary navigation/i });
    const home = within(primaryNav).getByRole("link", { name: /^Home$/i });
    expect(home).not.toHaveClass("nav-primary-link--hover");

    await user.hover(home);
    expect(home).toHaveClass("nav-primary-link--hover");

    await user.unhover(home);
    expect(home).not.toHaveClass("nav-primary-link--hover");
  });
});
