const app = require("./app");
const connectDB = require("./config/mongodb.config");

connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server start on http://localhost:${process.env.PORT}`);
});
