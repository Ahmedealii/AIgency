"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MessageBus_1 = __importDefault(require("./MessageBus"));
const OfficeAgent_1 = require("./OfficeAgent");
const types_1 = require("../interfaces/types");
class CEOAgent {
    agentId = 'CEO_OFFICE';
    constructor() {
        MessageBus_1.default.listen(this.agentId, (msg) => this.handleUserRequest(msg));
    }
    async handleUserRequest(message) {
        console.log(`[CEO] Processing request from ${message.from}: ${JSON.stringify(message.payload)}`);
        const payload = message.payload;
        if (typeof payload === 'object' && payload !== null) {
            console.log(`[CEO] Received report from ${message.from}: ${payload.content}`);
            return;
        }
        const task = String(payload);
        let targetOffice = 'BRAINSTORMING_OFFICE';
        if (task.toLowerCase().includes('debug') || task.toLowerCase().includes('error')) {
            targetOffice = 'DEBUGGING_OFFICE';
        }
        else if (task.toLowerCase().includes('code') || task.toLowerCase().includes('implement')) {
            targetOffice = 'CODING_OFFICE';
        }
        console.log(`[CEO] Delegating to ${targetOffice}...`);
        MessageBus_1.default.send({
            id: Math.random().toString(36).substr(2, 9),
            from: this.agentId,
            to: targetOffice,
            payload: task,
            priority: 'high',
            timestamp: Date.now(),
        });
    }
    async dispatch(task) {
        MessageBus_1.default.send({
            id: Math.random().toString(36).substr(2, 9),
            from: 'USER',
            to: this.agentId,
            payload: task,
            priority: 'high',
            timestamp: Date.now(),
        });
    }
}
exports.default = new CEOAgent();
//# sourceMappingURL=CEOAgent.js.map