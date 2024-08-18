import express from "express";
import {  AddGalerie,DeleteGalerie,UpdateGalerie,Galerie,getByIdGalerie} from "../controllers/galerie.js";

const router = express.Router()

 
router.post("/add", AddGalerie)
router.delete("/:id", DeleteGalerie)
router.put("/:id", UpdateGalerie)
router.get("/", Galerie)
router.get("/:id", getByIdGalerie)


export default router