import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'


// ROUTES IMPORT 
import userRoutes from './routes/user.js'
import blogRoutes from './routes/blog.js'


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

app.use('/api/users',userRoutes);
app.use('/api/blogs',blogRoutes);

app.listen(8800,()=>{
    connect();
    console.log("Connected");
});