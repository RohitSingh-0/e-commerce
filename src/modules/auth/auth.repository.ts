import type { SignupData, User } from "./auth.types.js";

export const authRepository = {
  async findByEmail(email: string): Promise<User | null> {
    // DB query to find user by email
    return null; // placeholder
  },

  async createUser(data: SignupData): Promise<User> {
    // DB query to create new user
    return data; // placeholder
  },
};
