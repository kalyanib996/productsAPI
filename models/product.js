const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    requireed: true,
  },
  price: {
    type: Number,
    required: [true, "price needs to be provided"],
  },
  featured: {
    type: Boolean,
    default: false,
    required: [true, "featured needs to be provided"],
  },
  rating: {
    type: Number,
    required: [true, "rating needs to be provided"],
    default: 6,
  },
  company: {
    type: String,
    requireed: [true, "company needs to be provided"],
  },
  colors: {
    type: [String],
    requireed: [true, "colors needs to be provided"],
  },
  image: {
    type: String,
    requireed: true,
  },
  description: {
    type: String,
    requireed: [true, "desc needs to be provided"],
  },
  category: {
    type: String,
    requireed: [true, "category needs to be provided"],
  },
  shipping: {
    type: Boolean,
    default: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
