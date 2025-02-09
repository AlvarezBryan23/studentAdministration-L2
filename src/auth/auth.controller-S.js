import Student from "../student/student.model.js"
import { hash } from "argon2"

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