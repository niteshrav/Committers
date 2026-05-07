import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Layout from "./Layout";

describe("Layout", () => {
  it("wraps pages in a fluid route transition shell", () => {
    render(
      <MemoryRouter initialEntries={["/services"]}>
        <Layout>
          <section>Page Content</section>
        </Layout>
      </MemoryRouter>,
    );

    expect(screen.getByTestId("route-shell")).toHaveClass("route-shell", "route-transition");
    expect(document.querySelector(".site-shell")).toHaveAttribute("data-theme", "monochrome-navy");
  });

  it("reveals scroll-animated sections with fallback when observer is unavailable", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Layout>
          <section data-testid="demo-reveal" className="reveal-on-scroll">
            Demo Content
          </section>
        </Layout>
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(screen.getByTestId("demo-reveal")).toHaveClass("reveal-on-scroll", "is-visible");
    });
  });
});
