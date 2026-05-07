import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ROUTES } from "../lib/routes";
import ThankYouPage from "./ThankYouPage";

describe("ThankYouPage", () => {
  it("renders confirmation hero with primary actions", () => {
    render(
      <MemoryRouter>
        <ThankYouPage />
      </MemoryRouter>,
    );

    expect(screen.getByTestId("page-hero-premium")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Thank you for reaching out/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Back to Home/i })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: /^Contact$/i })).toHaveAttribute("href", ROUTES.contact);
  });
});
