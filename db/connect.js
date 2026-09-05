const mongoose = require("mongoose");
const uri = process.env.MONGODB_URI;
const connectDB = async () => {
  console.log("connecting db");
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB ;
