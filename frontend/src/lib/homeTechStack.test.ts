import { describe, expect, it } from "vitest";
import { HOME_TECH_STACK_ITEMS, HOME_TECH_STACK_ROWS } from "./homeTechStack";

describe("homeTechStack", () => {
  it("exposes a flat items list matching stacked rows", () => {
    expect(HOME_TECH_STACK_ITEMS).toEqual(HOME_TECH_STACK_ROWS.flat());
    expect(HOME_TECH_STACK_ITEMS).toHaveLength(17);
  });

  it("includes Python, Google stack, Cursor, Claude, Antigravity, and Visual Studio entries", () => {
    const flat = HOME_TECH_STACK_ROWS.flat();
    expect(flat.some((t) => t.alt === "Python")).toBe(true);
    expect(flat.some((t) => t.alt === "Google ADK")).toBe(true);
    expect(flat.some((t) => t.alt === "Google Cloud")).toBe(true);
    expect(flat.some((t) => t.alt === "Cursor")).toBe(true);
    expect(flat.some((t) => t.alt === "Claude")).toBe(true);
    expect(flat.some((t) => t.alt === "Antigravity")).toBe(true);
    expect(flat.some((t) => t.alt === "Visual Studio")).toBe(true);
  });

  it("defines logos with no AWS entry", () => {
    const flat = HOME_TECH_STACK_ROWS.flat();
    expect(flat.some((t) => t.slug.toLowerCase() === "amazonaws")).toBe(false);
    expect(flat.some((t) => t.alt.toLowerCase().includes("aws"))).toBe(false);
  });
});
