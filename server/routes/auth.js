import express from "express";
import {  register,testuser,otpGenerate,mailSend,fdf ,addAct,deleteRendezvous,deleteAct,updateConfirmation,login,logout} from "../controllers/auth.js";

const router = express.Router()

 
router.post("/register", register)
router.post("/mail", mailSend)

router.post("/login", login)
router.post("/logout", logout)

router.post("/actuaites", addAct)
router.delete("/:id", deleteRendezvous);
router.put("/:id", updateConfirmation)

router.get("/otp", otpGenerate)

router.get("/users", testuser)

export default router