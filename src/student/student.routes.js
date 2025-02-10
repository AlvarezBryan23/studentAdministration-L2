import { Router } from "express";
import { getStudentByIdValidator } from "../middlewares/check-validator.js";
import { getStudentById } from "./student.controller.js";
    

const router = Router()

router.get("/findStudent/:uid", getStudentByIdValidator, getStudentById)

export default router