import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import ContactPage from "./ContactPage";
import { createLead } from "../lib/api";
import {
  buildOfficeMapDirectionsUrl,
  buildOfficeMapEmbedUrl,
  buildOfficeMapOpenUrl,
} from "../lib/officeMap";
import { buildMailtoPrimaryHref, buildTelHref, COMMITERS_PHONE_DISPLAY } from "../lib/siteContact";
import { SITE_CALENDLY_URL } from "../lib/siteLinks";

const navigateMock = vi.fn();

vi.mock("react-router-dom", async (importOriginal) => {
  const actual = await importOriginal<typeof import("react-router-dom")>();
  return {
    ...actual,
    useNavigate: () => navigateMock,
  };
});

vi.mock("../lib/api", () => ({
  createLead: vi.fn(),
}));

describe("ContactPage", () => {
  beforeEach(() => {
    navigateMock.mockReset();
    vi.mocked(createLead).mockReset();
    vi.mocked(createLead).mockResolvedValue(undefined);
  });

  it("uses the immersive page hero shell", () => {
    render(
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>,
    );

    expect(screen.getByTestId("page-hero-premium")).toHaveClass("premium-hero", "premium-hero--immersive");
    expect(screen.getByRole("heading", { name: /Build Something Together/i })).toBeInTheDocument();
    expect(screen.getByText(/Every message is read by Nitesh personally/i)).toBeInTheDocument();
    expect(within(screen.getByTestId("contact-layout")).getByTestId("section-figure-wave")).toBeInTheDocument();
  });

  it("exposes project inquiry anchor for navbar deep links", () => {
    render(
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>,
    );

    const anchor = document.getElementById("project-inquiry");
    expect(anchor).toBeTruthy();
    expect(anchor?.querySelector('form[aria-label="Contact form"]')).toBeTruthy();
  });

  it("prioritizes the inquiry form with quick routes and follow-up blocks", () => {
    render(
      <MemoryRouter>
      <ContactPage />
      </MemoryRouter>,
    );

    const send = screen.getByRole("button", { name: /Send — we'll reply within 4 hours/i });
    expect(send).toBeInTheDocument();
    expect(send).toHaveClass("btn", "btn-minimal", "btn-minimal--solid");
    expect(send.closest(".form-actions")).toHaveClass("form-actions", "form-actions--start");
    expect(screen.getByTestId("contact-layout")).toHaveClass("contact-page-stack", "mobile-safe-layout");
    expect(screen.getByTestId("contact-quick-preface")).toHaveTextContent(/Prefer a faster route/i);
    expect(screen.getByTestId("contact-quick-routes")).toBeInTheDocument();
    expect(screen.getByTestId("contact-next-steps")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /What happens after you send this/i })).toBeInTheDocument();
    expect(screen.getByText(/No automated responses\. No sales team/i)).toBeInTheDocument();
    expect(screen.getByTestId("contact-timezone")).toBeInTheDocument();
    expect(screen.getByText(/6:00 PM – 11:00 PM IST/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Tell us about your project/i })).toBeInTheDocument();
  });

  it("captures structured lead fields aligned with USD budget tiers", () => {
    render(
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>,
    );

    expect(screen.getByLabelText(/^What do you need\?$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^Approximate budget \(USD\)$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^Ideal timeline$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^References or links$/i)).toBeInTheDocument();
  });

  it("includes automation and AI integration in the service dropdown", () => {
    render(
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>,
    );

    const select = screen.getByLabelText(/^What do you need\?$/i) as HTMLSelectElement;
    const labels = Array.from(select.querySelectorAll("option")).map((o) => o.textContent?.trim());
    expect(labels).toContain("Automation Tools");
    expect(labels).toContain("AI Integration");
    expect(labels).toHaveLength(6);
  });

  it("does not show inline helper lines under Name, Budget, or Timeline", () => {
    render(
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>,
    );

    expect(screen.queryByText(/Letters only — spaces, hyphens, and apostrophes are ok/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Digits and commas only/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Letters, numbers, spaces, and hyphens — e\.g\. 4-8 weeks/i)).not.toBeInTheDocument();
  });

  it("anchors WhatsApp and Calendly as fast paths above the form", () => {
    render(
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>,
    );

    const quick = screen.getByTestId("contact-quick-routes");
    expect(within(quick).getByRole("link", { name: /Chat on WhatsApp/i })).toHaveAttribute(
      "href",
      expect.stringContaining("https://wa.me/"),
    );
    expect(within(quick).getByRole("link", { name: /Book a 20-Min Call/i })).toHaveAttribute(
      "href",
      SITE_CALENDLY_URL,
    );
  });

  it("anchors phone, primary email, LinkedIn, GitHub, and address; map on the right", () => {
    render(
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>,
    );

    expect(screen.getByTestId("contact-bottom")).toHaveClass("contact-bottom-split");
    expect(screen.getByTestId("contact-bottom-left")).toBeInTheDocument();
    expect(screen.getByTestId("contact-bottom-right")).toBeInTheDocument();
    const strip = screen.getByTestId("contact-strip");
    expect(strip).toBeInTheDocument();
    expect(within(strip).queryByText(/^Email$/i)).not.toBeInTheDocument();
    expect(within(strip).queryByText(/^Phone$/i)).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: COMMITERS_PHONE_DISPLAY })).toHaveAttribute("href", buildTelHref());
    expect(screen.getByRole("link", { name: /^hello@commiters\.com$/i })).toHaveAttribute("href", buildMailtoPrimaryHref());
    expect(screen.getByRole("link", { name: /linkedin\.com\/in\/niteshrav/i })).toHaveAttribute(
      "href",
      expect.stringContaining("linkedin.com"),
    );
    expect(screen.getByRole("link", { name: /github\.com\/niteshrav/i })).toHaveAttribute(
      "href",
      expect.stringContaining("github.com"),
    );
    expect(screen.getByTitle(/office location map/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Open in Google Maps/i })).toBeInTheDocument();
    expect(screen.getByText(/82, Sobhagya Nagar, Nakoda Nagar, Udaipur, Rajasthan, India 313001/i)).toBeInTheDocument();
    expect(screen.getByTestId("contact-bottom-left")).toContainElement(
      screen.getByText(/82, Sobhagya Nagar, Nakoda Nagar, Udaipur, Rajasthan, India 313001/i),
    );
  });

  it("shows full office address without redundant checklist bullets", () => {
    render(
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>,
    );

    expect(screen.getByText(/82, Sobhagya Nagar, Nakoda Nagar, Udaipur, Rajasthan, India 313001/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Get Directions/i })).toHaveClass("quote-link", "typography-link");
  });

  it("pins Google Maps open link, directions, and embed on geocoded coordinates", () => {
    render(
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>,
    );

    expect(screen.getByRole("link", { name: /Open in Google Maps/i })).toHaveAttribute(
      "href",
      buildOfficeMapOpenUrl(),
    );
    expect(screen.getByRole("link", { name: /Get Directions/i })).toHaveAttribute(
      "href",
      buildOfficeMapDirectionsUrl(),
    );
    expect(screen.getByTitle(/office location map/i)).toHaveAttribute("src", buildOfficeMapEmbedUrl());
  });

  it("uses typography links for both Google Maps actions (no button styling)", () => {
    render(
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>,
    );

    const openMaps = screen.getByRole("link", { name: /Open in Google Maps/i });
    const directions = screen.getByRole("link", { name: /Get Directions/i });
    expect(openMaps).toHaveClass("quote-link", "typography-link");
    expect(directions).toHaveClass("quote-link", "typography-link");
    expect(openMaps).not.toHaveClass("btn");
    expect(directions).not.toHaveClass("btn");
  });

  it("sanitizes name input to letters and allowed punctuation only", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>,
    );

    const name = screen.getByLabelText(/^Full name$/i);
    await user.clear(name);
    await user.type(name, "Jane123 Doe@");
    expect(name).toHaveValue("Jane Doe");
  });

  it("sets budget from the USD tier select", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>,
    );

    const budget = screen.getByLabelText(/^Approximate budget \(USD\)$/i);
    await user.selectOptions(budget, "$5,000 – $15,000");
    expect(budget).toHaveValue("$5,000 – $15,000");
  });

  it("sanitizes timeline input to letters, numbers, spaces, and hyphens", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>,
    );

    const timeline = screen.getByLabelText(/^Ideal timeline$/i);
    await user.type(timeline, "4@8 weeks!!!");
    expect(timeline).toHaveValue("48 weeks");
  });

  it("submits a valid inquiry with optional budget empty and navigates to thank-you", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>,
    );

    await user.type(screen.getByLabelText(/^Full name$/i), "Nitesh Rav");
    await user.type(screen.getByLabelText(/^Work email$/i), "hello@example.com");
    await user.type(screen.getByLabelText(/^Ideal timeline$/i), "4-8 weeks");
    await user.type(screen.getByLabelText(/^Project overview$/i), "Need a modern website.");

    await user.click(screen.getByRole("button", { name: /Send — we'll reply within 4 hours/i }));

    expect(vi.mocked(createLead)).toHaveBeenCalledTimes(1);
    expect(vi.mocked(createLead)).toHaveBeenCalledWith({
      name: "Nitesh Rav",
      email: "hello@example.com",
      serviceNeeded: "Website Development",
      budgetRange: undefined,
      timeline: "4-8 weeks",
      referenceLinks: undefined,
      message: "Need a modern website.",
    });
    expect(navigateMock).toHaveBeenCalledWith("/thank-you");
  });

  it("submits with a selected USD tier", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>,
    );

    await user.type(screen.getByLabelText(/^Full name$/i), "Nitesh Rav");
    await user.type(screen.getByLabelText(/^Work email$/i), "hello@example.com");
    await user.selectOptions(screen.getByLabelText(/^Approximate budget \(USD\)$/i), "$5,000 – $15,000");
    await user.type(screen.getByLabelText(/^Project overview$/i), "Need a modern website.");

    await user.click(screen.getByRole("button", { name: /Send — we'll reply within 4 hours/i }));

    expect(vi.mocked(createLead)).toHaveBeenCalledWith(
      expect.objectContaining({
        budgetRange: "$5,000 – $15,000",
      }),
    );
    expect(navigateMock).toHaveBeenCalledWith("/thank-you");
  });
});
