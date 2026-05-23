const prisma = require('../../config/prisma');

class AuthRepository {
  async findByEmployeeId(employeeId) {
    return prisma.user.findUnique({
      where: { employeeId }
    });
  }

  async findByEmail(email) {
    return prisma.user.findUnique({
      where: { email }
    });
  }

  async createUser(userData) {
    return prisma.user.create({
      data: userData
    });
  }

  async findUserById(userId) {
    return prisma.user.findUnique({
      where: { id: userId }
    });
  }
}

module.exports = new AuthRepository();
