import {
  createEventService,
  // restOfFunctions, // demo only
} from '../services/eventService.js';

export const createEvent = async (req, res) => {
  try {
    const event = await createEventService(req.body);
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getEventById = async (req, res) => {};

export const getAllEvents = async (req, res) => {};
