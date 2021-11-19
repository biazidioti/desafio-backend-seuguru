const { connection } = require('../connection/connection');

const createUser = async (username, email, password) => {
  const db = await connection();
  const userCreated = await db.collection('seuGuru').insertOne({ email, username, password });
  return userCreated.username;
};

module.exports = { 
  createUser
};
