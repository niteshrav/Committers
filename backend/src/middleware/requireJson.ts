import { Request, Response, NextFunction } from "express";

export function requireJson(req: Request, res: Response, next: NextFunction) {
  if (!req.is("application/json")) {
    return res.status(415).json({ error: "Content-Type must be application/json" });
  }
  next();
}

