const express = require("express");
require("dotenv").config();
const app = express();
const PORT  = process.env.port || 5000;
const dbConnection = require("./db/connect");
const products_routes = require("./routes/products");
app.get("/", (req, res) => {
  res.send("Liveee");
});

//middleware
app.use("/api/products", products_routes);

const start = async () => {
  try {
    await dbConnection();
    console.log("DB connected!")
    app.listen(PORT ,"0.0.0.0", () => {
      console.log(`Listening on port ${PORT }`);
    });
  } catch (error) {
    console.log(`something went wrong ${error}`);
  }
};
start();
