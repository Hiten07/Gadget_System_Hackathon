const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

// routes require
const userRoute = require("./routes/user");
const sectionRouter = require("./routes/section");

// middleware
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// routes
app.get("/api", (req, res) => {
  res
    .cookie("test", "testing", {
      maxAge: 10 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    })
    .json({ message: "Welcome on MGS" });
});
app.use("/api/user", userRoute);
app.use("/api/section", sectionRouter);

module.exports = app;
