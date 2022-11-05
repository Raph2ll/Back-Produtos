const model = require('../model/create');

const create = async ({
  name, price, stock, description,
}) => {
  const newProduct = await model({
    name, price, stock, description,
  });

  return newProduct;
};

module.exports = create;
