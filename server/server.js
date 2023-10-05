import express from 'express'
import dbConnect from './config/dbConnect.js';

const app= express()
dbConnect() 
app.listen(5000,()=>{
    console.log("app running on port 5000");
})