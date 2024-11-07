import {
  createEvent,
  findEventById,
  findAllEvents,
} from "../db/queries/eventQueries.js";

export const createEventService = async (eventData) => {
  return await createEvent(eventData);
};

export const getEventByIdService = async (id) => {
  return await findEventById(id);
};

export const getAllEventsService = async () => {
  return await findAllEvents();
};
