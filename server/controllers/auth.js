// AUTHENTICATION

import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import { createError } from '../error.js';
import jwt from 'jsonwebtoken';

// SIGN UP FUNCTION
export const signup = async (req,res,next) => {
  
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password,salt);
        const newUser = new User({...req.body,password:hash});

        await newUser.save();
        return res.status(200).send("User has been created");
    }catch(err){
       next(err);
    }
}

// SIGN IN FUNCTION
export const signin = async (req,res,next) => {

    try{
    
        const user = await User.findOne({name:req.body.name});
        if(!user) return next(createError(404,"User Not Found"));

        const check = await bcrypt.compare(req.body.password,user.password);

        if(!check) return next(createError(400,"Wrong Credentials"));

        const token = jwt.sign({id:user._id},process.env.JWT);
        const {password , ...others} = user;

        return res.cookie("access_token",token,{
            httpOnly:true
        }).status(200).json(others._doc);

    }catch(err){
        next(err);
    }
}
