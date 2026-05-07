export const SITE_NAME = "Commiters";

/** Matches default `index.html` title — home page uses this string. */
export const DEFAULT_DOCUMENT_TITLE = `${SITE_NAME} | Web & Mobile App Development`;

export function pageTitle(segment: string): string {
  return `${segment} | ${SITE_NAME}`;
}
