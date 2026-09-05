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

app.get("/", (req, res) => {
  res.send("Liveee");
});

// middleware
app.use("/api/products", products_routes);

const start = async () => {
  try {
    await dbConnection();
    console.log("DB connected!");

    // Seed products only when the collection is empty
    const productCount = await Product.countDocuments();

    if (productCount === 0) {
      await Product.insertMany(productData);
      console.log(`${productData.length} products added to database`);
    } else {
      console.log(`Products already exist: ${productCount}`);
    }

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(`something went wrong ${error}`);
  }
};

start();
