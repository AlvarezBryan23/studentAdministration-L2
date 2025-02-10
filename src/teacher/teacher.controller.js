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