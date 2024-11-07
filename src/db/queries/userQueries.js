import pool from '../../config/db.js';
import bcrypt from 'bcrypt';

export const createUser = async ({user_id, user_name, email, password,phone,role}) => {
  const query =
    'INSERT INTO users (user_id, user_name, email, password,phone,role ) VALUES ($1, $2, $3, $4, $5,$6) RETURNING *';
  const values = [user_id, user_name, email, password,phone,role ];
  const result = await pool.query(query, values);
  return result.rows[0];
};

export const findUserById = async (id) => {
  const query = 'SELECT id, name, email FROM users WHERE id = $1';
  const result = await pool.query(query, [id]);
  return result.rows[0];
};


export const findUserByEmail = async (email) => {
  const query = 'SELECT * FROM users WHERE email = $1';
  const result = await pool.query(query, [email]);
  return result.rows[0];
}

export const comparePassword = async (password, hash) => {
  const comparePasswordResult = await bcrypt.compare(password, hash);
  return comparePasswordResult;
};

export const findAllUsers = async () => {};
