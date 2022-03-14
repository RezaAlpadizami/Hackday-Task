// import express from "express"
// import { body } from "express-validator";
// import register from "../controllers/registerController.js";
// import login from "../controllers/loginController.js";
// import getUser from "../controllers/getUserController.js";

// const routerUser = express.Router();

// routerUser.post(
//   "/register",
//   [
//     body("name", "The name must be of minimum 3 characters length")
//       .notEmpty()
//       .escape()
//       .trim()
//       .isLength({ min: 3 }),
//     body("email", "Invalid email address").notEmpty().escape().trim().isEmail(),
//     body("password", "The Password must be of minimum 4 characters length")
//       .notEmpty()
//       .trim()
//       .isLength({ min: 4 }),
//   ],
//   register
// );

// routerUser.post(
//   "/login",
//   [
//     body("email", "Invalid email address").notEmpty().escape().trim().isEmail(),
//     body("password", "The Password must be of minimum 4 characters length")
//       .notEmpty()
//       .trim()
//       .isLength({ min: 4 }),
//   ],
//   login
// );

// routerUser.get("/getUser", getUser);

// // module.exports = router;

// export default routerUser;
