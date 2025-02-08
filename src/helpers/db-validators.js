import Student from "../student/student.model.js"
import Teacher from "../teacher/teacher.model.js"

export const existeEmail = async(email= '')=>{
    const existe = await Student.findOne({email})
    console.log(existe)
    if(existe){
        throw new Error(`El email ${email} ya fue registrado previamente`)
    }
}

export const existeEmailT = async(email= '')=>{
    const existe = await Teacher.findOne({email})
    console.log(existe)
    if(existe){
        throw new Error(`El email ${email} ya fue registrado previamente`)
    }
}