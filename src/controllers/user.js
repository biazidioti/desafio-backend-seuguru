const userService = require('../services/user');

const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  const result = await userService.createUser(username, email, password);

  return res.status(200).json({ message: 'User created'});
};

module.exports = { createUser };
