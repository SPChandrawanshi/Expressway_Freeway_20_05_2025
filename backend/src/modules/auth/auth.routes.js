const express = require('express');
const authController = require('./auth.controller');
const validate = require('../../middlewares/validation.middleware');
const { loginSchema, registerSchema } = require('./auth.validation');
const authMiddleware = require('../../middlewares/auth.middleware');
const authorizeRoles = require('../../middlewares/role.middleware');

const router = express.Router();

router.post('/login', validate(loginSchema), authController.login);
router.post('/refresh-token', authController.refreshToken);
router.post('/logout', authController.logout);

router.post(
  '/register', 
  authMiddleware, 
  authorizeRoles('SUPER_ADMIN', 'HIGHWAY_ADMIN'), 
  validate(registerSchema), 
  authController.register
);

module.exports = router;
