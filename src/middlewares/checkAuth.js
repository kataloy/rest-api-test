const { verifyToken } = require("../utils/token");

module.exports = async (ctx, next) => {
  const { authorization } = ctx.headers;
  const token = authorization.replace("bearer ", "");

  try {
    ctx.state.user = await verifyToken(token);
  } catch {
    ctx.throw(401);
  }

  await next();
};