import { Router } from "express"
import { login, register } from "./auth.controller-S.js"
import { registerValidator, loginValidator} from "../middlewares/check-validator.js"

const router = Router()

router.post("/register", registerValidator, register)

router.post("/login", loginValidator, login)

export default router