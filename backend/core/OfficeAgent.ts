import MessageBus from './MessageBus';
import { Message, AgentResponse } from '../interfaces/types';

export abstract class OfficeAgent {
  protected abstract agentId: string;
  protected abstract systemPrompt: string;

  constructor() {
    setTimeout(() => {
        MessageBus.listen(this.agentId, (msg) => this.onMessageReceived(msg));
    }, 0);
  }

  protected abstract processTask(payload: any): Promise<AgentResponse>;

  protected async onMessageReceived(message: Message): Promise<void> {
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

  public async directAction(payload: any): Promise<AgentResponse> {
    return this.processTask(payload);
  }
}
