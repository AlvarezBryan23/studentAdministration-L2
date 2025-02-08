import Teacher from "../teacher/teacher.model.js"

export const register = async(req, res) =>{
    try{
        const data = req.body

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