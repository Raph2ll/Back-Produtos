const model = require('../model/update');

const update = async ({
  id, name, price, stock, description,
}) => {
  const result = await model({
    id, name, price, stock, description,
  });

  return result;
};

module.exports = update;
