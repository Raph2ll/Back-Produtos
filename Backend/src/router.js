const express = require('express');

const route = express.Router({ mergeParams: true });

route.post('/products', require('./controller/create'));
route.get('/products', require('./controller/list'));
route.get('/products/:id', require('./controller/findById'));
route.put('/products/:id', require('./controller/update'));

module.exports = route;
