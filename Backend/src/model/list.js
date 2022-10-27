const connection = require('./connection');

const list = async () => (await connection())
  .collection('Products').find().toArray();

module.exports = list;
