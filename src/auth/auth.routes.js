import { Router } from "express"
import { register } from "./auth.controller-S.js"

const router = Router()

router.post("/register", register)

export default router