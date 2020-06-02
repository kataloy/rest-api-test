const util = require('util');
const jwt = require('jsonwebtoken');
const config = require('../config');

jwt.sign = util.promisify(jwt.sign);
jwt.verify = util.promisify(jwt.verify);

const createToken = (payload, secret = config.jwt.secret) => jwt.sign(payload, secret);
const verifyToken = (token, secret) => jwt.verify(token, secret);

module.exports = {
  createToken,
  verifyToken,
};