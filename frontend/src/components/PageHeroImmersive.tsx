import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  centered?: boolean;
  className?: string;
  /** Optional block below the glass card (e.g. home metrics). */
  companion?: React.ReactNode;
}>;

export default function PageHeroImmersive({ children, centered = false, className, companion }: Props) {
  return (
    <section
      className={`hero premium-hero premium-hero--immersive reveal-on-scroll ${centered ? "hero-centered" : ""} ${className ?? ""}`.trim()}
      data-testid="page-hero-premium"
    >
      <div className="premium-hero-backdrop" aria-hidden />
      <div className={`premium-hero-shell ${centered ? "premium-hero-shell--centered" : ""}`.trim()}>
        <div className="premium-hero-glass premium-hero-glass--page">{children}</div>
        {companion}
      </div>
    </section>
  );
}
