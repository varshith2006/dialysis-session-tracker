import Session from "../models/session.model";
import Patient from "../models/patient.model";
import { detectAnomalies } from "../utils/anomaly";


export const createSession = async (data: any) => {

  
  const patient = await Patient.findById(data.patientId);

  
  const anomalies = detectAnomalies({
    ...data,
    dryWeight: patient?.dryWeight
  });

  return await Session.create({
    ...data,
    status: data.status || "in_progress",
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


export const getTodaySchedule = async () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const patients = await Patient.find();

  const sessions = await Session.find({
    date: { $gte: today }
  });

  return patients.map((patient) => {
    const session = sessions.find(
      (s: any) => String(s.patientId) === String(patient._id)
    );

    return {
      patient,
      session: session || null,
      status: session ? session.status : "not_started"
    };
  });
};


export const updateSessionNotes = async (id: string, notes: string) => {
  return await Session.findByIdAndUpdate(
    id,
    { notes },
    { new: true }
  );
};


export const getSessionsWithAnomalies = async () => {
  return await Session.find({
    anomalies: { $exists: true, $not: { $size: 0 } }
  });
};
