const { Users } = require("../../models");

const manage = async (film, user) => {
  const operator = film.add ? "$push" : "$pull";

  const { nModified } = await Users.updateOne({
    _id: user.id,
  }, {
    [operator]: {
      favorites: film.filmId,
    },
  });

  return {
    ok: !!nModified,
  };
};

module.exports = {
  manage,
};