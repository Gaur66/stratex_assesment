import express from "express";
import morgan from "morgan";
import dotenv from 'dotenv'
import connectDb from "./config/connectDB.js";
import UserRoute from './routes/userRoute.js'
import cors from 'cors'
import path from 'path'
dotenv.config()
connectDb();
const server = express()

server.use(morgan("dev"));
server.use(express.json());
server.use(cors())
server.use("/api/v1/auth", UserRoute)

if(process.env.NODE_ENV == 'production'){

server.get("/",(req,res)=>{
    server.use(express.static(path.resolve(__dirname,'frontend','build')))
    res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
})
}
console.log(process.env.PORT)
server.listen(process.env.PORT,(req)=>{
    console.log(`server is running on port ${process.env.PORT}`)
})