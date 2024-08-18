import express from "express";
import {  AdduserMobile,DeleteuserMobile,UpdateuserMobile,userMobile,getByIduserMobile} from "../controllers/usermobile.js";

const router = express.Router()

 
router.post("/add", AdduserMobile)
router.delete("/:id", DeleteuserMobile)
router.put("/:id", UpdateuserMobile)
router.get("/", userMobile)
router.get("/:id", getByIduserMobile)


export default router