const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  

  if (req.query) {
    console.log(req.query)
    const prodData = await Product.find(req.query);
    res.status(200).json({ prodData });
  }else{
  const prodData = await Product.find({});
  res.status(200).json({ prodData });
}
};



const getAllProductsTesting = async (req, res) => {
  console.log("Here");
  res.status(200).json({ msg: "getAll Products testing" });
};

module.exports = { getAllProducts, getAllProductsTesting };
