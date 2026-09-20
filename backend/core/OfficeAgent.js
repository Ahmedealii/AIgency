"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfficeAgent = void 0;
const MessageBus_1 = __importDefault(require("./MessageBus"));
const types_1 = require("../interfaces/types");
class OfficeAgent {
    constructor() {
        setTimeout(() => {
            MessageBus_1.default.listen(this.agentId, (msg) => this.onMessageReceived(msg));
        }, 0);
    }
    async onMessageReceived(message) {
        console.log(`[${this.agentId}] Received message from ${message.from}`);
        const response = await this.processTask(message.payload);
        MessageBus_1.default.send({
            id: Math.random().toString(36).substr(2, 9),
            from: this.agentId,
            to: message.from,
            payload: response,
            priority: 'medium',
            timestamp: Date.now(),
        });
    }
    async directAction(payload) {
        return this.processTask(payload);
    }
}
exports.OfficeAgent = OfficeAgent;
//# sourceMappingURL=OfficeAgent.js.map