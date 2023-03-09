import express from 'express'
import {getUser,deleteUser,updateUser} from '../controllers/user.js';
import { verifyToken } from '../verifyToken.js';

const router = express.Router();

// UPDATE USER
router.put('/:id',verifyToken,updateUser);

// DELETE USER
router.delete('/:id',deleteUser);

// GET A USER
router.get('/:id',getUser);

export default router;