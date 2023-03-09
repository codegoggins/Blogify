import { createError } from "../error.js";
import User from "../models/User.js";

export const getUser = (req,res,next) => {

}

export const updateUser = async (req,res,next) => {
    if(req.params.id === req.user.id){
        try{

            const updatedUser = await User.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },{new:true});

            return res.status(200).json(updatedUser);

        }catch(err){
            next(err);
        }
    }else{
        next(createError(403,"You Can Update Only Your Account"));
    }
}

export const deleteUser = async (req,res,next) => {
    if(req.params.id === req.user.id){
           try{
               await User.findByIdAndDelete(req.params.id);
               return res.status(200).json("User Has Been Deleted");
           }catch(err){
            next(err);
           }
    }else{
        next(createError(403,"You Can Delete Only Your Account"));
    }
}