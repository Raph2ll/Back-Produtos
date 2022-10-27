const statusCodes = require('http-status-codes').StatusCodes;
const service = require('../service/create');

module.exports = async (req, res, next) => {
  try {
    const {
      name, price, stock, description,
    } = req.body;

    const newProduct = await service({
      name, price, stock, description,
    });

    if (newProduct.err) {
      return res.status(statusCodes.BAD_REQUEST).json(newProduct.err);
    }

    return res.status(statusCodes.CREATED).json(newProduct);
  } catch (err) {
    return next(err);
  }
};
