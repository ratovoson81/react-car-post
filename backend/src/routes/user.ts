import express, { Router } from "express";
import { login, register } from "../controllers/User";

const router: Router = express.Router();

router.post("/register", register);
router.post("/login", login);

export { router as routerUser };