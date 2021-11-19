const { connection } = require('../connection/connection');
var ObjectId = require('mongodb').ObjectId;

const createUser = async (name, age, address, number, zipcode, email, password) => {
  const db = await connection();
  const userCreated = await db.collection('seuGuru').insertOne({ name, age, address, number, zipcode, email, password });
  return userCreated;
};

const userById = async (id) => {
  const db = await connection();
  const userById = await db.collection('seuGuru').findOne({ _id : ObjectId(id)});
  return userById;
}
module.exports = { 
  createUser,
  userById
};
