import express from "express";
import {  AddOffres,DeleteOffres,UpdateOffres,Offres,getByIdOffres} from "../controllers/offres.js";

const router = express.Router()

 
router.post("/add", AddOffres)
router.delete("/:id", DeleteOffres)
router.put("/:id", UpdateOffres)
router.get("/", Offres)
router.get("/:id", getByIdOffres)


export default router