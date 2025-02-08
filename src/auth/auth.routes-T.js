import { Router } from "express";
import { register } from "./auth.controller-T.js";
import { registerValidatorT } from "../middlewares/check-validator.js";

const router = Router()

router.post("/register", registerValidatorT, register)

export default router