import { BUDGET_RANGE_OPTIONS } from "./budgetRanges";

describe("budgetRanges", () => {
  it("includes an empty option plus six USD tiers", () => {
    expect(BUDGET_RANGE_OPTIONS[0]).toBe("");
    expect(BUDGET_RANGE_OPTIONS).toHaveLength(7);
    expect(BUDGET_RANGE_OPTIONS).toContain("Under $1,000");
    expect(BUDGET_RANGE_OPTIONS).toContain("Not sure yet");
  });
});
