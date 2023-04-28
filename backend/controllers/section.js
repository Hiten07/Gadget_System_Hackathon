const { verifyToken } = require("../middleware/auth");
const Section = require("../models/section");
const User = require("../models/user");

const createSection = async (req, res) => {
  try {
    const { sectionNumber, brand } = req.body;
    if (!sectionNumber || !brand) {
      return res
        .status(400)
        .json({ success: false, message: "Please fill all filed." });
    }
    const loginUserData = verifyToken(req.cookies);

    if (loginUserData) {
      const newSection = {
        owner: loginUserData._id,
        sectionNumber,
        brand,
      };
      const createSection = await Section.create(newSection);

      if (createSection) {
        const AddSectionInOwnerAccount = await User.findByIdAndUpdate(
          loginUserData._id,
          { $push: { section: createSection._id } }
        );

        if (AddSectionInOwnerAccount) {
          return res
            .status(200)
            .json({ success: true, message: "Section created successfully." });
        }
        return res
          .status(400)
          .json({ success: false, message: "Some thing wait wrong!" });
      }

      return res
        .status(400)
        .json({ success: false, message: "Some thing wait wrong!" });
    } else {
      res.status(400).json({ success: false, message: "first login please." });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const getAllSection = (req, res) => {
  res.status(200).json({ message: "Section Data.." });
};

module.exports = {
  createSection,
  getAllSection,
};
