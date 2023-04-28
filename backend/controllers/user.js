const { verifyData } = require("../middleware/auth");
const User = require("../models/user");
var nodemailer = require("nodemailer");

// register
const createUser = async (req, res) => {
  try {
    const { name, number, email, password } = req.body;
    var digits = "0123456789";
    let otp = "";
    for (let i = 0; i < 6; i++) {
      otp += digits[Math.floor(Math.random() * 10)];
    }

    const checkUserExistOrNot = await User.findOne({ email });

    if (checkUserExistOrNot) {
      res.status(400).json({ success: false, message: "User already exist." });
    } else {
      const newUser = {
        name,
        number,
        email,
        password,
        otp,
      };

      const createUser = await User.create(newUser);

      if (createUser) {
        var transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "dep7901@gmail.com",
            pass: "pnprychcocueynlj",
          },
        });

        var mailOptions = {
          from: "MGS <dep7901@gmail.com>",
          to: email,
          subject: "Sending Email using Node.js",
          text: `That was easy! - ${otp}`,
        };

        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log("EEEEEEEEEEE", error);
          } else {
            console.log("Email sent: " + info.response);
            res
              .status(201)
              .json({ success: true, message: "User Create Successfully." });
          }
        });
      } else {
        res
          .status(400)
          .json({ success: false, message: "User Create to Fail!" });
      }
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const checkPassword = await User.checkPassword(email, password);

  if (typeof checkPassword === "object") {
    return res
      .status(400)
      .json({ success: true, message: checkPassword.message });
  }

  if (checkPassword) {
    return res
      .status(200)
      .cookie("token", checkPassword, {
        maxAge: 10 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      })
      .json({ success: true, message: "Login successfully." });
  }
  return res.status(400).json({ success: true, message: "Wrong Password!" });
};

// verify
const verifyUser = async (req, res) => {
  const { email, otp } = req.body;
  const emailId = `${email}@gmail.com`;

  if (!email) {
    return req.json({ success: false, message: "some thing wait wong!" });
  }

  const userOtp = await User.findOne({ email: emailId, otp });

  if (userOtp) {
    const updateVerifyStatus = await User.findByIdAndUpdate(userOtp._id, {
      otp: "",
      verify: true,
    });

    console.log(updateVerifyStatus);
    return res.status(200).json({ success: true });
  }

  return res.status(400).json({ success: false });
};

// login or not
const checkUserLoginOrNot = (req, res) => {
  const loginUserData = verifyData(req.cookies);

  if (loginUserData) {
    return res
      .status(200)
      .json({ success: true, message: "login..", user: loginUserData });
  } else {
    return res.status(400).json({ success: false, message: "No login.." });
  }
};

module.exports = {
  createUser,
  loginUser,
  verifyUser,
  checkUserLoginOrNot,
};
