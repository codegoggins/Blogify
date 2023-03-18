import { createError } from "../error.js";
import Blog from "../models/Blog.js"

// CREATE A BLOG
export const createBlog = async (req,res,next) => {

    const blog = new Blog({
        userId:req.user.id,
        ...req.body
    });
    try{
        const saveBlog = await blog.save();
        return res.status(200).json(saveBlog);
    }catch(err){
        next(err);
    }

}

// GET A BLOG
export const getBlog = async (req,res,next) => {
    try{

        const blog = await Blog.findById(req.params.id);

        if(!blog) return next(createError(404,"Blog Not Found"));

        res.status(200).json(blog);

    }catch(err){
        next(err);
    }
}

//GET ALL BLOGS
export const getAllBlogs = async (req,res,next) => {
    try{
        const blogs = await Blog.find();
        return res.status(200).json(blogs);

    }catch(err){
        next(err);
    }
}

//DELETE A BLOG
export const deleteBlog = async (req,res,next) => {
    
    const blog = await Blog.findById(req.params.id);
    if(!blog) return next(createError(404,"Blog Not Found"));
    
    try{
        if(req.user.id == blog.userId){
            await Blog.findByIdAndDelete(req.params.id);
            return res.status(200).json("Blog Has Been Deleted");
        }else{
            return next(createError(403,"You Are Not Allowed To Delete The Blog"));
        }

    }catch(err){
        next(err);
    }
}

//UPDATE A BLOG
export const updateBlog = async (req,res,next) => {
     
    const blog = await Blog.findById(req.params.id);
    if(!blog) return next(createError(404,"Blog Not Found"));
    
    try{
        if(req.user.id == blog.userId){
            const updatedBlog = await Blog.findByIdAndUpdate(req.params.id,{
                $set:req.body,
            },{new:true});
            return res.status(200).json(updatedBlog);
        }else{
            return next(createError(403,"You Are Not Allowed To Update The Blog"));
        }
    }catch(err){
        next(err);
    }
}

// GET RANDOM BLOGS
export const getRandomBlogs = async (req,res,next) => {

    try{
        const blogs = await Blog.aggregate([{$sample:{size:10}}]);
        return res.status(200).json(blogs);
    }catch(err){
        next(err);
    }
};

// GET TRENDING BLOGS
export const getTrendingBlogs = async (req,res,next) => {

    try{
        const blogs = await Blog.find().sort({likes:-1});
        return res.status(200).json(blogs);
    }catch(err){
        next(err);
    }
};

// GET RECENT BLOGS
export const getRecentBlogs = async (req,res,next) => {
    try{
        const blogs = await Blog.find().sort({createdAt:-1});
        return res.status(200).json(blogs);
    }catch(err){
        next(err);
    }
};

