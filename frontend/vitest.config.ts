import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/test/setup.ts",
    include: ["src/**/*.test.ts", "src/**/*.test.tsx"],
    /** Default 5s is tight for jsdom + React + userEvent under parallel load */
    testTimeout: 15_000,
    hookTimeout: 15_000,
    /** Fewer workers reduces CPU contention and flaky timeouts on laptops/CI */
    maxWorkers: process.env.CI ? 2 : 4,
  },
});

