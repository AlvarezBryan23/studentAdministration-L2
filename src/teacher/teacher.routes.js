import { Router } from "express";
import { getTeacherByIdValidator } from "../middlewares/check-validator.js";
import { getTeacherById } from "./teacher.controller.js";


const router = Router()

router.get("/findTeacher/:cm", getTeacherByIdValidator, getTeacherById)

export default router       