import { EventEmitter } from 'events';
class MessageBus extends EventEmitter {
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
export default MessageBus.getInstance();
