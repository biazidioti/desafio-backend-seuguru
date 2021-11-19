const userModel = require('../models/user');

const createUser = async (username, email, password) => {
  const users = await userModel.createUser(username, email, password);
  return users;
};

module.exports = { createUser };
