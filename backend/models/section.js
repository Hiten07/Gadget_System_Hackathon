const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    sectionNumber: {
      type: Number,
      required: [true, "Section number is required."],
      unique: true,
    },
    brand: {
      type: String,
      required: [true, "Brand is required."],
    },
    box: [String],
  },
  { timestamps: true }
);

const Section = mongoose.model("section", sectionSchema);

module.exports = Section;
