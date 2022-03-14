// import jwt from "jsonwebtoken";
// import bcrypt from "bcryptjs";
// import validationResult from "express-validator";
// // const conn = require("../config/dbConnection").promise();
// import Users from "../models/usersModel.js";

// exports.login = async (req, res, next) => {
//   const errors = validationResult(req);

//   if (!errors.isEmpty()) {
//     return res.status(422).json({ errors: errors.array() });
//   }

//   try {
//     const [row] = await Users.execute("SELECT * FROM `users` WHERE `email`=?", [
//       req.body.email,
//     ]);

//     if (row.length === 0) {
//       return res.status(422).json({
//         message: "Invalid email address",
//       });
//     }

//     const passMatch = await bcrypt.compare(req.body.password, row[0].password);
//     if (!passMatch) {
//       return res.status(422).json({
//         message: "Incorrect password",
//       });
//     }

//     const theToken = jwt.sign({ id: row[0].id }, "the-super-strong-secrect", {
//       expiresIn: "1h",
//     });

//     return res.json({
//       token: theToken,
//     });
//   } catch (err) {
//     next(err);
//   }
// };
