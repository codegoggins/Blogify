import express from 'express';
import { verifyToken } from '../verifyToken.js';
import {createBlog,updateBlog,deleteBlog,getBlog,getAllBlogs,getRandomBlogs} from '../controllers/blog.js'

const router = express.Router();

// CREATE A BLOG
router.post('/',verifyToken,createBlog);

// GET ALL BLOGS
router.get('/find/',getAllBlogs);

// GET A BLOG
router.get('/find/:id',getBlog);

// DELETE A BLOG
router.delete('/:id',verifyToken,deleteBlog);

// UPDATE A BLOG
router.put('/:id',verifyToken,updateBlog);

// GET RANDOM BLOGS
router.get('/random',getRandomBlogs);




export default router;