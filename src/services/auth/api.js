const config = require("../../config");
const { HttpError } = require("../../errors");
const md5 = require("md5");
const {createToken} = require("../../utils/token");
const {Users} = require("../../models");

const signUp = async ({ username, password }) => {
    await Users.create({
        username,
        password: md5(password),
    });

    return { ok: true };
};

const login = async ({ username, password }) => {
    const passwordHash = md5(password);

    const user = await Users.findOne({ username, password: passwordHash });

    console.log(user);

    if (!user) {
        throw new HttpError(401, "Unauthorized");
    }

    const token = await createToken({
        id: user._id,
    });

    return {token};
}

module.exports = {
    signUp,
    login,
}