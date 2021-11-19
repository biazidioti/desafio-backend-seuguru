const userService = require('../services/user');

const createUser = async (req, res) => {
  const { name, age, address, number, zipcode, email, password  } = req.body;
  const result = await userService.createUser(name, age, address, number, zipcode,  email, password);

  return res.status(200).json(result);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const userById = await userService.getUserById(id);
  if (!userById) {
    return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json(userById);
}

module.exports = { createUser, getUserById };
