import express from "express";
import { authController } from "./auth.controller.js";

const router = express.Router();

console.log("Auth routes loaded");

router.get("/signup", authController.signup);
console.log


export default router;