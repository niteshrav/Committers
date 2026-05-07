import { describe, expect, it } from "vitest";
import { DEFAULT_DOCUMENT_TITLE, SITE_NAME, pageTitle } from "./siteMeta";

describe("siteMeta", () => {
  it("builds segment titles with the site name suffix", () => {
    expect(pageTitle("About")).toBe(`About | ${SITE_NAME}`);
    expect(pageTitle("Services")).toBe(`Services | ${SITE_NAME}`);
  });

  it("uses a stable default document title for the home page", () => {
    expect(DEFAULT_DOCUMENT_TITLE).toContain(SITE_NAME);
    expect(DEFAULT_DOCUMENT_TITLE.length).toBeGreaterThan(SITE_NAME.length);
  });
});
