const model = require('../model/remove');
const findById = require('../model/findById');
const { notFound } = require('../middleware/error');

const update = async (id) => {
  const findTask = await findById(id);
  if (!findTask) return notFound;

  const result = await model(id);

  return result;
};

module.exports = update;
