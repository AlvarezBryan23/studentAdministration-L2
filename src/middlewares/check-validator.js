import { check } from "express-validator";
import { existeEmail } from "../helpers/db-validators.js";
import { existeEmailT } from "../helpers/db-validators.js";
import {validarCampos} from "./validar-campos.js"

export const registerValidator = [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "Ingrese un correo válido").isEmail(),
    check("email").custom(existeEmail),
    validarCampos
]

export const registerValidatorT = [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "Ingrese un correo válido").isEmail(),
    check("email").custom(existeEmailT),
    validarCampos
]