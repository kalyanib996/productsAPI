require('dotenv').config();
const connectDB = require("./db/connect");
const Product = require("../models/Product");
const uri = process.env.MONGODB_URI;


if (!process.env.MONGODB_URI) {
    throw new Error('MONGODB_URI is not defined');
}
const productData = require("./models/products.json");
const start = async () => {
  try {
    console.log("MONGODB_URI:", process.env.MONGODB_URI);
    await connectDB(process.env.MONGODB_URI);
    console.log("connectDB call");
    await Product.create(productData);
    console.log("PRoducts created");
  } catch (error) {
    console.log("error while storing data ");
  }
};

start();
