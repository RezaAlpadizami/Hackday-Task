import express from "express";
// import body from"express-validator";
// import register from "../controllers/registerController.js";
// import  login  from "../controllers/loginController.js";
// import  getUser from "../controller/getUserController.js";

import {
  getAllProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/Product.js";

const router = express.Router();

// router.post(
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

// router.post(
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

// router.get("/getuser", getUser);
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
