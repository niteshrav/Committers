import rateLimit from "express-rate-limit";

export const leadsRateLimit = rateLimit({
  windowMs: Number(process.env.LEADS_RATE_LIMIT_WINDOW_MS ?? 15 * 60 * 1000),
  max: Number(process.env.LEADS_RATE_LIMIT_MAX ?? 20),
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests. Please try again later." },
});

