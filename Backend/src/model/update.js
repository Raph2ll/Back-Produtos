const { ObjectId } = require('mongodb');
const { format } = require('date-fns');
const connection = require('./connection');

const update = async ({
  id, name, price, stock, description,
}) => {
  const timestamp = format(new Date(), 'dd-MM-yyy HH:mm:ss');
  if (!ObjectId.isValid(id)) {
    return null;
  }
  await (await connection())
    .collection('Products').updateOne(
      { _id: ObjectId(id) },
      {
        $set: {
          name, price, stock, description, date: timestamp,
        },
      },
    );

  return {
    _id: id,
    name,
    price,
    stock,
    description,
    date: timestamp,
  };
};

module.exports = update;
