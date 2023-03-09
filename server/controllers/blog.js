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

}

//GET ALL BLOGS
export const getAllBlogs = async (req,res,next) => {

}

//DELETE A BLOG
export const deleteBlog = async (req,res,next) => {

}

//UPDATE A BLOG
export const updateBlog = async (req,res,next) => {

}