import express from "express";
import {  AddUser } from "../controllers/usermobile.js";

const router = express.Router()

 
router.post("/add", AddUser)
 


export default router