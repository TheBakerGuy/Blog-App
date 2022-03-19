import mongoose from 'mongoose';

const recipeSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: false
    },
    food_category: {
        type: Array,
        required: true
    },
    ingredients: {
        type: Array,
        required: true
    },
    cook_time: {
        type: String,
        required: true
    },
}, { timestamps: true });

const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;
