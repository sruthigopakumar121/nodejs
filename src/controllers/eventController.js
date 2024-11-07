import {
  createEventService,
  getEventByIdService,
  getAllEventsService,
} from "../services/eventService.js";

export const createEvent = async (req, res) => {
  try {
    const event = await createEventService(req.body);
    res.status(201).json({ event: "Event Created Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getEventById = async (req, res) => {
  try {
    const event = await getEventByIdService(req.params.event_id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllEvents = async (req, res) => {
  try {
    const events = await getAllEventsService();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
