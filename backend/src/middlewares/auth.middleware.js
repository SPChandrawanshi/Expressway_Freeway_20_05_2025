const { verifyAccessToken } = require('../utils/jwt');
const response = require('../utils/response');
const prisma = require('../config/prisma');

const authMiddleware = async (req, res, next) => {
  try {
    let token = null;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies && req.cookies.accessToken) {
      token = req.cookies.accessToken;
    }

    if (!token) {
      return response.error(res, 'Authentication token required.', 'UNAUTHORIZED', 401);
    }

    const decoded = verifyAccessToken(token);
    if (!decoded) {
      return response.error(res, 'Authentication token is expired or invalid.', 'INVALID_TOKEN', 401);
    }

    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      select: { id: true, employeeId: true, email: true, name: true, role: true, isActive: true }
    });

    if (!user) {
      return response.error(res, 'Authenticated user does not exist.', 'USER_NOT_FOUND', 401);
    }

    if (!user.isActive) {
      return response.error(res, 'Your user profile is disabled. Please contact the administrator.', 'USER_INACTIVE', 403);
    }

    req.user = user;
    next();
  } catch (error) {
    console.error('Auth Middleware Exception:', error);
    return response.error(res, 'Internal authentication failure.', error.message, 500);
  }
};

module.exports = authMiddleware;
