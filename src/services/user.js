const userModel = require('../models/user');

const createUser = async (name, age, address, number, zipcode, email, password ) => {
  const user = await userModel.createUser(name, age, address, number, zipcode, email, password );
  return user;
};

const getUserById = async (id) => {
  const { _id, age } = await userModel.userById(id);
  return { _id, age };
};

module.exports = { 
  createUser,
  getUserById
 };
