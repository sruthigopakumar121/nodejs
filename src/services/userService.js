import {
  comparePassword,
  createUser,
  findUserByEmail,
} from "../db/queries/userQueries.js";

export const createUserService = async (userData) => {
  const isAlreadyExistsUser = await findUserByEmail(userData.email);
  if (isAlreadyExistsUser) {
    return { status: 400, message: "Email Already Exists" }
  } else {
    const user = await createUser(userData);
    return { status: 201, message: `${user_name}, You have Successfully Registered` };
  }
};

export const checkLoginService = async (email, password) => {
  const user = await findUserByEmail(email);
  if (!user) {
     return { status: 404, message: "User Not Found" };
  }
  const isPasswordValid = await comparePassword(password, user.password);
  if (!isPasswordValid) {
    return { status: 401, message: "Invalid Password" };
  }
  return { status: 200, message: `Welcome back, ${user.user_name}!` };
};

export const getUserByIdService = async (id) => {
  return await findUserById(id);
};

export const getAllUsersService = async () => {};
