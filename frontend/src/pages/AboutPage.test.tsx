import { render, screen } from "@testing-library/react";
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
    const principles = screen.getByTestId("founder-principles");
    expect(principles).toHaveClass("founder-principles");
    expect(screen.getByText(/Direct founder involvement/i)).toBeInTheDocument();
    expect(screen.getByText(/Clear scope and delivery cadence/i)).toBeInTheDocument();
    expect(screen.getByText(/Quality and long-term maintainability/i)).toBeInTheDocument();
    expect(screen.queryByText(/Commiters Softwares/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Nitesh Rav/i)).toBeInTheDocument();
  });
});
