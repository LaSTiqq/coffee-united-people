import usersModel from "../models/usersModel.js";

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await usersModel.find({}, { password: 0 });

    res.status(202).json(allUsers);
  } catch (error) {
    res.status(405).send(error);
  }
};

export default getAllUsers;
