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
  const { email } = req.body;

  if(email) {
    
  }
}

module.exports = {
  createUser,
  loginUser,
};
