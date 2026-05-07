import { render } from "@testing-library/react";
import { describe, expect, it, beforeEach } from "vitest";
import { useDocumentTitle } from "./useDocumentTitle";

function TitleProbe({ title }: { title: string }) {
  useDocumentTitle(title);
  return null;
}

describe("useDocumentTitle", () => {
  beforeEach(() => {
    document.title = "";
  });

  it("sets document.title while mounted", () => {
    render(<TitleProbe title="About | Commiters" />);
    expect(document.title).toBe("About | Commiters");
  });

  it("restores the previous title on unmount", () => {
    document.title = "prior";
    const { unmount } = render(<TitleProbe title="Next | Commiters" />);
    expect(document.title).toBe("Next | Commiters");
    unmount();
    expect(document.title).toBe("prior");
  });
});
