import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import MessageBus from './core/MessageBus';
import { Message } from './interfaces/types';

const app = express();
app.use(cors());
app.use(express.json());

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: '*',
  },
});

MessageBus.on('message', (message: Message) => {
  io.emit('company_event', {
    type: 'AGENT_COMMUNICATION',
    payload: message,
  });
});

io.on('connection', (socket) => {
  console.log(`[Socket] Client connected: ${socket.id}`);

  socket.on('user_command', (payload) => {
    console.log(`[Socket] User command received: ${payload}`);
    MessageBus.send({
      id: Math.random().toString(36).substr(2, 9),
      from: 'USER',
      to: 'CEO_OFFICE',
      payload: payload,
      priority: 'high',
      timestamp: Date.now(),
    });
  });

  socket.on('disconnect', () => {
    console.log(`[Socket] Client disconnected: ${socket.id}`);
  });
});

const PORT = process.env.PORT || 3001;
httpServer.listen(PORT, () => {
  console.log(`[Server] AIgency Backend running on port ${PORT}`);
});

export { io };
