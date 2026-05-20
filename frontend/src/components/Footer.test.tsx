import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "./Footer";
import { ROUTES } from "../lib/routes";
import { buildTelHref, buildWhatsAppUrl, COMMITERS_EMAIL_PRIMARY, COMMITERS_PHONE_DISPLAY } from "../lib/siteContact";
import { SITE_GITHUB_URL, SITE_LINKEDIN_URL } from "../lib/siteLinks";

describe("Footer", () => {
  it("shows Commiters, positioning tagline, primary contact line, social links, and streamlined copyright", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );

    expect(screen.queryByText(/Your vision, our code/i)).not.toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: /Legal/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: /Company/i })).not.toBeInTheDocument();
    expect(screen.getByText(/© \d{4} Commiters Softwares\. All rights reserved\./)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^Commiters$/ })).toBeInTheDocument();
    expect(screen.getByText(/Founder-led software studio based in Udaipur, India/i)).toBeInTheDocument();
    expect(screen.getByText(/Building for clients across India, the US, and the UK/i)).toBeInTheDocument();
    const nav = screen.getByRole("navigation", { name: /Footer/i });
    expect(nav).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /^About$/i })).toHaveAttribute("href", ROUTES.about);
    expect(screen.getByRole("link", { name: /^Services$/i })).toHaveAttribute("href", ROUTES.services);
    expect(screen.getByRole("link", { name: /^Contact$/i })).toHaveAttribute("href", ROUTES.contact);
    expect(screen.getByRole("link", { name: /^Privacy$/i })).toHaveAttribute("href", ROUTES.privacyPolicy);
    expect(screen.getByRole("link", { name: /^Terms$/i })).toHaveAttribute("href", ROUTES.terms);

    const footer = screen.getByRole("contentinfo");
    expect(within(footer).queryByText(COMMITERS_EMAIL_PRIMARY)).not.toBeInTheDocument();
    expect(within(footer).queryByText(COMMITERS_PHONE_DISPLAY)).not.toBeInTheDocument();

    const iconRow = within(footer).getByTestId("footer-contact-icon-row");
    const iconLinks = within(iconRow).getAllByRole("link");
    expect(iconLinks).toHaveLength(5);

    expect(iconLinks[0]).toHaveAttribute("href", buildTelHref());
    expect(iconLinks[1]).toHaveAttribute("href", `mailto:${COMMITERS_EMAIL_PRIMARY}`);
    expect(iconLinks[2]).toHaveAttribute("href", buildWhatsAppUrl());
    expect(iconLinks[3]).toHaveAttribute("href", SITE_LINKEDIN_URL);
    expect(iconLinks[4]).toHaveAttribute("href", SITE_GITHUB_URL);

    expect(iconLinks[0].querySelector("svg")).toBeTruthy();
    expect(iconLinks[1].querySelector("svg")).toBeTruthy();
    expect(iconLinks[2].querySelector("svg")).toBeTruthy();

    const waIcon = within(footer).getByRole("link", { name: /^WhatsApp$/i });
    expect(waIcon).toHaveAttribute("href", buildWhatsAppUrl());
    expect(waIcon).toHaveAttribute("target", "_blank");
    expect(waIcon).toHaveAttribute("rel", "noopener noreferrer");

    expect(within(footer).getByRole("link", { name: /linkedin/i })).toHaveAttribute("href", SITE_LINKEDIN_URL);
    expect(within(footer).getByRole("link", { name: /github/i })).toHaveAttribute("href", SITE_GITHUB_URL);

    expect(within(footer).queryAllByText(/^Udaipur, India$/)).toHaveLength(0);

    expect(within(nav).queryByRole("link", { name: /Chat on WhatsApp/i })).not.toBeInTheDocument();
    expect(screen.queryByText(/^Chat on WhatsApp$/)).not.toBeInTheDocument();
  });
});
