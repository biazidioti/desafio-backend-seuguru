const { string } = require('joi');
const app = require('../API/app');
require('dotenv').config();

app.listen(process.env.PORT, () => console.log(`Rodando na porta ${process.env.PORT}`));
