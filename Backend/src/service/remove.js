const model = require('../model/remove');

const update = async (id) => {
  const result = await model(id);

  return result;
};

module.exports = update;
