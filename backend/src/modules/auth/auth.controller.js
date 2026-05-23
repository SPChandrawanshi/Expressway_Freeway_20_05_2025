const authService = require('./auth.service');
const response = require('../../utils/response');

class AuthController {
  async register(req, res, next) {
    try {
      const user = await authService.register(req.body);
      return response.success(res, 'User created successfully under Command Center.', user, 201);
    } catch (error) {
      next(error);
    }
  }

  async login(req, res, next) {
    try {
      const { employeeId, password } = req.body;
      const result = await authService.login(employeeId, password);

      const cookieOptions = {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 Days
      };

      res.cookie('refreshToken', result.refreshToken, cookieOptions);

      return response.success(res, 'Authenticated successfully. Session loaded.', {
        user: result.user,
        accessToken: result.accessToken
      });
    } catch (error) {
      next(error);
    }
  }

  async refreshToken(req, res, next) {
    try {
      const token = req.cookies.refreshToken || req.body.refreshToken;
      if (!token) {
        return response.error(res, 'Refresh token is required.', 'REFRESH_TOKEN_REQUIRED', 400);
      }

      const result = await authService.refreshToken(token);
      return response.success(res, 'Session token refreshed.', result);
    } catch (error) {
      next(error);
    }
  }

  async logout(req, res, next) {
    try {
      res.clearCookie('refreshToken');
      return response.success(res, 'Logged out successfully from Command Center session.');
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AuthController();
