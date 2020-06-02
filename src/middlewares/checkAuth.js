const jwt = require("jsonwebtoken");
const config = require("../config");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  const token = authorization.replace("bearer ", "");

  try {
    req.user = jwt.verify(token, config.jwt.secret);
  } catch (err) {
    if (err instanceof jwt.JsonWebTokenError) {
      return res.status(401).end();
    }

    return res.status(400).end();
  }

  return next();
};