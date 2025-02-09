import Student from "../student/student.model.js"
import { hash, verify } from "argon2"
import { generateJWT } from "../helpers/generate-jwt.js"

export const register = async (req, res) =>{
    try{
        const data = req.body

        const encryptedPassword = await hash(data.password)
        data.password = encryptedPassword
        
        const student = await Student.create(data)
        return res.status(201).json({
            message: "Student has been registred",
            name: student.name,
            email: student.email
        })
    }catch(err){
        console.log(err.message)
        return res.status(500).json({
            message: "Student register failed",
            error: err.message
        })
    }
}

export const login = async(req, res) =>{
    const {email, username, password} = req.body
    try{
        const student = await Student.findOne({
            $or: [{email: email}, {username: username}]
        })

        if(!student){
            return res.status(404).json({
                message: "Credenciales inválidas",
                error: "Username o email no existe en la base de datos"
            })
        }

        const validPassword = await verify(student.password, password)

        if(!validPassword){
            return res.status(400).json({
                message: "Credenciales inválidas",
                error: "Contraseña incorrecta"
            })
        }

        const token = await generateJWT(student.id)
        return res.status(200).json({
            message: "Inicio de sesión exitoso",
            userDetails:{
                token: token
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