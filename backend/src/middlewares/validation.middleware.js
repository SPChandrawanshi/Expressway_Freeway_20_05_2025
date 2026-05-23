const response = require('../utils/response');

const validate = (schema) => {
  return async (req, res, next) => {
    try {
      req.body = await schema.parseAsync(req.body);
      next();
    } catch (error) {
      const formattedErrors = error.errors ? error.errors.map(err => ({
        field: err.path.join('.'),
        message: err.message
      })) : error.message;

      return response.error(res, 'Request input validation failed.', formattedErrors, 400);
    }
  };
};

module.exports = validate;
