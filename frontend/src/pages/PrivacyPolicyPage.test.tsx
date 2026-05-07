import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PrivacyPolicyPage from "./PrivacyPolicyPage";

describe("PrivacyPolicyPage", () => {
  it("uses the full Privacy Policy heading on the page", () => {
    const { container } = render(
      <MemoryRouter>
        <PrivacyPolicyPage />
      </MemoryRouter>,
    );

    expect(screen.getByTestId("page-hero-premium")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^Privacy Policy$/i })).toBeInTheDocument();
    expect(container.querySelectorAll(".legal-heading").length).toBeGreaterThan(0);
  });
});
