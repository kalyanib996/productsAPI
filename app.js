const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

const dbConnection = require("./db/connect");
const products_routes = require("./routes/products");

const Product = require("./models/product");
const productData = require("./models/products.json");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Liveee");
});

app.use("/api/products", products_routes);

const start = async () => {
  try {
    await dbConnection();

    console.log("DB connected!");

    const productCount = await Product.countDocuments();

    console.log(`Current product count: ${productCount}`);

    if (productCount === 0) {
      const insertedProducts = await Product.insertMany(productData);

      console.log(
        `${insertedProducts.length} products successfully added to MongoDB`
      );
    } else {
      console.log("Products already exist. Skipping seed.");
    }

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Listening on port ${PORT}`);
    });
  } catch (error) {
    console.error("Something went wrong:", error);
    process.exit(1);
  }
};

start();
