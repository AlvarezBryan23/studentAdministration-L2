import Student from "./student.model.js"

export const createStudent = async (req, res)=>{
    const {name, surname, username, email, carne, coursesAssigned, role} = req.body
    const newStudent = new Student({name, surname, username, email, carne, coursesAssigned, role})

    await newStudent.save()

    res.status(201).json({
        message: "Student created successfully",
        data: newStudent
    })
}