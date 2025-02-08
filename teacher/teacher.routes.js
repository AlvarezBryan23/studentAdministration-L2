import { Router } from "express";
import { createTeacher } from "./teacher.controller.js";

const router = Router()

router.post("/register", createTeacher)

export default router