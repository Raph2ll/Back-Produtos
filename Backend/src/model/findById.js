const { ObjectId } = require('mongodb');
const connection = require('./connection');

const findById = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const result = await (await connection())
    .collection('Products').findOne({ _id: new ObjectId(id) });
  return result;
};

module.exports = findById;
