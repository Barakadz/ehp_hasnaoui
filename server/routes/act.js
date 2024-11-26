import express from "express";
import { 
  AddActualites,
  DeleteActualites,
  UpdateActualites,
  Actualites,
  getByIdActualites,
  tousActualites,
  derTroisActualites
} from "../controllers/act.js";

const router = express.Router();

// Specific routes first
router.get("/tous/", tousActualites);
router.get("/dertroisact", derTroisActualites);

// Dynamic routes last
router.get("/:id", getByIdActualites);
router.post("/add", AddActualites);
router.delete("/:id", DeleteActualites);
router.put("/:id", UpdateActualites);
router.get("/", Actualites);

export default router;
