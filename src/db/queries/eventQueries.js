import pool from "../../config/db.js";

export const createEvent = async ({
  title,
  description,
  start_date,
  end_date,
  location,
  status,
  cover_image,
  capacity,
}) => {
  const query = `
    INSERT INTO events (title, description,start_date,end_date,location,status,cover_image,capacity)
    VALUES ($1, $2, $3, $4, $5 ,$6, $7,$8)
    RETURNING *;
  `;
  const values = [
    title,
    description,
    start_date,
    end_date,
    location,
    status.toLowerCase(),
    cover_image,
    capacity,
  ];
  const result = await pool.query(query, values);
  return result.rows[0];
};

export const findEventById = async (id) => {
  const query = "SELECT * FROM events WHERE event_id = $1";
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

export const findAllEvents = async () => {
  const query = "SELECT * FROM events";
  const result = await pool.query(query);
  return result.rows;
};
