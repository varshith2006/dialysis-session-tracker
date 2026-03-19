import express from "express";
import { createSessionHandler, getTodayHandler } from "../controllers/session.controller";

const router = express.Router();

router.post("/", createSessionHandler);
router.get("/", getTodayHandler);

export default router;