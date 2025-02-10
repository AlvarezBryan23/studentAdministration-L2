import { Router } from "express";
import { getTeacherByIdValidator, deleteTeacherValidator } from "../middlewares/check-validator.js";
import { getTeacherById, getTeacher, deleteTeacher } from "./teacher.controller.js";


const router = Router()

router.get("/findTeacher/:cm", getTeacherByIdValidator, getTeacherById)

router.get("/", getTeacher)

router.delete("/deleteTeacher/:cm", deleteTeacherValidator, deleteTeacher)

export default router       