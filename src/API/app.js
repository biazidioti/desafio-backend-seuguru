const express = require('express');
const bodyParser = require('body-parser');
const User = require('../controllers/user');

const app = express();
app.use(bodyParser.json());

app.get('/', (_request, response) => {
    response.send();
});

app.post('/', User.createUser);

module.exports = app;
