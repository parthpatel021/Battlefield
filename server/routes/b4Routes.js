import express from "express";
import { addSoldierInfoContaroller, getSoldierInfoController, getStoreInfoController } from "../controllers/b4.js";

//router object
const router = express.Router();

router.get("/soldier-info", getSoldierInfoController);
router.post("/soldier-info", addSoldierInfoContaroller);
router.get("/store-info", getStoreInfoController);

export default router;