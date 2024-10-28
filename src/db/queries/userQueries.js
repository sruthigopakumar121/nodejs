import pool from '../../config/db.js';

export const createUser = async ({ name, email, password }) => {};

export const findUserById = async (id) => {
  const query = 'SELECT id, name, email FROM users WHERE id = $1';
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

export const findAllUsers = async () => {};
