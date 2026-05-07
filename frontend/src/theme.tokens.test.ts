import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

describe("theme CSS tokens", () => {
  const css = readFileSync(join(__dirname, "styles.css"), "utf8");

  it("preserves monochrome foundation (white background, black text and primary)", () => {
    expect(css).toMatch(/--bg:\s*#ffffff/);
    expect(css).toMatch(/--text:\s*#111111/);
    expect(css).toMatch(/--primary:\s*#111111/);
  });

  it("defines navy accent variables for light surfaces and hierarchy only", () => {
    expect(css).toContain("--navy-900:");
    expect(css).toContain("--navy-mist:");
    expect(css).toContain("--focus-ring:");
  });
});
