import { Message, AgentResponse } from '../interfaces/types';
import { EventEmitter } from 'events';

class MessageBus extends EventEmitter {
  private static instance: MessageBus;

  private constructor() {
    super();
    this.on('message', this.handleMessage);
  }

  public static getInstance(): MessageBus {
    if (!MessageBus.instance) {
      MessageBus.instance = new MessageBus();
    }
    return MessageBus.instance;
  }

  public send(message: Message): void {
    console.log(`[Bus] Message from ${message.from} to ${message.to}: ${JSON.stringify(message.payload)}`);
    this.emit('message', message);
  }

  private handleMessage(message: Message): void {
    this.emit(`to:${message.to}`, message);
  }

  public listen(agentId: string, callback: (message: Message) => void): void {
    this.on(`to:${agentId}`, callback);
  }
}

export default MessageBus.getInstance();
