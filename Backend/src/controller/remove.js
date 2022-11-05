const statusCodes = require('http-status-codes').StatusCodes;
const { invalidEntries } = require('../middleware/error');
const service = require('../service/remove');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await service(id);
    if (!result) return res.status(statusCodes.NOT_FOUND).json(invalidEntries.err);

    return res.status(statusCodes.NO_CONTENT).json(result);
  } catch (err) {
    return next(err);
  }
};
