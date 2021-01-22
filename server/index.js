const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
// const cors = require("cors");

const app = express();
const Port = process.env.PORT || 8080;

const MongURI =
  "mongodb+srv://admin:Godfirst@cluster0.p5fjl.mongodb.net/signup?retryWrites=true&w=majority";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// app.use(cors());
mongoose
  .connect(MongURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Mongo Connected succ"))
  .catch((err) => console.log("err"));

// Models
const { User } = require("./models/user");

app.post("/api/users/register", (req, res) => {
  const user = new User(req.body);

  user.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.json({
      success: true,
    });
  });
});

app.post("/api/users/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user)
      return res.json({
        loginSuccess: false,
        message: "Auth failed, email not found",
      });

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({ loginSuccess: false, message: "Wrong password" });

      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res.cookie("w_auth", user.token).status(200).json({
          loginSuccess: true,
        });
      });
    });
  });
});

app.get("/api/admin", (req, res) => {
  const data = {
    username: "Nii Darku",
    firstname: "Dodoo",
    age: 4,
  };

  User.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
    });
});

const port = Port || 3002;
app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
