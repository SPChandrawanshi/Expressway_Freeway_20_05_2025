const { z } = require('zod');

const loginSchema = z.object({
  employeeId: z.string().min(3, 'Employee ID must be at least 3 characters.').max(20),
  password: z.string().min(6, 'Password must contain at least 6 characters.')
});

const registerSchema = z.object({
  employeeId: z.string().min(3).max(20),
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  password: z.string().min(6, 'Password must be at least 6 characters.'),
  role: z.enum([
    'SUPER_ADMIN',
    'HIGHWAY_ADMIN',
    'TOLL_MANAGER',
    'CCTV_OPERATOR',
    'TRAFFIC_OFFICER',
    'PATROL_OFFICER',
    'EMERGENCY_TEAM',
    'FINANCE_OFFICER'
  ], {
    errorMap: () => ({ message: 'Invalid employee role type.' })
  }),
  phoneNumber: z.string().optional()
});

module.exports = {
  loginSchema,
  registerSchema
};
