import Session from "../models/session.model";
import { detectAnomalies } from "../utils/anomaly";

export const createSession = async (data: any) => {
  const anomalies = detectAnomalies(data);

  return await Session.create({
    ...data,
    anomalies
  });
};

export const getTodaySessions = async () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return await Session.find({
    date: { $gte: today }
  }).populate("patientId");
};