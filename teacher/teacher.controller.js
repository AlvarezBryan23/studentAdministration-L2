import Teacher from "./teacher.model.js"

export const createTeacher = async(req, res) =>{
    const {name, surname, username, email, assignCourses, phone, role} = req.body
    const newTeacher = new Teacher({name, surname, username, email, assignCourses, phone, role})

    await newTeacher.save()

    res.status(201).json({
        message: "Teacher created successfully",
        data: newTeacher
    })
}