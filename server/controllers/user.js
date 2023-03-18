import { createError } from "../error.js";
import User from "../models/User.js";
import Blog from "../models/Blog.js"

// GET USER
export const getUser = async (req,res,next) => {
    try{

        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    }catch(err){
        next(err);
    }
}

// UPDATE USER
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

// DELETE USER
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

// LIKE A BLOG
export const like = async (req,res,next) => {
    
    const id = req.user.id;
    const blogId = req.params.blogId;
    
    try{

        await Blog.findByIdAndUpdate(blogId,{
            $addToSet:{likes:id},
            $pull:{dislikes:id}
        })
        return res.status(200).json("Blog Liked");

    }catch(err){
        next(err);
    }
}