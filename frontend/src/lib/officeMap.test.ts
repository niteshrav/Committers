import {
  OFFICE_MAP_COORDINATES,
  buildOfficeMapDirectionsUrl,
  buildOfficeMapEmbedUrl,
  buildOfficeMapOpenUrl,
} from "./officeMap";

describe("officeMap", () => {
  it("uses fixed coordinates so Maps opens on a pin, not a broad search", () => {
    expect(OFFICE_MAP_COORDINATES.lat).toBeGreaterThan(24);
    expect(OFFICE_MAP_COORDINATES.lat).toBeLessThan(25);
    expect(OFFICE_MAP_COORDINATES.lng).toBeGreaterThan(73);
    expect(OFFICE_MAP_COORDINATES.lng).toBeLessThan(74);
  });

  it("buildOfficeMapOpenUrl centers and zooms on the office pin", () => {
    const url = buildOfficeMapOpenUrl();
    expect(url).toMatch(/^https:\/\/www\.google\.com\/maps\?/);
    const q = `${OFFICE_MAP_COORDINATES.lat},${OFFICE_MAP_COORDINATES.lng}`;
    expect(url).toContain(encodeURIComponent(q));
    expect(url).toMatch(/[?&]z=18(?:&|$)/);
    expect(url).not.toContain("/maps/search/");
  });

  it("buildOfficeMapDirectionsUrl uses /dir//lat,lng so Maps does not auto-route from GPS to destination query", () => {
    const url = buildOfficeMapDirectionsUrl();
    expect(url).toMatch(/^https:\/\/www\.google\.com\/maps\/dir\/\//);
    expect(url).not.toContain("destination=");
    expect(url).toContain(`${OFFICE_MAP_COORDINATES.lat},${OFFICE_MAP_COORDINATES.lng}`);
  });

  it("buildOfficeMapEmbedUrl pins the iframe on the same coordinates", () => {
    const url = buildOfficeMapEmbedUrl();
    const q = `${OFFICE_MAP_COORDINATES.lat},${OFFICE_MAP_COORDINATES.lng}`;
    expect(url).toContain(encodeURIComponent(q));
    expect(url).toContain("output=embed");
    expect(url).not.toContain("/maps/search/");
  });
});
