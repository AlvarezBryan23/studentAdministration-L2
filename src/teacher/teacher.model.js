import {Schema, model} from "mongoose";

const teacherSchema = Schema({
    name:{
        type: String,
        required: [true, "Name is required"],
        maxLength: [25, "Name cannot exced 25 characters"]
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
      type:String,
      required: true,
      minLength: 8  
    },
    email:{
        type:String,
        required: [true, "Email is required"],
        unique: true
    },
    assignCourses:{
        type: String,
        required: [true, "Course is required"],
        maxLength: [50, "Course cannot  exced 50 characters"]
    },
    phone:{
        type:String,
        required: true,
        minLength: 8,
        maxLength: 8
    },
    role:{
        type:String,
        required: true,
        enum: ["TEACHER_ROLE"],
        default: "TEACHER_ROLE"
    },
    status:{
        type:Boolean,
        default: true
    }
    
},
{
    versionKey: false,
    timeStamps: true
})

teacherSchema.methods.toJSON = function(){
    const { password, _id, ...teacher} = this.toObject()
    teacher.cm = _id
    return teacher
}

export default model("Teacher", teacherSchema)