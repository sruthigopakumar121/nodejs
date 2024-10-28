import pool from '../../config/db.js';

export const createEvent = async ({
  title,
  description,
  date,
  location,
  organizer_id,
}) => {
  const query = `
    INSERT INTO events (title, description, date, location, organizer_id)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `;
  const values = [title, description, date, location, organizer_id];
  const result = await pool.query(query, values);
  return result.rows[0];
};

export const findEventById = async (id) => {};

export const findAllEvents = async () => {
  const query = 'SELECT * FROM events';
  const result = await pool.query(query);
  return result.rows;
};
