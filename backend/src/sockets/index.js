module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log(`🔌 Client connected to Socket instance: ${socket.id}`);

    socket.on('join_session', (userData) => {
      if (userData && userData.role) {
        socket.join(userData.role);
        console.log(`🔌 User [${userData.name}] joined role room: ${userData.role}`);
      }
    });

    socket.on('disconnect', () => {
      console.log(`🔌 Client disconnected from socket connection: ${socket.id}`);
    });
  });
};
