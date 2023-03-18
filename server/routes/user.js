import express from 'express'
import {getUser,deleteUser,updateUser, like , dislike} from '../controllers/user.js';
import { verifyToken } from '../verifyToken.js';

const router = express.Router();

// UPDATE USER
router.put('/:id',verifyToken,updateUser);

// DELETE USER
router.delete('/:id',verifyToken,deleteUser);

// GET A USER
router.get('/:id',getUser);

// LIKE BLOG
router.put('/like/:blogId',verifyToken,like)

// DISLIKE BLOG
router.put('/dislike/:blogId',verifyToken,dislike)


export default router;