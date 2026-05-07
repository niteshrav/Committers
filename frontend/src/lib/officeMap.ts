/**
 * Geocoded pin for the Udaipur office (Nakoda Nagar / 313001).
 * Update these from Google Maps (right-click the correct building → coordinates) if you move.
 * Exact pin from site verification (Google Maps coordinates).
 */
export const OFFICE_MAP_COORDINATES = {
  lat: 24.598236,
  lng: 73.767953,
} as const;

/** Opens Maps centered on a pin at the office coordinates (not a vague text search). */
export function buildOfficeMapOpenUrl(): string {
  const { lat, lng } = OFFICE_MAP_COORDINATES;
  const params = new URLSearchParams({
    q: `${lat},${lng}`,
    z: "18",
    hl: "en",
  });
  return `https://www.google.com/maps?${params.toString()}`;
}

/**
 * Directions to the office only (destination in the path).
 * Using `/dir/?api=1&destination=…` makes Maps use “Your location” as the start and drew a route
 * to the old pin; `/dir//lat,lng` leaves the start unset so the red pin matches the office only.
 */
export function buildOfficeMapDirectionsUrl(): string {
  const { lat, lng } = OFFICE_MAP_COORDINATES;
  return `https://www.google.com/maps/dir//${lat},${lng}`;
}

/** Embedded map iframe — same pin as open/directions links. */
export function buildOfficeMapEmbedUrl(): string {
  const { lat, lng } = OFFICE_MAP_COORDINATES;
  const params = new URLSearchParams({
    q: `${lat},${lng}`,
    z: "17",
    output: "embed",
  });
  return `https://www.google.com/maps?${params.toString()}`;
}
