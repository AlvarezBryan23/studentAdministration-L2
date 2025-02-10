import Teacher from "./teacher.model.js"

export const getTeacherById = async(req, res) =>{
    try{
        const {cm} = req.params
        const teacher = await Teacher.findById(cm)

        if(!teacher){
            return  res.status(404).json({
                success: false,
                message: "El maestro no existe",
                error: err.message
            })
        }

        return res.status(201).json({
            success: true,
            teacher
        })
        
    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Error al obtener al Maestro",
            errror: err.message
        })
    }
}

export const getTeacher = async(req, res) =>{
    try{
        const {limits = 5, from = 0} = req.query
        const query = {status: true}

        const [total, teachers] = await Promise.all([
            Teacher.countDocuments(query),
            Teacher.find(query)
                   .skip(Number(from))
                   .limit(Number(limits))
        ])

        return res.status(200).json({
            success: true,
            total,
            teachers
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Error al obtener al maestro",
            error: err.message
        })
    }
}

export const deleteTeacher = async(req, res) => {
    try{    
        const { cm } = req.params

        const teacher = await Teacher.findByIdAndUpdate(cm, {status: false}, {new: true})

        return res.status(200).json({
            success: true,
            message: "El maestro fue eliminado",
            teacher
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Error al eliminar al Maestro",
            error: err.message
        })
    }
}