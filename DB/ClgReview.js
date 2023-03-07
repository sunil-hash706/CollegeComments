const mongoose = require("mongoose");
const ReviewSchema = new mongoose.Schema({
  review: String,
  _pid: String,
  _cid: String,
  //   logo: Image,
  //   background: Image,
});

module.exports = mongoose.model("Reviews", ReviewSchema);
