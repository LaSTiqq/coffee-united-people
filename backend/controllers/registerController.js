import bcrypt from "bcrypt";
import usersModel from "../models/usersModel.js";

const registerUser = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new usersModel({
      ...req.body,
      password: hash,
    });
    await newUser.save();
    res.status(201).send("Register succeed");
  } catch (error) {
    res.status(405).send(error);
  }
};

export default registerUser;
