/**
 * Simple Icons SVGs via jsDelivr (npm/simple-icons). Brand marks belong to their owners.
 * Expo represents the React Native ecosystem — Simple Icons does not ship a reactnative slug on CDN.
 * Antigravity uses the Chrome icon as a visual stand-in (no dedicated Simple Icons slug for Antigravity).
 */
export type TechLogoDef = {
  /** simple-icons slug */
  slug: string;
  /** Accessible name */
  alt: string;
};

export const HOME_TECH_STACK_ROWS: TechLogoDef[][] = [
  [
    { slug: "react", alt: "React" },
    { slug: "nextdotjs", alt: "Next.js" },
    { slug: "nodedotjs", alt: "Node.js" },
    { slug: "typescript", alt: "TypeScript" },
    { slug: "python", alt: "Python" },
    { slug: "openjdk", alt: "Java" },
    { slug: "postgresql", alt: "PostgreSQL" },
  ],
  [
    { slug: "expo", alt: "React Native" },
    { slug: "openai", alt: "OpenAI" },
    { slug: "langchain", alt: "LangChain" },
    { slug: "vercel", alt: "Vercel" },
    { slug: "googlecloud", alt: "Google Cloud" },
    { slug: "google", alt: "Google ADK" },
  ],
  [
    { slug: "cursor", alt: "Cursor" },
    { slug: "anthropic", alt: "Claude" },
    { slug: "googlechrome", alt: "Antigravity" },
    { slug: "visualstudio", alt: "Visual Studio" },
  ],
];

/** Single left-to-right sequence for ticker / one-row layouts */
export const HOME_TECH_STACK_ITEMS: TechLogoDef[] = HOME_TECH_STACK_ROWS.flat();

export const SIMPLE_ICONS_SVG_BASE = "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons";
