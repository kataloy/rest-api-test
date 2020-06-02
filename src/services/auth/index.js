const api = require("./api")

module.exports = (app) => {
  app.post("/signup", async (req, res) => {
    res.json(await api.signUp(req.body));
  });

  app.post("/login", async (req, res, next) => {
    try {
      res.json(await api.login(req.body));
    } catch (err) {
      next(err)
    }
  });
};