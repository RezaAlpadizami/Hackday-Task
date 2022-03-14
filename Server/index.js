import express from "express";
import db from "./config/database.js";
// import db_connection from "./config/dbConnection.js";
import productRoutes from "./routes/index.js";
import cors from "cors";
// import routesUsers from "./routes/routes.js";

const app = express();

try {
  await db.authenticate();
  console.log("Database Connected...");
} catch (error) {
  console.error("Connection error:", error);
}

// app.use((err, req, res, next) => {
//   // console.log(err);
//   err.statusCode = err.statusCode || 500;
//   err.message = err.message || "Internal Server Error";
//   res.status(err.statusCode).json({
//     message: err.message,
//   });
// });

app.use(cors());

app.use(express.json());

// app.use("/users", routesUsers);

app.use("/product", productRoutes);

app.listen(3001, () => console.log("server running at port 3001"));
