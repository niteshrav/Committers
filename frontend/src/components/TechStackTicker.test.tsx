import { render, screen, within } from "@testing-library/react";
import TechStackTicker from "./TechStackTicker";

describe("TechStackTicker", () => {
  it("renders a viewport with an animated track and duplicated logo strip", () => {
    render(<TechStackTicker />);

    const root = screen.getByTestId("home-tech-ticker");
    expect(root).toHaveClass("home-tech-ticker");
    expect(root).toHaveAttribute("aria-label");

    expect(root.querySelector(".home-tech-ticker-viewport")).toBeTruthy();
    const track = root.querySelector(".home-tech-ticker-track");
    expect(track).toBeTruthy();
    expect(track).toHaveClass("home-tech-ticker-track");

    expect(root.querySelectorAll("img")).toHaveLength(34);
    expect(within(root).getAllByAltText("React")).toHaveLength(1);
    expect(root.querySelectorAll('.home-tech-ticker-item[aria-hidden="true"]')).toHaveLength(17);
  });
});
