const express = require("express");
const {
  createUser,
  loginUser,
  verifyUser,
  checkUserLoginOrNot,
} = require("../controllers/user");
const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.post("/verify", verifyUser);
router.get("/loginOrNot", checkUserLoginOrNot);

module.exports = router;
