import { body } from "express-validator";
import { existeEmail } from "../helpers/db-validators.js";
import { existeEmailT } from "../helpers/db-validators.js";
import {validarCampos} from "./validar-campos.js"

export const registerValidator = [
    body("name", "El nombre es obligatorio").not().isEmpty(),
    body("username", "El username es obligatorio").not().isEmpty(),
    body("email", "Ingrese un correo válido").isEmail(),
    body("email").custom(existeEmail),
    body("password").isStrongPassword({
        minlength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumber: 1,
        minSymbols: 0
    }),
    validarCampos
]

export const registerValidatorT = [
    body("name", "El nombre es obligatorio").not().isEmpty(),
    body("username", "El username es obligatorio").not().isEmpty(),
    body("email", "Ingrese un correo válido").isEmail(),
    body("email").custom(existeEmailT),
    body("password").isStrongPassword({
        minlength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumber: 1,
        minSymbols: 0
    }),
    validarCampos
]