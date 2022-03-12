import express from 'express';
import { getAllRecipes, createRecipe, updateRecipe, deleteRecipe, getRecipe } from '../controllers/recipes.js';

const router = express.Router();

router.get('/', getAllRecipes);
router.get('/:id', getRecipe);
router.post('/new', createRecipe);
router.put('/:id', updateRecipe);
router.delete('/:id/delete', deleteRecipe);

export default router; 