import express from "express";
import {  register,testuser } from "../controllers/auth.js";

const router = express.Router()

 
router.get("/register", testuser)
 


export default router