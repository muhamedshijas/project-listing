import express from 'express'
import cors from 'cors'
import path from 'path'
import cookieParser from 'cookie-parser';
import dbConnect from './config/dbConnect.js';

const app= express()
app.use(cookieParser());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static(path.resolve()+"/public"))
app.use(
  cors({
    origin: [
      "http://localhost:3000", 
    ],
    credentials: true,
  })
);
app.get('/getProduct',(req,res)=>{
  console.log("hiii") 
})
dbConnect() 
app.listen(5000,()=>{
    console.log("app running on port 5000");
})