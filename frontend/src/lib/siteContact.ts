/** Primary brand inbox */
export const COMMITERS_EMAIL_PRIMARY = "hello@commiters.com";
/** Secondary inbox (Udaipur / Gmail) */
export const COMMITERS_EMAIL_SECONDARY = "commitersudaipur@gmail.com";

/** Single-line display for contact strip — primary professional inbox only (PDF / international trust). */
export const COMMITERS_EMAIL_STRIP_DISPLAY = COMMITERS_EMAIL_PRIMARY;

/** Legal pages list both inboxes next to a dual-recipient mailto. */
export const COMMITERS_EMAIL_LEGAL_DISPLAY = `${COMMITERS_EMAIL_PRIMARY}, ${COMMITERS_EMAIL_SECONDARY}`;

/** Default mail client opens primary inbox. */
export function buildMailtoPrimaryHref(): string {
  return `mailto:${COMMITERS_EMAIL_PRIMARY}`;
}

/** Both team inboxes — legal pages & internal use; contact strip uses primary only. */
export function buildMailtoTeamInboxHref(): string {
  return `mailto:${COMMITERS_EMAIL_PRIMARY},${COMMITERS_EMAIL_SECONDARY}`;
}

/** E.164 digits only (India mobile, no + prefix). */
export const COMMITERS_PHONE_E164_DIGITS = "919024882899";

/** Human-readable phone for labels and contact strips. */
export const COMMITERS_PHONE_DISPLAY = "+91 9024882899";

export function buildTelHref(): string {
  return `tel:+${COMMITERS_PHONE_E164_DIGITS}`;
}

/** Default prefilled WhatsApp message — URL-encoded when used in wa.me links. */
export const WHATSAPP_DEFAULT_MESSAGE = `Hi! 👋 Welcome to Commiters — Udaipur's custom software team.

We help businesses Commit, Code & Connect through:
🌐 Websites & Web Apps
📱 Mobile Applications
🤖 AI Tools & Automation
🚀 MVP Development

Tell us a little about your project and we'll get back to you shortly with a free consultation! ✅`;

export function buildWhatsAppUrl(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${COMMITERS_PHONE_E164_DIGITS}?text=${encoded}`;
}
