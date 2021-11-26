const express = require('express');
const bodyParser = require('body-parser');
const User = require('../controllers/user');
const Simulator = require('../controllers/simulator');
const Insurance = require('../controllers/insurance');
const Coverage = require('../controllers/coverage');

const app = express();
app.use(bodyParser.json());

// Criar usuarios e autenticação (EXTRA)
app.get('/users/:id', User.getUserById);
app.post('/users', User.createUser);

// Criar um endpoint para cadastro e listagem de seuguros
app.post('/insurance', Insurance.createInsurance);
app.get('/insurance', Insurance.getInsurance);

// Criar endpoint para cadastro e listagem de cobertura
app.post('/coverage', Coverage.createCoverage);
app.get('/coverage', Coverage.getCoverage);

// Criar um endpoint para cotação de seguros.
app.post('/simulator', Simulator.simulatorCal)

module.exports = app;
