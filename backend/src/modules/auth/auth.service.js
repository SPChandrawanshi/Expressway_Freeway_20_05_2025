const bcrypt = require('bcryptjs');
const authRepository = require('./auth.repository');
const { signAccessToken, signRefreshToken, verifyRefreshToken } = require('../../utils/jwt');

class AuthService {
  async register(userData) {
    const existingEmployee = await authRepository.findByEmployeeId(userData.employeeId);
    if (existingEmployee) {
      throw { statusCode: 400, message: 'Employee ID already registered in Command Center database.' };
    }

    const existingEmail = await authRepository.findByEmail(userData.email);
    if (existingEmail) {
      throw { statusCode: 400, message: 'Email address is already in use.' };
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const user = await authRepository.createUser({
      ...userData,
      password: hashedPassword
    });

    delete user.password;
    return user;
  }

  async login(employeeId, password) {
    const user = await authRepository.findByEmployeeId(employeeId);
    if (!user) {
      throw { statusCode: 401, message: 'Invalid credentials. User not found.' };
    }

    if (!user.isActive) {
      throw { statusCode: 403, message: 'User account is deactivated.' };
    }

    const passwordMatches = await bcrypt.compare(password, user.password);
    if (!passwordMatches) {
      throw { statusCode: 401, message: 'Invalid credentials. Check password.' };
    }

    const tokenPayload = { id: user.id, employeeId: user.employeeId, role: user.role };
    const accessToken = signAccessToken(tokenPayload);
    const refreshToken = signRefreshToken(tokenPayload);

    delete user.password;

    return {
      user,
      accessToken,
      refreshToken
    };
  }

  async refreshToken(token) {
    const decoded = verifyRefreshToken(token);
    if (!decoded) {
      throw { statusCode: 401, message: 'Invalid or expired Refresh Token.' };
    }

    const user = await authRepository.findUserById(decoded.id);
    if (!user || !user.isActive) {
      throw { statusCode: 401, message: 'Invalid token user session.' };
    }

    const tokenPayload = { id: user.id, employeeId: user.employeeId, role: user.role };
    const accessToken = signAccessToken(tokenPayload);

    return { accessToken };
  }
}

module.exports = new AuthService();
