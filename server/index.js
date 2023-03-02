import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();
const app = express();


const connect = async () => {
    try{
        mongoose.set('strictQuery',false);
        await mongoose.connect(process.env.MONGO);
        console.log("Connected To Database")
    }catch(error){
        console.error("Failed To Connect To the database",error);
        process.exit(1);
    }
};

connect();

app.listen(8800,()=>{
    console.log("Connected");
})