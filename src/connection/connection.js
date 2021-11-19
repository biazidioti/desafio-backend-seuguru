const { MongoClient } = require('mongodb');

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// 'mongodb://127.0.0.1:27017'
// http://localhost:3000/
const MONGO_DB_URL = 'http://mongodb://127.0.0.1:27017' ;
const DB_NAME = 'seuGuru';

let db = null;

const connection = () => (db
  ? Promise.resolve(db)
  : MongoClient.connect(MONGO_DB_URL, OPTIONS)
  .then((conn) => {
  db = conn.db(DB_NAME);
  return db;
  }));

module.exports = { connection };
