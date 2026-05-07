/** Canonical paths — keep in sync with `App.tsx` routes. */
export const ROUTES = {
  home: "/",
  about: "/about",
  services: "/services",
  contact: "/contact",
  privacyPolicy: "/privacy-policy",
  terms: "/terms",
  thankYou: "/thank-you",
  notFound: "/404",
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];

/** Every top-level path rendered by the app (for consistency tests). */
export const APP_ROUTE_PATHS: RoutePath[] = [
  ROUTES.home,
  ROUTES.about,
  ROUTES.services,
  ROUTES.contact,
  ROUTES.privacyPolicy,
  ROUTES.terms,
  ROUTES.thankYou,
  ROUTES.notFound,
];
