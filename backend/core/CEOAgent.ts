import MessageBus from './MessageBus.js';
import { OfficeAgent } from './OfficeAgent.js';
import { Message, AgentResponse } from '../interfaces/types.js';

class CEOAgent {
  private agentId = 'CEO_OFFICE';

  constructor() {
    MessageBus.listen(this.agentId, (msg: Message) => this.handleUserRequest(msg));
  }

  private async handleUserRequest(message: Message): Promise<void> {
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
    } else if (task.toLowerCase().includes('code') || task.toLowerCase().includes('implement')) {
      targetOffice = 'CODING_OFFICE';
    }

    console.log(`[CEO] Delegating to ${targetOffice}...`);

    MessageBus.send({
      id: Math.random().toString(36).substr(2, 9),
      from: this.agentId,
      to: targetOffice,
      payload: task,
      priority: 'high',
      timestamp: Date.now(),
    });
  }

  public async dispatch(task: string): Promise<void> {
    MessageBus.send({
      id: Math.random().toString(36).substr(2, 9),
      from: 'USER',
      to: this.agentId,
      payload: task,
      priority: 'high',
      timestamp: Date.now(),
    });
  }
}

export default new CEOAgent();
