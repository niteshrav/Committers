import { render } from "@testing-library/react";
import { IconBolt, IconEnvelope } from "./icons";

describe("icons", () => {
  it("renders standard outline glyphs for UI chrome", () => {
    const { container: env } = render(<IconEnvelope />);
    const { container: bolt } = render(<IconBolt />);
    expect(env.querySelector("svg")).toBeTruthy();
    expect(bolt.querySelector("svg")).toBeTruthy();
  });
});
