import {
  findUserById,
  // add restOfFunctions here, // demo only
} from '../db/queries/userQueries.js';
// import { hashPassword } from '../utils/jwtUtils.js';

export const createUserService = async (userData) => {};

export const getUserByIdService = async (id) => {
  return await findUserById(id);
};

export const getAllUsersService = async () => {};
