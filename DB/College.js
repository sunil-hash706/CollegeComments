const mongoose = require("mongoose");
const CollegeSchema = new mongoose.Schema({
  name: String,
  city: String,
  category: String,
  //   logo: Image,
  //   background: Image,
});

module.exports = mongoose.model("Colleges", CollegeSchema);
