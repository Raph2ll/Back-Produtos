const { ObjectId } = require('mongodb');
const connection = require('./connection');

const remove = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  await (await connection())
    .collection('Products').deleteOne({ _id: ObjectId(id) });

  return {
    _id: id,
  };
};

module.exports = remove;
