
const Product= require("../models/product");
const getAllProducts=async(req,res)=>{
const prodData= await Product.find({category:"mobile"})
res.status(200).json({prodData})
};

const getAllProductsTesting=async(req,res)=>{
    console.log("Here")
    res.status(200).json({msg:"getAll Products testing"})
};

module.exports={getAllProducts,getAllProductsTesting }

