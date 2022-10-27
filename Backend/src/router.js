const express = require('express');

const route = express.Router({ mergeParams: true });

route.post('/products', require('./controller/create'));

module.exports = route;
