import { Router } from "express";
import { getStudentByIdValidator } from "../middlewares/check-validator.js";
import { getStudentById, getStudent } from "./student.controller.js";
    

const router = Router()

router.get("/findStudent/:uid", getStudentByIdValidator, getStudentById)

router.get("/", getStudent)

export default router