import express from "express";
import {
  createCar,
  deleteCar,
  getAllCar,
  getOneCar,
  modifyCar,
} from "../controllers/Car";

const router = express.Router();

router.post("/", createCar);
router.put("/:id", modifyCar);
router.delete("/:id", deleteCar);
router.get("/:id", getOneCar);
router.get("/", getAllCar);

export { router as routerCar };
