const statusCodes = require('http-status-codes').StatusCodes;
const service = require('../service/create');
const schema = require('../schemas/schemaProduct');

module.exports = async (req, res) => {
  try {
    const {
      name, price, stock, description,
    } = req.body;

    const { error } = schema.validate({
      name, price, stock, description,
    });

    if (error) return res.status(statusCodes.BAD_REQUEST).json(error.message);

    const newProduct = await service({
      name, price, stock, description,
    });

    return res.status(statusCodes.CREATED).json(newProduct);
  } catch (err) {
    return res.status(statusCodes.BAD_REQUEST).json(err);
  }
};
