const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database Connected Successfully..");
  } catch (error) {
    console.log("DB connection Error: ", error);
  }
};

module.exports = connectDB;
