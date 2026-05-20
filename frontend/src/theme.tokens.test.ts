import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

describe("theme CSS tokens", () => {
  const css = readFileSync(join(__dirname, "styles.css"), "utf8");

  it("preserves monochrome foundation (white surfaces, black text and primary)", () => {
    expect(css).toMatch(/--bg:\s*#ffffff/);
    expect(css).toMatch(/--text:\s*#111111/);
    expect(css).toMatch(/--primary:\s*#111111/);
  });

  it("does not force uppercase on header or footer brand wordmark", () => {
    const brandBlock = css.match(/\.brand\s*\{[^}]+\}/)?.[0] ?? "";
    const footerBrandBlock = css.match(/\.footer-brand\s*\{[^}]+\}/)?.[0] ?? "";
    expect(brandBlock).not.toMatch(/text-transform:\s*uppercase/);
    expect(footerBrandBlock).not.toMatch(/text-transform:\s*uppercase/);
    expect(brandBlock).toMatch(/font-weight:\s*700/);
    expect(footerBrandBlock).toMatch(/font-weight:\s*700/);
  });

  it("defines a global cool-blue page canvas fade while keeping card surfaces white", () => {
    expect(css).toMatch(/--page-fade-start:\s*#/);
    expect(css).toMatch(/--page-fade-mid:\s*#/);
    expect(css).toMatch(/--page-fade-end:\s*#/);
    expect(css).toMatch(/html,\s*body\s*\{[\s\S]*?linear-gradient\(180deg,\s*var\(--page-fade-start\)/);
    expect(css).toMatch(/\.site-shell\s*\{[\s\S]*?background:\s*transparent/);
  });

  it("defines navy accent variables for light surfaces and hierarchy only", () => {
    expect(css).toContain("--navy-900:");
    expect(css).toContain("--navy-mist:");
    expect(css).toContain("--focus-ring:");
  });
});
