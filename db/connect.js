const mongoose = require("mongoose");
const uri = process.env.MONGODB_URI;
console.log(uri)
const connectDB = async () => {
  console.log("connecting db");
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB ;
