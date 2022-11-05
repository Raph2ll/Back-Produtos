const Joi = require('joi');

const schemaProduct = Joi.object({
  name: Joi.string().required().not().empty(),
  price: Joi.string().required().not().empty(),
  stock: Joi.string().required().not().empty(),
  description: Joi.string().required().not().empty(),
}).messages({
  'any.empty': '{#label} is not allowed',
});

module.exports = schemaProduct;
