import express from "express";
import {
  createEvent,
  getEventById,
  getAllEvents,
} from "../controllers/eventController.js";
import { authenticateToken } from "../middlewares/authMiddleware.js";

const router = express.Router();
router.post('/create_event', authenticateToken, createEvent);
// router.post("/create_event", createEvent);
router.get("/:event_id", getEventById);
router.get("/", getAllEvents);

export default router;
