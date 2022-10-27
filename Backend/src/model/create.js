const { format } = require('date-fns');
const connection = require('./connection');

const create = async ({
  name, price, stock, description,
}) => {
  const timestamp = format(new Date(), 'dd-MM-yyy HH:mm:ss');
  const result = await (await connection())
    .collection('Products').insertOne({
      name, price, stock, description, date: timestamp,
    });
  return {
    _id: result.insertedId,
    name,
    price,
    stock,
    description,
    date: timestamp,
  };
};

module.exports = create;
