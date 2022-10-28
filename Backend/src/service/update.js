const model = require('../model/update');
const findById = require('../model/findById');
const { notFound } = require('../middleware/error');

const update = async ({
  id, name, price, stock, description,
}) => {
  const findRecipe = await findById(id);
  if (!findRecipe) return notFound;

  const result = await model({
    id, name, price, stock, description,
  });

  return { ...result };
};

module.exports = update;
