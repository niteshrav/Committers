import { Router } from "express";
import { createLead } from "../controllers/leadsController";
import { leadsRateLimit } from "../middleware/rateLimit";
import { requireJson } from "../middleware/requireJson";

export const leadsRouter = Router();

leadsRouter.post("/api/leads", leadsRateLimit, requireJson, createLead);

