const express = require('express');

const route = express.Router({ mergeParams: true });

route.post('/products', require('./controller/create'));
route.get('/products', require('./controller/list'));

module.exports = route;
