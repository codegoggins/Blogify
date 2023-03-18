import express from 'express'
import {getUser,deleteUser,updateUser, like} from '../controllers/user.js';
import { verifyToken } from '../verifyToken.js';

const router = express.Router();

// UPDATE USER
router.put('/:id',verifyToken,updateUser);

// DELETE USER
router.delete('/:id',verifyToken,deleteUser);

// GET A USER
router.get('/:id',getUser);

// LIKE BLOG
router.put('/like/:blogId',like)

export default router;