import { ROUTES } from "./routes";

export type ServiceNavEntry = { id: string; label: string };

/** Section ids on `ServicesPage` (order matches page). */
export const SERVICE_NAV_ENTRIES: ServiceNavEntry[] = [
  { id: "website-development", label: "Website Development" },
  { id: "web-applications", label: "Web Applications" },
  { id: "mobile-applications", label: "Mobile Applications" },
  { id: "automation-tools", label: "Automation Tools" },
  { id: "ai-integration", label: "AI Integration" },
  { id: "mvp-development", label: "MVP Development" },
];

export function buildServiceSectionHref(sectionId: string): string {
  return `${ROUTES.services}#${sectionId}`;
}
