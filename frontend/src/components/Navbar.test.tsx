import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import { ROUTES } from "../lib/routes";
import { buildServiceSectionHref } from "../lib/navSections";

describe("Navbar", () => {
  it("shows Commiters brand wordmark without navbar Get Started CTA", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    expect(screen.getByRole("link", { name: /^Commiters$/ })).toHaveAttribute("href", ROUTES.home);
    expect(screen.getByRole("link", { name: /^Commiters$/ })).toHaveClass("brand", "typography-brand");
    const primaryNav = screen.getByRole("navigation", { name: /Primary navigation/i });
    expect(within(primaryNav).getByRole("link", { name: /^Home$/i })).toHaveClass("nav-primary-link");
    expect(within(primaryNav).getByRole("link", { name: /^About$/i })).toHaveClass("nav-primary-link");
    const servicesNav = within(primaryNav).getByRole("link", { name: /^Services$/i });
    expect(servicesNav).toHaveAttribute("href", ROUTES.services);
    expect(servicesNav).toHaveClass("nav-primary-link", "nav-dropdown-trigger");
    expect(within(primaryNav).getByRole("link", { name: /^Contact$/i })).toHaveAttribute("href", ROUTES.contact);
    expect(within(primaryNav).queryByRole("button", { name: /^Inquiry$/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /Get Started/i })).not.toBeInTheDocument();
    expect(screen.queryByText(/Softwares/i)).not.toBeInTheDocument();
    expect(screen.getByRole("banner")).toHaveClass("header", "header-light");
  });

  it("opens Services submenu on hover without clicking (desktop nav)", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    const primaryNav = screen.getByRole("navigation", { name: /Primary navigation/i });
    const servicesLink = within(primaryNav).getByRole("link", { name: /^Services$/i });
    expect(within(primaryNav).queryByRole("menuitem", { name: /^Website Development$/i })).not.toBeInTheDocument();

    await user.hover(servicesLink);
    expect(within(primaryNav).getByRole("menuitem", { name: /^Website Development$/i })).toHaveAttribute(
      "href",
      buildServiceSectionHref("website-development"),
    );

    await user.unhover(servicesLink);
    expect(within(primaryNav).queryByRole("menuitem", { name: /^Website Development$/i })).not.toBeInTheDocument();
  });

  it("opens Services menu with deep links to each service section on hover", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    const primaryNav = screen.getByRole("navigation", { name: /Primary navigation/i });
    await user.hover(within(primaryNav).getByRole("link", { name: /^Services$/i }));

    expect(within(primaryNav).getByRole("menuitem", { name: /^Website Development$/i })).toHaveAttribute(
      "href",
      buildServiceSectionHref("website-development"),
    );
    expect(within(primaryNav).getByRole("menuitem", { name: /^Automation Tools$/i })).toHaveAttribute(
      "href",
      buildServiceSectionHref("automation-tools"),
    );
    expect(within(primaryNav).getByRole("menuitem", { name: /^AI Integration$/i })).toHaveAttribute(
      "href",
      buildServiceSectionHref("ai-integration"),
    );
  });

  it("navigates to the Services page when the Services nav label is clicked", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={["/"]}>
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<div data-testid="home-outlet">Home</div>} />
            <Route path="/services" element={<div data-testid="services-outlet">Services page</div>} />
          </Routes>
        </>
      </MemoryRouter>,
    );

    const primaryNav = screen.getByRole("navigation", { name: /Primary navigation/i });
    await user.click(within(primaryNav).getByRole("link", { name: /^Services$/i }));

    expect(await screen.findByTestId("services-outlet")).toBeInTheDocument();
    expect(screen.queryByTestId("home-outlet")).not.toBeInTheDocument();
  });

  it("matches other primary links when the Services route is active (no extra frame)", () => {
    render(
      <MemoryRouter initialEntries={[ROUTES.services]}>
        <Navbar />
      </MemoryRouter>,
    );

    const primaryNav = screen.getByRole("navigation", { name: /Primary navigation/i });
    const servicesLink = within(primaryNav).getByRole("link", { name: /^Services$/i });
    const contactLink = within(primaryNav).getByRole("link", { name: /^Contact$/i });
    expect(servicesLink).toHaveClass("nav-primary-link", "active");

    const servicesStyle = window.getComputedStyle(servicesLink);
    const contactStyle = window.getComputedStyle(contactLink);
    expect(servicesStyle.borderTopWidth).toBe(contactStyle.borderTopWidth);
    expect(servicesStyle.backgroundColor).toBe(contactStyle.backgroundColor);
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
