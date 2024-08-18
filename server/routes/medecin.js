import express from "express";
import {  AddMedecin,DeleteMedecin,UpdateMedecin,Medecin,getByIdMedecin} from "../controllers/medecin.js";

const router = express.Router()

 
router.post("/add", AddMedecin)
router.delete("/:id", DeleteMedecin)
router.put("/:id", UpdateMedecin)
router.get("/", Medecin)
router.get("/:id", getByIdMedecin)


export default router