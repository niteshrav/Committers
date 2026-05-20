import { render, screen } from "@testing-library/react";
import SectionFigure from "./SectionFigure";

describe("SectionFigure", () => {
  it.each(["layers", "constellation", "wave"] as const)("renders the %s abstract pattern for section rhythm", (pattern) => {
    render(<SectionFigure pattern={pattern} />);

    const fig = screen.getByTestId(`section-figure-${pattern}`);
    expect(fig).toHaveClass("section-figure", `section-figure--${pattern}`);
    expect(fig).toHaveAttribute("role", "presentation");
    expect(fig.querySelector("svg")).toBeTruthy();
  });
});
