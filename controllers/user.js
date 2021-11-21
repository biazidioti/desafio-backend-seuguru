const userService = require('../services/user');

const createUser = async (req, res) => {
  const { name, age, address, number, zipcode, email, password  } = req.body;
  const user = { name, age, address, number, zipcode,  email, password };
  await userService.createUser(user);

  return res.status(200).json({ 
    name: user.name, 
    age: user.age, 
    address: user.address,
    number: user.number,
    zipcode: user.zipcode,
   });
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getUserById(id);
  if (!user) {
    return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    return res.status(200).json({ id: user.id, age: user.age });
}

module.exports = { createUser, getUserById };
