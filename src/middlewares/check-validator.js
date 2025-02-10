import { body, param } from "express-validator";
import { existeEmail, existeUsername, studentExists } from "../helpers/db-validators.js";
import { existeEmailT, existeUsernameT, teacherExists } from "../helpers/db-validators.js";
import {validarCampos} from "./validar-campos.js"

export const registerValidator = [
    body("name", "El nombre es obligatorio").not().isEmpty(),
    body("username", "El username es obligatorio").not().isEmpty(),
    body("email", "Ingrese un correo válido").isEmail(),
    body("email").custom(existeEmail),
    body("username").custom(existeUsername),
    body("username").custom(existeUsernameT),
   /* body("password").isStrongPassword({
        minlength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumber: 1,
        minSymbols: 0
    }),*/
    validarCampos
]

export const registerValidatorT = [
    body("name", "El nombre es obligatorio").not().isEmpty(),
    body("username", "El username es obligatorio").not().isEmpty(),
    body("email", "Ingrese un correo válido").isEmail(),
    body("email").custom(existeEmailT),
    /*body("password").isStrongPassword({
        minlength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumber: 1,
        minSymbols: 0
    }),*/
    validarCampos
]

export const loginValidator = [
    body("email").optional().isEmail().withMessage("Ingrese un correo válido"),
    body("username").optional().isString().withMessage("Ingrese un username válido"),
    body("password").isLength({min: 8}).withMessage("La contraseña debe tener al menos 8 caracteres")
]

export const loginValidatorT = [
    body("email").optional().isEmail().withMessage("Ingrese un correo válido"),
    body("username").optional().isString().withMessage("Ingrese un username válido"),
    body("password").isLength({min: 8}).withMessage("La contraseña debe tener al menos 8 caracteres")
]

export const getStudentByIdValidator = [
    param("uid").isMongoId().withMessage("No es un CARNÉ válido"),
    param("uid").custom(studentExists)
]

export const getTeacherByIdValidator = [
    param("cm").isMongoId().withMessage("No es un CM válido"),
    param("cm").custom(teacherExists),
    validarCampos
]