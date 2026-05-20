import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AboutPage from "./AboutPage";

describe("AboutPage", () => {
  it("shows premium founder principles section", () => {
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>,
    );

    expect(screen.getByTestId("page-hero-premium")).toBeInTheDocument();
    expect(screen.getByTestId("section-figure-constellation")).toBeInTheDocument();
    const principles = screen.getByTestId("founder-principles");
    expect(principles).toHaveClass("founder-principles");
    const inPrinciples = within(principles);
    expect(inPrinciples.getByRole("heading", { name: /Direct founder involvement/i })).toBeInTheDocument();
    expect(inPrinciples.getByRole("heading", { name: /Clear scope and delivery cadence/i })).toBeInTheDocument();
    expect(inPrinciples.getByRole("heading", { name: /Quality and long-term maintainability/i })).toBeInTheDocument();
    expect(screen.queryByText(/Commiters Softwares/i)).not.toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3, name: /^Nitesh Rav$/ })).toBeInTheDocument();
    expect(screen.queryByText(/Nitesh Rav —/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Founder and CEO/i)).not.toBeInTheDocument();
  });
});
