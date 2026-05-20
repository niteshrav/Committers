import { describe, expect, it } from "vitest";
import {
  COMMITERS_EMAIL_LEGAL_DISPLAY,
  COMMITERS_EMAIL_PRIMARY,
  COMMITERS_EMAIL_SECONDARY,
  COMMITERS_EMAIL_STRIP_DISPLAY,
  COMMITERS_PHONE_DISPLAY,
  COMMITERS_PHONE_E164_DIGITS,
  buildMailtoPrimaryHref,
  buildMailtoTeamInboxHref,
  buildTelHref,
  buildWhatsAppUrl,
} from "./siteContact";

describe("siteContact", () => {
  it("exposes primary and secondary contact emails", () => {
    expect(COMMITERS_EMAIL_PRIMARY).toBe("hello@commiters.com");
    expect(COMMITERS_EMAIL_SECONDARY).toBe("commitersudaipur@gmail.com");
  });

  it("shows only the primary inbox in public strips", () => {
    expect(COMMITERS_EMAIL_STRIP_DISPLAY).toBe("hello@commiters.com");
  });

  it("lists both inboxes for legal copy alongside dual mailto", () => {
    expect(COMMITERS_EMAIL_LEGAL_DISPLAY).toBe("hello@commiters.com, commitersudaipur@gmail.com");
  });

  it("builds mailto for the primary inbox", () => {
    expect(buildMailtoPrimaryHref()).toBe("mailto:hello@commiters.com");
  });

  it("builds mailto with both team inboxes for legal and internal use", () => {
    expect(buildMailtoTeamInboxHref()).toBe(
      "mailto:hello@commiters.com,commitersudaipur@gmail.com",
    );
  });

  it("exposes the India mobile number for tel and WhatsApp links", () => {
    expect(COMMITERS_PHONE_E164_DIGITS).toBe("919024882899");
    expect(COMMITERS_PHONE_DISPLAY).toBe("+91 9024882899");
  });

  it("builds tel href with E.164 + prefix", () => {
    expect(buildTelHref()).toBe("tel:+919024882899");
  });

  it("builds wa.me link with encoded text", () => {
    const url = buildWhatsAppUrl("Hello & test");
    expect(url).toContain(`https://wa.me/${COMMITERS_PHONE_E164_DIGITS}?text=`);
    expect(url).toContain(encodeURIComponent("Hello & test"));
  });
});
