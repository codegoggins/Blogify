// AUTHENTICATION

import mongoose from 'mongoose';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';

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
export const signin = async (req,res) => {}
