"use strict"

import express from 'express'
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import { dbConecction } from './mongo.js'
import authRoutes from "../src/auth/auth.routes.js"
import authRoutesT from "../src/auth/auth.routes-T.js"
import studentRoutes from "../src/student/student.routes.js"
import teacherRoutes from "../src/teacher/teacher.routes.js"
import apiLimiter from '../src/middlewares/validar-cant-peticiones.js'

const middlewares = (app) =>{
    app.use(express.urlencoded({extended: false}))
    app.use(express.json())
    app.use(cors())
    app.use(helmet())
    app.use(morgan("dev"))
    app.use(apiLimiter)
}

const routes = (app) =>{
    app.use("/studentAdministration/v1/auth", authRoutes)
    app.use("/studentAdministration/v1/authT", authRoutesT)

    app.use("/studentAdministration/v1/student", studentRoutes)
    app.use("/studentAdministration/v1/teacher", teacherRoutes)
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
        middlewares(app)
        conectarDB()
        routes(app)
        app.listen(process.env.PORT)
        console.log(`Server running on port: ${process.env.PORT}`)
    }catch(err){
        console.log(`Server init failed: ${err}`)
    }
}