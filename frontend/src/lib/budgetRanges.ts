/** USD budget tiers — aligned with lead API validation */
export const BUDGET_RANGE_OPTIONS = [
  "",
  "Under $1,000",
  "$1,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
  "Not sure yet",
] as const;

export type BudgetRangeOption = (typeof BUDGET_RANGE_OPTIONS)[number];
