require('dotenv').config();
const http = require('http');
const app = require('./app');
const prisma = require('./config/prisma');
const socketService = require('./services/socket.service');

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

socketService.init(server);

const startServer = async () => {
  try {
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

const shutdown = async () => {
  console.log('Initiating Graceful Shutdown...');
  server.close(async () => {
    console.log('✔ HTTP server closed.');
    await prisma.$disconnect();
    console.log('✔ PostgreSQL Database connection disconnected.');
    process.exit(0);
  });

  setTimeout(() => {
    console.error('Force shutdown initiated.');
    process.exit(1);
  }, 10000);
};

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);

startServer();
