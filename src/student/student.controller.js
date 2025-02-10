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