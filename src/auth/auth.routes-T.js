import { Router } from "express";
import { register, loginT } from "./auth.controller-T.js";
import { registerValidatorT, loginValidatorT } from "../middlewares/check-validator.js";

const router = Router()

router.post("/register", registerValidatorT, register)

router.post("/login", loginValidatorT, loginT)

export default router