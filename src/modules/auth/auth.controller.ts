import type {Request , Response} from "express"
import {authService} from "./auth.service.js"

export const authController = {
  signup(req: Request , res: Response) {
    const signin = authService.signup();
    res.send(signin); 
  },
   login(req: Request , res: Response) {
    const login = authService.login();
    res.send(login);
    }
  
}
