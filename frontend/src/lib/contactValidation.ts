/** Letters, spaces, apostrophes, hyphens — ASCII names only */
const NAME_ALLOWED = /^[a-zA-Z\s'-]+$/;

import { BUDGET_RANGE_OPTIONS } from "./budgetRanges";

const ALLOWED_BUDGET_SET = new Set(BUDGET_RANGE_OPTIONS.filter(Boolean) as string[]);

/** Timeline: letters, digits, spaces, hyphen */
const TIMELINE_ALLOWED = /^[a-zA-Z0-9\s-]+$/;

export function sanitizeNameInput(value: string): string {
  return value.replace(/[^a-zA-Z\s'-]/g, "");
}

export function sanitizeTimelineInput(value: string): string {
  return value.replace(/[^a-zA-Z0-9\s-]/g, "");
}

export function validateName(value: string): string | null {
  const t = value.trim();
  if (!t) return "Please enter your name.";
  if (!NAME_ALLOWED.test(t)) return "Use letters only—spaces, hyphens, and apostrophes are ok.";
  return null;
}

export function validateEmail(value: string): string | null {
  const t = value.trim();
  if (!t) return "Please enter your email.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)) return "Please enter a valid email.";
  return null;
}

export function validateBudgetOptional(value: string): string | null {
  const t = value.trim();
  if (!t) return null;
  if (!ALLOWED_BUDGET_SET.has(t)) return "Please choose a valid budget range.";
  return null;
}

export function validateTimelineOptional(value: string): string | null {
  const t = value.trim();
  if (!t) return null;
  if (!TIMELINE_ALLOWED.test(t)) return "Timeline: use letters, numbers, spaces, and hyphens only.";
  return null;
}
