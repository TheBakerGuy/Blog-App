import Recipe from "../models/Recipe.js";

export const getAllRecipes = async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let recipe;
    if (username) {
      recipe = await Recipe.find({ username });
    } else if (catName) {
      recipe = await Recipe.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      recipe = await Recipe.find();
    }
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createRecipe = async (req, res) => {
  const newRecipe = new Recipe(req.body);
  try {
    const saveRecipe = await newRecipe.save();
    res.status(200).json(saveRecipe);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (recipe.username === req.body.username) {
      try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedRecipe);
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(401).json("You are not allowed to update this recipe");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (recipe.username === req.body.username) {
      try {
        await recipe.delete();
        res.status(200).json("Recipe has been deleted");
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(401).json("You are not allowed to delete this recipe");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json(error);
  }
};
