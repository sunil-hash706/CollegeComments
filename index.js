const express = require("express");
const cors = require("cors");
require("./DB/Config");
const User = require("./DB/Users");
const College = require("./DB/College");
const College = require("./DB/ClgReview");
const app = express();

app.use(express.json());
app.use(cors());
app.post("/register", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  delete result.cnfpassword;
  res.send(result);
});

app.post("/login", async (req, res) => {
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) res.send(user);
    else res.send({ result: "No user found" });
  } else if (req.body.password) res.send({ result: "Enter email address" });
  else res.send({ result: "Enter Password" });
});

app.post("/add-college", async (req, res) => {
  let college = new College(req.body);
  let result = await college.save();
  result = result.toObject();
  res.send(result);
});

app.post("Colleges/Review/:id", async (req, res) => {
  let review = new Review(req.body);
  let result = await review.save();
  result = result.toObject();
  res.send(result);
});

app.get("/colleges", async (req, res) => {
  let colleges = await College.find();
  if (colleges.length > 0) {
    res.send(colleges);
  } else {
    res.send("No college Found");
  }
});

app.get("/users", async (req, res) => {
  let users = await User.find();
  if (users.length > 0) {
    res.send(users);
  } else {
    res.send("No college Found");
  }
});

app.listen(5000);
