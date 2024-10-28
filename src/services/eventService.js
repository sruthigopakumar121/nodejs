import {
  createEvent,
  // add restOfFunctions here, // demo only
} from '../db/queries/eventQueries.js';

export const createEventService = async (eventData) => {
  return await createEvent(eventData);
};

export const getEventByIdService = async (id) => {};

export const getAllEventsService = async () => {};
