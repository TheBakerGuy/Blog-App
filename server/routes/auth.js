import express from 'express';
import { register, login, updateUser, getUser } from '../controllers/users.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.put('/:id', updateUser);
router.get('/:id', getUser);

export default router; 