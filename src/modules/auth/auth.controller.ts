import type {Request , Response} from "express"
import {authService} from "./auth.service.js"

export const authController = {
  signup(req: Request , res: Response) {
    const output = authService.signup();
    res.send(output);
  }
  
}