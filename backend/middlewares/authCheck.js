// import usersModel from "../models/usersModel.js";

// const verifyUser = (req, res, next) => {
//   if (req.user.id === req.params.id) {
//     next();
//   } else {
//     return res.status(406).send("You are not authorized");
//   }
// };

// export const verifySessionToken = async (req, res, next) => {
//   await usersModel.findById(req.user.id);
//   if (req.user.id === req.params.id) {
//     next();
//   } else {
//     return res.status(406).send("You are not authorized");
//   }
// };
