const statusCodes = require('http-status-codes').StatusCodes;
const { invalidEntries } = require('../middleware/error');
const findById = require('../service/findById');
const service = require('../service/update');
const schema = require('../schemas/schemaProduct');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      name, price, stock, description,
    } = req.body;

    const findId = findById(id);

    if (!findId) return res.status(statusCodes.NOT_FOUND).json(invalidEntries.err);

    const { error } = schema.validate({
      name, price, stock, description,
    });

    if (error) return res.status(statusCodes.BAD_REQUEST).json(error.message);

    const result = await service({
      id, name, price, stock, description,
    });

    return res.status(statusCodes.OK).json(result);
  } catch (err) {
    return next(err);
  }
};
