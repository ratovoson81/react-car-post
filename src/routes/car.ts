import express, { Request, Response } from "express";

const router = express.Router();

router.get("/car", (req: Request, res: Response) => {
  return res.send("car");
});
router.post("/car", (req: Request, res: Response) => {
  return res.send("car created");
});

export { router as routerCar };
