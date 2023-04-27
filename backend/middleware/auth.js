const jwt = require("jsonwebtoken");

const createToken = (tokenData) => {
  if (Object.keys(tokenData).length === 0) {
    return null;
  }
  return jwt.sign(tokenData, process.env.JWT_KEY);
};

const verifyData = (token) => {
  if (token) {
    return jwt.verify(token, process.env.JWT_KEY);
  }
  return null;
};

module.exports = {
  createToken,
  verifyData,
};
