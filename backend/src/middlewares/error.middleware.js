const response = require('../utils/response');

const errorHandler = (err, req, res, next) => {
  const statusCode = err.status || err.statusCode || 500;
  const message = err.message || 'A critical server exception occurred';
  
  if (statusCode === 500) {
    console.error('Critical Express Error stack:', err.stack);
  }

  if (err.code && err.code.startsWith('P20')) {
    return response.error(res, 'Database constraint violation.', {
      code: err.code,
      meta: err.meta
    }, 400);
  }

  return response.error(
    res,
    message,
    process.env.NODE_ENV === 'development' ? err.stack : undefined,
    statusCode
  );
};

module.exports = { errorHandler };
