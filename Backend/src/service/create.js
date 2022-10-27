const model = require('../model/create');
const error = require('../middleware/error');

const create = async ({
  name, price, stock, description,
}) => {
  if (!name || !price || !stock || !description) return error.invalidEntries;

  const newProduct = await model({
    name, price, stock, description,
  });

  return newProduct;
};

module.exports = create;
