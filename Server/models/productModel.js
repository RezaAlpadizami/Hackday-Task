import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Product = db.define(
  "products",
  {
    title: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.TEXT,
    },
  },
  { freezeTableName: true }
);

export default Product; 
