import { Request, Response } from "express";
import Session from "../models/session.model";
import { detectAnomalies } from "../utils/anomaly";

export const createSessionHandler = async (req: Request, res: Response) => {
  try {
    console.log("REQ BODY:", req.body); // 🔍 DEBUG

    const anomalies = detectAnomalies(req.body);

    const session = await Session.create({
      ...req.body,
      anomalies,
    });

    res.status(201).json(session);
  } catch (err: any) {
    console.error("🔥 ERROR:", err); // 🔥 IMPORTANT
    res.status(500).json({ error: err.message });
  }
};

export const getTodayHandler = async (req: Request, res: Response) => {
  try {
    const sessions = await Session.find().sort({ date: -1 });
    res.json(sessions);
  } catch (err: any) {
    console.error("🔥 ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};