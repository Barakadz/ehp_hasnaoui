import express from "express";
import { login,register,logout ,otpGenerate,mailSend,testuser} from "../controllers/auth.js";

const router = express.Router()

router.post("/login", login)
router.post("/register", register)
router.post("/logout", logout)
router.get("/otp", otpGenerate)
router.post("/mail", mailSend)
router.post("/test", testuser)


export default router