class APIResponse {
  static success(res, message = 'Success', data = {}, statusCode = 200) {
    return res.status(statusCode).json({
      success: true,
      message,
      data,
      error: null
    });
  }

  static error(res, message = 'An error occurred', errorDetails = null, statusCode = 500) {
    return res.status(statusCode).json({
      success: false,
      message,
      data: null,
      error: errorDetails
    });
  }
}

module.exports = APIResponse;
