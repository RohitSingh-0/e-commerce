import type { Request, Response } from "express";
import { authService } from "./auth.service.js";
import type {SignupData } from "./auth.types.js";

export const authController = {
  async signup(req: Request, res: Response) {
    const data: SignupData = req.body;

    const user = await authService.signup(data);

    res.send(user);
  },

  async login(req: Request, res: Response) {
    // abhi empty rakha hai (future me implement karenge)
    res.send("login route");
  },
};