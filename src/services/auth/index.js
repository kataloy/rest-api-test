const api = require("./api")

module.exports = (router) => {
  router.post("/signup", async (ctx) => {
    ctx.body = await api.signUp(ctx.request.body);
  });

  router.post("/login", async (ctx) => {
    ctx.body = await api.login(ctx.request.body);
  });
};