const { Users } = require("../../models");
const axios = require("axios");

const list = async (user) => {
  const [{ data }, { favorites }] = await Promise.all([
    axios.get("http://api.themoviedb.org/3/movie/popular", {
      params: {
        api_key: '802b2c4b88ea1183e50e6b285a27696e',
      },
    }),
    Users.findOne({ _id: user.id }, {
      favorites: true,
    }),
  ]);

  return data.results.map(item => ({
    ...item,
    is_favorite: favorites.includes(item.id),
  }));
};

module.exports = {
  list,
};