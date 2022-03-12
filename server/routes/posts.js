import express from 'express';
import { getAllPosts, createPost, updatePost, deletePost, getPost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getAllPosts);
router.get('/:id', getPost);
router.post('/new', createPost);
router.put('/:id', updatePost);
router.delete('/:id/delete', deletePost);

export default router; 