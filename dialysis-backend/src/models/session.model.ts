import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
  patientId: String, // ✅ TEMP FIX (IMPORTANT)
  preWeight: Number,
  postWeight: Number,
  systolicBP: Number,
  duration: Number,
  date: { type: Date, default: Date.now },
  anomalies: [String],
});

export default mongoose.model("Session", sessionSchema);