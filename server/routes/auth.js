import express from "express";
import {  register,testuser,otpGenerate,mailSend,fdf ,addAct,deleteAct} from "../controllers/auth.js";

const router = express.Router()

 
router.post("/register", register)
router.post("/mail", mailSend)
router.post("/actuaites", addAct)
router.delete("/:id", deleteAct);

router.get("/otp", otpGenerate)

router.get("/users", testuser)

export default router