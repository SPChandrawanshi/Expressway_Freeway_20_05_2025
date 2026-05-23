const response = require('../utils/response');

const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return response.error(res, 'Authentication required before validation of user roles.', 'UNAUTHORIZED', 401);
    }

    if (!allowedRoles.includes(req.user.role)) {
      return response.error(
        res, 
        `Access denied. Role [${req.user.role}] is unauthorized to perform this operation.`, 
        'FORBIDDEN', 
        403
      );
    }

    next();
  };
};

module.exports = authorizeRoles;
