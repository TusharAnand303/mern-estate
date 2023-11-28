import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
const PORT = 8080;

const connectDB = async() =>{
    await mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log('DB Connected')
    }).catch((error)=>{
        console.log(error)
    })
}

app.listen(PORT,()=>{
    console.log("http://localhost:8080")
    connectDB();
})