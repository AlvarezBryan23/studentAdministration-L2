import Student from "./student.model.js"

export const getStudentById = async(req, res) =>{
    try{
        const {uid} = req.params
        const student = await Student.findById(uid)

        if(!student){
            return  res.status(404).json({
                success: false,
                message: "El estudiante no existe",
                error: err.message
            })
        }

        return res.status(201).json({
            success: true,
            student
        })

    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Error al obtener al estudiante",
            errror: err.message
        })
    }
}

export const getStudent = async(req, res) =>{
    try{
        const {limits = 5, from = 0} = req.query
        const query = {status: true}

        const [total, students ] = await Promise.all([
            Student.countDocuments(query),
            Student.find(query)
                   .skip(Number(from))
                   .limit(Number(limits))
        ])

        return res.status(200).json({
            success: true,
            total,
            students
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Error al listar a los estudiantes",
            error: err.message
        })
    }
}