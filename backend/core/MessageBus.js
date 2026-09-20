"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../interfaces/types");
const events_1 = require("events");
class MessageBus extends events_1.EventEmitter {
    static instance;
    constructor() {
        super();
        this.on('message', this.handleMessage);
    }
    static getInstance() {
        if (!MessageBus.instance) {
            MessageBus.instance = new MessageBus();
        }
        return MessageBus.instance;
    }
    send(message) {
        console.log(`[Bus] Message from ${message.from} to ${message.to}: ${JSON.stringify(message.payload)}`);
        this.emit('message', message);
    }
    handleMessage(message) {
        this.emit(`to:${message.to}`, message);
    }
    listen(agentId, callback) {
        this.on(`to:${agentId}`, callback);
    }
}
exports.default = MessageBus.getInstance();
//# sourceMappingURL=MessageBus.js.map