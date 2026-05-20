import { describe, expect, it } from "vitest";
import { ROUTES } from "./routes";
import { SERVICE_NAV_ENTRIES, buildServiceSectionHref } from "./navSections";

describe("navSections", () => {
  it("builds stable service section URLs for Services page anchors", () => {
    expect(buildServiceSectionHref("website-development")).toBe(`${ROUTES.services}#website-development`);
    expect(SERVICE_NAV_ENTRIES.map((e) => e.id)).toEqual([
      "website-development",
      "web-applications",
      "mobile-applications",
      "automation-tools",
      "ai-integration",
      "mvp-development",
    ]);
  });

});
