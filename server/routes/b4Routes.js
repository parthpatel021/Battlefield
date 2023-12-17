import express from "express";
import { addSoldierInfoContaroller, getSoldierInfoController } from "../controllers/b4.js";

//router object
const router = express.Router();

router.get("/soldier-info", getSoldierInfoController);
router.post("/soldier-info", addSoldierInfoContaroller);

export default router;