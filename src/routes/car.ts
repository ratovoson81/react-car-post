import express, { Router } from "express";
import {
  createCar,
  deleteCar,
  getAllCar,
  getOneCar,
  modifyCar,
} from "../controllers/Car";

const router: Router = express.Router();

router.post("/", createCar);
router.put("/:id", modifyCar);
router.delete("/:id", deleteCar);
router.get("/:id", getOneCar);
router.get("/", getAllCar);

export { router as routerCar };
