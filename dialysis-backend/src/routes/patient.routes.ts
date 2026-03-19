import express from "express";
import { createPatientHandler } from "../controllers/patient.controller";

const router = express.Router();

router.post("/", createPatientHandler);

export default router;