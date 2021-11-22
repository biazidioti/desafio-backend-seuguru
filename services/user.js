const { User } = require('../models');

const createUser = async ({ name, age, address, number, zipcode, email, password }) => {
    const searchUser = await User.findOne({
        where: { email },
      });
      if (searchUser) {
        return { status: 409, message: 'User already registered' };
      } 
      await User.create({ name, age, address, number, zipcode, email, password  });
      return { status: 201, message: 'User created' };
  };
  
  const getUserById = async (id) => {
    const user = await User.findByPk(id);
    if (!user) return null;
    return user;
  }
  module.exports = { 
    createUser,
    getUserById
  };
  