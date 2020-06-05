const checkAuth = require("../../middlewares/checkAuth");
const api = require("./api");

module.exports = (router) => {
  router.post("/favorites", checkAuth, async (ctx) => {
    ctx.body = await api.manage(ctx.request.body, ctx.state.user);
  });
};