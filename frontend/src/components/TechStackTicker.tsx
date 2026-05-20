import React from "react";
import { HOME_TECH_STACK_ITEMS, SIMPLE_ICONS_SVG_BASE } from "../lib/homeTechStack";

export default function TechStackTicker() {
  const items = HOME_TECH_STACK_ITEMS;

  return (
    <div
      className="home-tech-ticker"
      data-testid="home-tech-ticker"
      aria-label="Technologies we use — scrolling marquee"
    >
      <div className="home-tech-ticker-viewport">
        <div className="home-tech-ticker-track">
          {items.map((tech, i) => (
            <span key={`a-${tech.slug}-${i}`} className="home-tech-ticker-item" title={tech.alt}>
              <img
                src={`${SIMPLE_ICONS_SVG_BASE}/${tech.slug}.svg`}
                alt={tech.alt}
                className="home-tech-logo-img"
                loading="lazy"
                decoding="async"
                width={40}
                height={40}
              />
            </span>
          ))}
          {items.map((tech, i) => (
            <span key={`b-${tech.slug}-${i}`} className="home-tech-ticker-item" title={tech.alt} aria-hidden="true">
              <img
                src={`${SIMPLE_ICONS_SVG_BASE}/${tech.slug}.svg`}
                alt=""
                className="home-tech-logo-img"
                loading="lazy"
                decoding="async"
                width={40}
                height={40}
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
