"use strict"

import express from 'express'
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import { dbConecction } from './mongo.js'
import studentRoutes from "../student/student.routes.js"
import teacherRoutes from "../teacher/teacher.routes.js"

const configs = (app) =>{
    app.use(express.json())
    app.use(cors())
    app.use(helmet())
    app.use(morgan("dev"))
}

const routes = (app) =>{
    app.use("/studentAdministration/v1/students", studentRoutes)
    app.use("/studentAdministration/v1/teachers", teacherRoutes)
}

const conectarDB = async () =>{
    try{
        await dbConecction()
    }catch(err){
        console.log(`Database connection failed: ${err}`)
    }
}

export const initServer = () =>{
    const app = express()
    try{
        configs(app)
        conectarDB()
        routes(app)
        app.listen(process.env.PORT)
        console.log(`Server running on port: ${process.env.PORT}`)
    }catch(err){
        console.log(`Server init failed: ${err}`)
    }
}