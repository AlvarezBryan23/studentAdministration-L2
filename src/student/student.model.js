import {Schema, model} from "mongoose";

const studentSchema = Schema({
    name:{
        type: String,
        required: [true, "Name is required"],
        maxLength: [25, "Name cannot  exced 25 characters"]
    },
    surname:{
        type:String,
        required: [true, "Last name is required"],
        maxLength: [25, "Last name exced 25 characters"]
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        minLength: 8
    },
    email:{
        type:String,
        required: [true, "Email is required"],
        unique: true
    },
    carne:{
        type:String,
        required: true,
        minLength: 7
    },
    coursesAssigned:{
        type: String,
        required: [true, "Course is required"],
        maxLength: [50, "Course cannot  exced 50 characters"]
    },
    role:{
        type: String,
        required: true,
        enum:["STUDENT_ROLE"],
        default: "STUDENT_ROLE"
    },
    status:{
        type: Boolean,
        default: true
    }

},
{
    versionKey: false,
    timeStamps: true
})

studentSchema.methods.toJSON = function(){
    const { password, _id, ...student} = this.toObject()
    student.uid = _id
    return student
}

export default model("Student", studentSchema)