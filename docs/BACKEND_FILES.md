# Smart Expressway & Freeway Management System: Backend Architecture & Files Blueprint

This document serves as the master blueprint and reference for the Node.js + Express + PostgreSQL + Prisma ORM backend of the **Smart Expressway & Freeway Management System**.

---

## 1. Complete Request-Response Workflow

```mermaid
sequenceDiagram
    autonumber
    actor Client as Frontend Client
    participant ER as Express Router
    participant VM as Validation Middleware (Zod)
    participant AM as JWT Auth Middleware
    participant RM as Role/RBAC Middleware
    participant C as Module Controller
    participant S as Business Service
    participant R as Data Repository
    participant DB as PostgreSQL (via Prisma)
    participant RF as Response Formatter
    
    Client->>ER: HTTP Request (e.g., POST /api/v1/auth/login)
    ER->>VM: Validate inputs against Zod schema
    alt Validation Fails
        VM-->>Client: 400 Bad Request (Formatted Error)
    end
    VM->>AM: Verify JWT access token in header
    alt Token Invalid/Expired
        AM-->>Client: 401 Unauthorized
    end
    AM->>RM: Check User Role & Permissions
    alt Role Unauthorized
        RM-->>Client: 403 Forbidden
    end
    RM->>C: Invoke Controller Method
    C->>S: Call Business Logic Method
    S->>R: Request Database Operations
    R->>DB: Query Database via Prisma Client
    DB-->>R: Return Query Result
    R-->>S: Return Database Entities
    S-->>C: Return Processed Business Data
    C->>RF: Wrap in Standard Response Format
    RF-->>Client: HTTP Response (JSON)
```

---

## 2. Backend Directory Structure

```text
backend/
├── prisma/
│   ├── schema.prisma              # Prisma database models & relationships
│   └── migrations/                # Database migration history
├── src/
│   ├── config/
│   │   ├── prisma.js              # Prisma Client singleton
│   │   └── db.js                  # PostgreSQL database helper
│   ├── middlewares/
│   │   ├── auth.middleware.js     # JWT token verification
│   │   ├── role.middleware.js     # Role-based access control (RBAC)
│   │   ├── error.middleware.js    # Global error handler
│   │   ├── validation.middleware.js # Zod body validator
│   │   └── logger.middleware.js   # Request logging middleware
│   ├── utils/
│   │   ├── jwt.js                 # JWT sign and verification
│   │   ├── response.js            # Standardized API response formatter
│   │   └── pagination.js          # Helper for API list pagination
│   ├── services/
│   │   ├── socket.service.js      # Real-time WebSockets service wrapper
│   │   ├── notification.service.js # Live system notifications
│   │   ├── email.service.js       # SMTP system email alerts
│   │   ├── ai.service.js          # AI overspeed & traffic predictions
│   │   └── upload.service.js      # File & media upload service
│   ├── sockets/
│   │   ├── index.js               # Socket.io connection coordinator
│   │   ├── toll.socket.js         # Real-time toll booth alerts
│   │   ├── traffic.socket.js      # Traffic congestion broadcasts
│   │   ├── emergency.socket.js    # SOS live updates
│   │   ├── vehicle.socket.js      # Live GPS updates
│   │   └── cctv.socket.js         # CCTV camera status and incident warnings
│   ├── modules/
│   │   ├── auth/
│   │   │   ├── auth.controller.js
│   │   │   ├── auth.service.js
│   │   │   ├── auth.repository.js
│   │   │   ├── auth.validation.js
│   │   │   └── auth.routes.js
│   │   ├── users/
│   │   ├── toll/
│   │   ├── fastag/
│   │   ├── vehicles/
│   │   ├── incidents/
│   │   ├── cctv/
│   │   ├── analytics/
│   │   └── patrol/
│   ├── app.js                     # Main Express app instantiation
│   └── server.js                  # HTTP server & Socket.io initialization
├── uploads/                       # Temporary storage for uploads
├── logs/                          # System log files
├── .env                           # Environment variables configuration
├── .gitignore                     # Git ignored files
├── package.json                   # Node dependencies & npm scripts
└── README.md                      # Backend project README
```

---

## 3. Setup & Environment Configurations

### `package.json`
```json
{
  "name": "expressway-management-backend",
  "version": "1.0.0",
  "description": "Smart Expressway & Freeway Management System Backend",
  "main": "src/server.js",
  "scripts": {
    "start": "node src/server.js",
    "dev": "nodemon src/server.js",
    "prisma:generate": "prisma generate",
    "prisma:migrate": "prisma migrate dev",
    "prisma:studio": "prisma studio",
    "prisma:seed": "node prisma/seed.js"
  },
  "dependencies": {
    "@prisma/client": "^5.14.0",
    "bcryptjs": "^2.4.3",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "helmet": "^7.1.0",
    "jsonwebtoken": "^9.0.2",
    "morgan": "^1.10.0",
    "multer": "^1.4.5-lts.1",
    "pg": "^8.11.5",
    "socket.io": "^4.7.5",
    "zod": "^3.23.8"
  },
  "devDependencies": {
    "nodemon": "^3.1.0",
    "prisma": "^5.14.0"
  },
  "engines": {
    "node": ">=18.0.0"
  },
  "private": true
}
```

### `.env`
```env
# Server Configurations
PORT=5000
NODE_ENV=development
API_PREFIX=/api/v1
CLIENT_URL=http://localhost:5173

# Database Connections
DATABASE_URL="postgresql://postgres:yoursecurepassword@localhost:5432/expressway_management_db?schema=public"

# Authentication / JWT Secrets
JWT_ACCESS_SECRET="super-secret-access-token-key-change-in-production-12345!"
JWT_REFRESH_SECRET="super-secret-refresh-token-key-change-in-production-67890!"
JWT_ACCESS_EXPIRATION="15m"
JWT_REFRESH_EXPIRATION="7d"

# Socket Settings
SOCKET_PING_TIMEOUT=60000
SOCKET_PING_INTERVAL=25000

# Email configurations (optional SMTP settings)
SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=2525
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
SMTP_FROM=noreply@expressway.gov.in
```

### `.gitignore`
```gitignore
# Node dependencies
node_modules/
jspm_packages/

# Build outputs
dist/
build/

# Env and local configurations
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Log files
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# OS Files
.DS_Store
Thumbs.db

# IDEs and editors
.idea/
.vscode/
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# Uploads and temporary directory
uploads/*
!uploads/.gitkeep
```

---

## 4. Prisma Database Setup

### `prisma/schema.prisma`
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

enum Role {
  SUPER_ADMIN
  HIGHWAY_ADMIN
  TOLL_MANAGER
  CCTV_OPERATOR
  TRAFFIC_OFFICER
  PATROL_OFFICER
  EMERGENCY_TEAM
  FINANCE_OFFICER
}

enum TicketStatus {
  OPEN
  ASSIGNED
  IN_PROGRESS
  RESOLVED
  CLOSED
}

enum VehicleType {
  CAR
  LCV
  BUS
  TRUCK
  MULTI_AXLE
}

enum TransactionStatus {
  SUCCESS
  FAILED
  PENDING
  BLACKLISTED
}

model User {
  id            String       @id @default(uuid())
  employeeId    String       @unique
  name          String
  email         String       @unique
  password      String
  role          Role         @default(PATROL_OFFICER)
  isActive      Boolean      @default(true)
  phoneNumber   String?
  createdAt     DateTime     @default(now())
  updatedAt     DateTime     @updatedAt
  
  // Relations
  activityLogs  ActivityLog[]
  dispatchedTo  EmergencyRequest[] @relation("DispatcherRelation")
  assignedTasks EmergencyRequest[] @relation("ResponderRelation")
}

model ActivityLog {
  id        String   @id @default(uuid())
  userId    String
  action    String
  details   String?
  ipAddress String?
  createdAt DateTime @default(now())
  
  // Relations
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model TollBooth {
  id           String            @id @default(uuid())
  name         String
  highwayId    String
  location     String
  isActive     Boolean           @default(true)
  createdAt    DateTime          @default(now())
  updatedAt    DateTime          @updatedAt
  
  // Relations
  transactions TollTransaction[]
}

model TollTransaction {
  id            String            @id @default(uuid())
  tollBoothId   String
  fastagId      String?
  vehicleNumber String
  vehicleType   VehicleType
  amount        Float
  status        TransactionStatus @default(PENDING)
  failureReason String?
  createdAt     DateTime          @default(now())
  
  // Relations
  tollBooth     TollBooth         @relation(fields: [tollBoothId], references: [id])
  fastagVehicle FASTagVehicle?    @relation(fields: [fastagId], references: [id])
}

model FASTagVehicle {
  id            String            @id @default(uuid())
  tagId         String            @unique
  vehicleNumber String            @unique
  ownerName     String
  balance       Float             @default(0.0)
  isBlacklisted Boolean           @default(false)
  blacklistMsg  String?
  createdAt     DateTime          @default(now())
  updatedAt     DateTime          @updatedAt
  
  // Relations
  transactions  TollTransaction[]
}

model VehicleTracking {
  id            String      @id @default(uuid())
  vehicleNumber String
  speed         Float
  latitude      Float
  longitude     Float
  laneNumber    Int
  capturedAt    DateTime    @default(now())
  isOverspeed   Boolean     @default(false)
  cameraIp      String?
  
  // Relations
  challans      Challan[]
}

model Challan {
  id                String          @id @default(uuid())
  trackingId        String
  vehicleNumber     String
  fineAmount        Float
  violationType     String
  status            String          @default("PENDING") // PENDING, PAID, CANCELLED
  evidenceUrl       String?
  createdAt         DateTime        @default(now())
  
  // Relations
  tracking          VehicleTracking @relation(fields: [trackingId], references: [id])
}

model Incident {
  id             String             @id @default(uuid())
  title          String
  description    String
  severity       String             // LOW, MEDIUM, HIGH, CRITICAL
  location       String
  latitude       Float
  longitude      Float
  status         TicketStatus       @default(OPEN)
  reportedBy     String             // PUBLIC, CAMERA_AI, PATROL
  createdAt      DateTime           @default(now())
  updatedAt      DateTime           @updatedAt
  
  // Relations
  emergencies    EmergencyRequest[]
}

model EmergencyRequest {
  id            String       @id @default(uuid())
  incidentId    String
  dispatcherId  String
  responderId   String?
  responderType String       // AMBULANCE, POLICE, FIRE, PATROL
  status        TicketStatus @default(ASSIGNED)
  assignedAt    DateTime     @default(now())
  resolvedAt    DateTime?
  
  // Relations
  incident      Incident     @relation(fields: [incidentId], references: [id])
  dispatcher    User         @relation("DispatcherRelation", fields: [dispatcherId], references: [id])
  responder     User?        @relation("ResponderRelation", fields: [responderId], references: [id])
}

model CCTVCamera {
  id         String   @id @default(uuid())
  cameraName String
  location   String
  ipAddress  String   @unique
  streamUrl  String
  status     String   @default("ONLINE") // ONLINE, OFFLINE, MAINTENANCE
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt
}

model PatrolVehicle {
  id            String   @id @default(uuid())
  vehiclePlate  String   @unique
  vehicleType   String
  driverName    String
  status        String   @default("AVAILABLE") // AVAILABLE, DISPATCHED, MAINTENANCE
  latitude      Float?
  longitude     Float?
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  
  // Relations
  fuelLogs      FuelLog[]
}

model FuelLog {
  id              String        @id @default(uuid())
  patrolVehicleId String
  fuelAmount      Float
  cost            Float
  odometerReading Float
  loggedAt        DateTime      @default(now())
  
  // Relations
  vehicle         PatrolVehicle @relation(fields: [patrolVehicleId], references: [id])
}
```

---

## 5. Main Application Bootstrap Files

### `src/app.js`
```javascript
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const { errorHandler } = require('./middlewares/error.middleware');
const response = require('./utils/response');

// Import routes
const authRoutes = require('./modules/auth/auth.routes');

const app = express();

// Secure headers
app.use(helmet());

// Log requests
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

// CORS configuration
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS']
}));

// Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Static folder for uploads
app.use('/uploads', express.static('uploads'));

// Health check API
app.get('/health', (req, res) => {
  return response.success(res, 'Smart Expressway Backend is active & running.', {
    uptime: process.uptime(),
    timestamp: new Date()
  });
});

// API Routes mounting
const apiPrefix = process.env.API_PREFIX || '/api/v1';
app.use(`${apiPrefix}/auth`, authRoutes);

// 404 Route handler
app.use((req, res, next) => {
  const error = new Error(`Cannot find requested route ${req.originalUrl}`);
  error.status = 404;
  next(error);
});

// Global Error Handler
app.use(errorHandler);

module.exports = app;
```

### `src/server.js`
```javascript
require('dotenv').config();
const http = require('http');
const app = require('./app');
const prisma = require('./config/prisma');
const socketService = require('./services/socket.service');

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

// Initialize Socket.io connection
socketService.init(server);

const startServer = async () => {
  try {
    // Test Database connection
    await prisma.$connect();
    console.log('✔ Connected to PostgreSQL Database via Prisma.');

    server.listen(PORT, () => {
      console.log(`✔ Smart Expressway Command Center Server listening on http://localhost:${PORT}`);
      console.log(`✔ API Base URL: http://localhost:${PORT}${process.env.API_PREFIX || '/api/v1'}`);
    });
  } catch (error) {
    console.error('❌ Database connection failed. Unable to bootstrap application:', error);
    process.exit(1);
  }
};

// Handle server shutdown gracefully
const shutdown = async () => {
  console.log('Initiating Graceful Shutdown...');
  server.close(async () => {
    console.log('✔ HTTP server closed.');
    await prisma.$disconnect();
    console.log('✔ PostgreSQL Database connection disconnected.');
    process.exit(0);
  });

  // Force exit after 10 seconds if graceful shutdown hangs
  setTimeout(() => {
    console.error('Force shutdown initiated.');
    process.exit(1);
  }, 10000);
};

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);

startServer();
```

---

## 6. Config & Database Clients

### `src/config/prisma.js`
```javascript
const { PrismaClient } = require('@prisma/client');

// Prevents multiple client initializations in development mode (hot reloading)
const prismaClientSingleton = () => {
  return new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'info', 'warn', 'error'] : ['error']
  });
};

const globalForPrisma = globalThis;

const prisma = globalForPrisma.prismaGlobal ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prismaGlobal = prisma;
}

module.exports = prisma;
```

---

## 7. Global Core Utilities

### `src/utils/jwt.js`
```javascript
const jwt = require('jsonwebtoken');

const signAccessToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
    expiresIn: process.env.JWT_ACCESS_EXPIRATION || '15m'
  });
};

const signRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
    expiresIn: process.env.JWT_REFRESH_EXPIRATION || '7d'
  });
};

const verifyAccessToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_ACCESS_SECRET);
  } catch (error) {
    return null;
  }
};

const verifyRefreshToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_REFRESH_SECRET);
  } catch (error) {
    return null;
  }
};

module.exports = {
  signAccessToken,
  signRefreshToken,
  verifyAccessToken,
  verifyRefreshToken
};
```

### `src/utils/response.js`
```javascript
/**
 * Global standardized response class to align client-side API requests.
 */
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
```

---

## 8. Global Middlewares

### `src/middlewares/auth.middleware.js`
```javascript
const { verifyAccessToken } = require('../utils/jwt');
const response = require('../utils/response');
const prisma = require('../config/prisma');

const authMiddleware = async (req, res, next) => {
  try {
    let token = null;

    // Check for Authorization Header
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    } 
    // Check for cookie token fallback
    else if (req.cookies && req.cookies.accessToken) {
      token = req.cookies.accessToken;
    }

    if (!token) {
      return response.error(res, 'Authentication token required.', 'UNAUTHORIZED', 401);
    }

    const decoded = verifyAccessToken(token);
    if (!decoded) {
      return response.error(res, 'Authentication token is expired or invalid.', 'INVALID_TOKEN', 401);
    }

    // Check if user still exists in the database
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

    // Attach user information to request context
    req.user = user;
    next();
  } catch (error) {
    console.error('Auth Middleware Exception:', error);
    return response.error(res, 'Internal authentication failure.', error.message, 500);
  }
};

module.exports = authMiddleware;
```

### `src/middlewares/role.middleware.js`
```javascript
const response = require('../utils/response');

/**
 * Checks if the user is authorized to perform the action based on system role.
 * @param {Array<string>} allowedRoles - List of allowed roles to access this route
 */
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
```

### `src/middlewares/error.middleware.js`
```javascript
const response = require('../utils/response');

/**
 * Global Express Exception Catcher
 */
const errorHandler = (err, req, res, next) => {
  const statusCode = err.status || err.statusCode || 500;
  const message = err.message || 'A critical server exception occurred';
  
  // Log critical error traces
  if (statusCode === 500) {
    console.error('Critical Express Error stack:', err.stack);
  }

  // Format prisma engine issues gracefully
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
```

### `src/middlewares/validation.middleware.js`
```javascript
const response = require('../utils/response');

/**
 * Validates request payload against Zod Schema definition
 * @param {ZodSchema} schema - Zod validator object
 */
const validate = (schema) => {
  return async (req, res, next) => {
    try {
      // Validate and cast data safely
      req.body = await schema.parseAsync(req.body);
      next();
    } catch (error) {
      // Zod lists validation errors in an array of issues
      const formattedErrors = error.errors ? error.errors.map(err => ({
        field: err.path.join('.'),
        message: err.message
      })) : error.message;

      return response.error(res, 'Request input validation failed.', formattedErrors, 400);
    }
  };
};

module.exports = validate;
```

---

## 9. Core Auth Module Implementation Skeletons

### `src/modules/auth/auth.validation.js`
```javascript
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
```

### `src/modules/auth/auth.repository.js`
```javascript
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
```

### `src/modules/auth/auth.service.js`
```javascript
const bcrypt = require('bcryptjs');
const authRepository = require('./auth.repository');
const { signAccessToken, signRefreshToken, verifyRefreshToken } = require('../../utils/jwt');

class AuthService {
  async register(userData) {
    // Check duplication
    const existingEmployee = await authRepository.findByEmployeeId(userData.employeeId);
    if (existingEmployee) {
      throw { statusCode: 400, message: 'Employee ID already registered in Command Center database.' };
    }

    const existingEmail = await authRepository.findByEmail(userData.email);
    if (existingEmail) {
      throw { statusCode: 400, message: 'Email address is already in use.' };
    }

    // Encrypt password
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const user = await authRepository.createUser({
      ...userData,
      password: hashedPassword
    });

    // Remove password hash from response
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
```

### `src/modules/auth/auth.controller.js`
```javascript
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

      // Set cookie options for secure environments
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
```

### `src/modules/auth/auth.routes.js`
```javascript
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

// Register is restricted to Super Admin or Highway Admin for safety
router.post(
  '/register', 
  authMiddleware, 
  authorizeRoles('SUPER_ADMIN', 'HIGHWAY_ADMIN'), 
  validate(registerSchema), 
  authController.register
);

module.exports = router;
```

---

## 10. Real-time WebSocket Implementation Skeletons

### `src/services/socket.service.js`
```javascript
const { Server } = require('socket.io');

class SocketService {
  constructor() {
    this.io = null;
  }

  init(httpServer) {
    this.io = new Server(httpServer, {
      cors: {
        origin: process.env.CLIENT_URL || 'http://localhost:5173',
        methods: ['GET', 'POST'],
        credentials: true
      },
      pingTimeout: parseInt(process.env.SOCKET_PING_TIMEOUT) || 60000,
      pingInterval: parseInt(process.env.SOCKET_PING_INTERVAL) || 25000
    });

    console.log('✔ Socket.io server initialized.');

    // Socket connection router/dispatcher
    const socketHub = require('../sockets/index');
    socketHub(this.io);
  }

  /**
   * Broadcast an event to all users connected to a specific room.
   */
  toRoom(room, event, data) {
    if (this.io) {
      this.io.to(room).emit(event, data);
    }
  }

  /**
   * Broadcast a global event to all connected sockets.
   */
  emitGlobal(event, data) {
    if (this.io) {
      this.io.emit(event, data);
    }
  }
}

module.exports = new SocketService();
```

### `src/sockets/index.js`
```javascript
/**
 * Master Socket connection dispatcher
 */
const socketService = require('../services/socket.service');

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log(`🔌 Client connected to Socket instance: ${socket.id}`);

    // Join room based on user role (for restricted dashboard notifications)
    socket.on('join_session', (userData) => {
      if (userData && userData.role) {
        socket.join(userData.role);
        console.log(`🔌 User [${userData.name}] joined role room: ${userData.role}`);
      }
    });

    // Handle generic chat/room disconnects
    socket.on('disconnect', () => {
      console.log(`🔌 Client disconnected from socket connection: ${socket.id}`);
    });
  });
};
```
