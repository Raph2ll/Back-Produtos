const statusCodes = require('http-status-codes').StatusCodes;
const service = require('../service/update');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      name, price, stock, description,
    } = req.body;

    const result = await service({
      id, name, price, stock, description,
    });

    if (result.err) return res.status(statusCodes.NOT_FOUND).json(result.err);

    return res.status(statusCodes.OK).json(result);
  } catch (err) {
    return next(err);
  }
};
