import bcrypt from "bcrypt";
import { authRepository } from "./auth.repository.js";
import type { SignupData, User } from "./auth.types.js";

export const authService = {
  async signup(data: SignupData): Promise<User> {
    const { email, password } = data;

    const user = await authRepository.findByEmail(email);

    if (user) {
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await authRepository.createUser({
      email,
      password: hashedPassword,
    });

    return newUser;
  },
};