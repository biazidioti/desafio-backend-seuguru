const jwt = require('jsonwebtoken');
require('dotenv').config();

function newToken(user) {
const { password: _, ...payload } = user;
const jwtConfig = {
algorithm: 'HS256',
expiresIn: '1d',
};
const token = jwt.sign(payload, process.env.SECRET, jwtConfig);
return { token };
}

module.exports = { newToken };
