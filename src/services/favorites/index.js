const checkAuth = require("../../middlewares/checkAuth");
const axios = require("axios");
const api = require("./api");

module.exports = (app) => {
  app.post("/favorites", checkAuth, async (req, res, next) => {
    res.json(await api.add(req.body, req.user));
  });
};