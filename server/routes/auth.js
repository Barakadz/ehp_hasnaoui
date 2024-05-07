import express from "express";
import {  register,testuser,otpGenerate,mailSend,fdf } from "../controllers/auth.js";

const router = express.Router()

 
router.post("/register", register)
router.post("/mail", mailSend)

router.get("/otp", otpGenerate)

router.get("/users", testuser)

export default router