"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = void 0;
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const cors_1 = __importDefault(require("cors"));
const MessageBus_1 = __importDefault(require("./core/MessageBus"));
const types_1 = require("./interfaces/types");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const httpServer = (0, http_1.createServer)(app);
const io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: '*',
    },
});
exports.io = io;
MessageBus_1.default.on('message', (message) => {
    io.emit('company_event', {
        type: 'AGENT_COMMUNICATION',
        payload: message,
    });
});
io.on('connection', (socket) => {
    console.log(`[Socket] Client connected: ${socket.id}`);
    socket.on('user_command', (payload) => {
        console.log(`[Socket] User command received: ${payload}`);
        MessageBus_1.default.send({
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
//# sourceMappingURL=server.js.map