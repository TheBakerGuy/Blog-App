import User from "../models/User.js";

export const register = async (req, res) => {
  const body = req.body;
  const newUser = new User(body);
  try {
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};
