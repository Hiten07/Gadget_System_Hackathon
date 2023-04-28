const express = require("express");
const { getAllSection, createSection } = require("../controllers/section");
const router = express.Router();

router.route("/").post(createSection).get(getAllSection);

module.exports = router;
