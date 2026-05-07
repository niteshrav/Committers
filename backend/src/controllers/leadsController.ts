import { Request, Response } from "express";
import { z } from "zod";
import { prisma } from "../prismaClient";

const leadSchema = z.object({
  name: z
    .string()
    .min(1)
    .max(120)
    .regex(/^[a-zA-Z\s'-]+$/, "Name must contain letters only."),
  email: z.string().email(),
  serviceNeeded: z.enum([
    "Website Development",
    "Web Application Development",
    "Mobile App Development",
    "MVP Development",
  ]),
  budgetRange: z.union([
    z.undefined(),
    z.literal(""),
    z
      .string()
      .max(60)
      .regex(/^[\d,]+$/, "Budget must use digits and commas only.")
      .refine((val) => /\d/.test(val), { message: "Budget must include at least one digit." }),
  ]),
  timeline: z
    .string()
    .min(1)
    .max(80)
    .regex(/^[a-zA-Z0-9\s-]+$/, "Timeline contains invalid characters."),
  referenceLinks: z.string().max(500).optional().or(z.literal("")),
  message: z.string().min(1).max(6000),
});

export async function createLead(req: Request, res: Response) {
  const parsed = leadSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "Invalid input.", details: parsed.error.flatten() });
  }

  const data = parsed.data;

  const serviceNeededMap = {
    "Website Development": "WEBSITE_DEVELOPMENT",
    "Web Application Development": "WEB_APPLICATION_DEVELOPMENT",
    "Mobile App Development": "MOBILE_APP_DEVELOPMENT",
    "MVP Development": "MVP_DEVELOPMENT",
  } as const;

  try {
    const created = await prisma.lead.create({
      data: {
        name: data.name,
        email: data.email,
        serviceNeeded: serviceNeededMap[data.serviceNeeded],
        budgetRange: data.budgetRange ? (data.budgetRange === "" ? null : data.budgetRange) : null,
        timeline: data.timeline,
        referenceLinks: data.referenceLinks
          ? data.referenceLinks === ""
            ? null
            : data.referenceLinks
          : null,
        message: data.message,
        status: "NEW",
        source: "WEB",
      },
      select: { id: true },
    });

    return res.status(201).json({ ok: true, id: created.id });
  } catch {
    return res.status(503).json({
      error: "Lead service is temporarily unavailable. Please try again shortly.",
    });
  }
}

