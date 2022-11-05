const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const router = require('../router');
const swaggerDocument = require('../../swagger.json');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/', router);

module.exports = app;
