import Category from "../models/Category.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();

    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createCategory = async (req, res) => {
  const newCat = new Category(req.body);
  try {
    const savedCategory = await newCat.save();

    res.status(200).json(savedCategory);
  } catch (error) {
    res.status(500).json(error);
  }
};
