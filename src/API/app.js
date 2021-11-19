const express = require('express');
const bodyParser = require('body-parser');
const User = require('../controllers/user');

const app = express();
app.use(bodyParser.json());

app.get('/users/:id', User.getUserById);

app.post('/users', User.createUser);

module.exports = app;
