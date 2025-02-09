import { hash, verify } from "argon2"
import Teacher from "../teacher/teacher.model.js"

export const register = async(req, res) =>{
    try{
        const data = req.body

        const encryptedPassword = await hash(data.password)
        data.password = encryptedPassword

        const teacher = await Teacher.create(data)
        return res.status(201).json({
            message: "Teacher has been registred",
            name: teacher.name,
            teacher: teacher.email
        })
    }catch(err){
        console.log(err.message)
        return res.status(500).json({
            message: "Teacher register failed",
            error: err.message
        })
    }
}

export const loginT = async(req, res) =>{
    const {email, username, password} = req.body
    try{
        const teacher = await Teacher.findOne({
            $or: [{email: email}, {username: username}]
        })

        if(!teacher){
            return res.status(404).json({
                message: "Credenciales inválidas",
                error: "Username o email no existe en la base de datos"
            })
        }

        const validPassword = await verify(teacher.password, password)

        if(!validPassword){
            return res.status(400).json({
                message: "Credenciales inválidas",
                error: "Contraseña incorrecta"
            })
        }

        return res.status(200).json({
            message: "Inicio de sesión exitoso",
            userDetails:{
                teacher 
            }
        })

    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Error al iniciar sesion",
            error: err.message
        })
    }
}