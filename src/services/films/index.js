const checkAuth = require("../../middlewares/checkAuth");
const axios = require("axios");

module.exports = (app) => {
  app.get("/films", checkAuth, async (req, res, next) => {
    try {
      const { data } = await axios.get("http://api.themoviedb.org/3/movie/popular", {
        params: {
          api_key: '802b2c4b88ea1183e50e6b285a27696e',
        },
      });

      res.json(data);
    } catch (err) {
      next(err);
    }
  });
};