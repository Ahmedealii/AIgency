import MessageBus from './MessageBus.js';
export class OfficeAgent {
    constructor() {
        setTimeout(() => {
            MessageBus.listen(this.agentId, (msg) => this.onMessageReceived(msg));
        }, 0);
    }
    async onMessageReceived(message) {
        console.log(`[${this.agentId}] Received message from ${message.from}`);
        const response = await this.processTask(message.payload);
        MessageBus.send({
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
