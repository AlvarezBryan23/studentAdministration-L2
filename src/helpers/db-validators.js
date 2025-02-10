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

export const existeUsername = async(username= '')=>{
    const existe = await Student.findOne({username})
    console.log(existe)
    if(existe){
        throw new Error(`El username ${username} ya fue registrado previamente`)
    }
}

export const existeUsernameT = async(username= '')=>{
    const existe = await Teacher.findOne({username})
    console.log(existe)
    if(existe){
        throw new Error(`El username ${username} ya fue registrado previamente`)
    }
}

export const studentExists = async(uid = '')=>{
    const existe = await Student.findById(uid)
    console.log(existe)
    if(!existe){
        throw new Error("El estudiante no existe")
    }
}

export const teacherExists = async(cm = '')=>{
    const existe = await Teacher.findById(cm)
    console.log(existe)
    if(!existe){
        throw new Error("El maestro no existe")
    }
}