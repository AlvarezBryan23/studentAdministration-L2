import { Router } from "express";
import { getTeacherByIdValidator } from "../middlewares/check-validator.js";
import { getTeacherById, getTeacher } from "./teacher.controller.js";


const router = Router()

router.get("/findTeacher/:cm", getTeacherByIdValidator, getTeacherById)

router.get("/", getTeacher)

export default router       