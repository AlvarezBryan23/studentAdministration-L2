import { Router } from "express";
import { getStudentByIdValidator, deleteStudentValidator } from "../middlewares/check-validator.js";
import { getStudentById, getStudent, deleteStudent } from "./student.controller.js";
    

const router = Router()

router.get("/findStudent/:uid", getStudentByIdValidator, getStudentById)

router.get("/", getStudent)

router.delete("/deleteStudent/:uid", deleteStudentValidator, deleteStudent)

export default router