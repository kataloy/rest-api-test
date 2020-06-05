const checkAuth = require("../../middlewares/checkAuth");
const api = require("./api");

module.exports = (router) => {
  router.get("/films", checkAuth, async (ctx) => {
    ctx.body = await api.list(ctx.state.user);
  });
};