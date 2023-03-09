import express from 'express';
import { verifyToken } from '../verifyToken.js';
import {createBlog,updateBlog,deleteBlog,getBlog,getAllBlogs} from '../controllers/blog.js'

const router = express.Router();

// CREATE A BLOG
router.post('/',verifyToken,createBlog);

// GET A BLOG
router.get('/:id',getBlog);

// GET ALL BLOGS
router.get('/',getAllBlogs);

// DELETE A BLOG
router.delete('/:id',verifyToken,deleteBlog);

// UPDATE A BLOG
router.put('/:id',verifyToken,updateBlog);


export default router;