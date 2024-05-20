import express from "express";
import {  AddActualites,DeleteActualites,UpdateActualites,Actualites,getByIdActualites,derActualites} from "../controllers/act.js";

const router = express.Router()

 
router.post("/add", AddActualites)
router.delete("/:id", DeleteActualites)
router.put("/:id", UpdateActualites)
router.get("/", Actualites)
router.get("/:id", getByIdActualites)
router.get("/der", derActualites)


export default router