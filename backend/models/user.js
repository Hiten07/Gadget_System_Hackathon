const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { createToken } = require("../middleware/auth");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Full name is required."],
    },
    number: {
      type: Number,
      required: [true, "Mobile number is required."],
    },
    email: {
      type: String,
      required: [true, "Email is required."],
    },
    password: {
      type: String,
      required: [true, "Password is must."],
    },
    shopDetails: {
      shopName: {
        type: String,
        // required: [true, "Shop Name is required."],
      },
      state: {
        type: String,
        // required: [true, "State is required."],
      },
      city: {
        type: String,
        // required: [true, "City is required."],
      },
      shopNumber: String,
      address: {
        type: String,
        // required: [true, "Landmark is required."],
      },
      pinCode: {
        type: String,
        // required: [true, "Pin code is required."],
      },
    },
    section: [String],
    otp: {
      type: Number,
      required: [true, "OTP is required."],
    },
    verify: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// create hash password while register
userSchema.pre("save", async function (next) {
  const user = this;

  if (!user.isModified("password")) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// check password while login
userSchema.static("checkPassword", async function (emailID, password) {
  try {
    const loginUser = await User.findOne({ email: emailID });

    if (!loginUser) {
      return { message: "User is not exist." };
    }

    const { _id, name, mobileNumber, email, shopName } = loginUser;

    const matchPassword = await bcrypt.compare(password, loginUser.password);

    if (matchPassword) {
      const token = createToken({
        _id,
        name,
        mobileNumber,
        email,
        shopName,
      });

      return token;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
  // return checkPassword;
});

const User = mongoose.model("user", userSchema);

module.exports = User;
