import express from "express";
import { createPatientHandler } from "../controllers/patient.controller";
import Patient from "../models/patient.model"; 

const router = express.Router();


router.post("/", createPatientHandler);


router.get("/", async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch patients" });
  }
});

export default router;
