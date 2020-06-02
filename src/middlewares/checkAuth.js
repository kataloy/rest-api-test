const { verifyToken } = require("../utils/token");

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;
  const token = authorization.replace("bearer ", "");

  try {
    req.user = await verifyToken(token);
  } catch {
    return res.status(401).end();
  }

  return next();
};