import bcrypt from "bcrypt";
import usersModel from "../models/usersModel.js";

const loginUser = async (req, res) => {
  try {
    const user = await usersModel.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).send("Wrong email or password");
    }

    const correctPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!correctPassword) {
      return res.status(404).send("Wrong email or password");
    }
    return res.status(200).send("Login succeed");
  } catch (error) {
    res.status(405).send(error);
  }
};

export default loginUser;
