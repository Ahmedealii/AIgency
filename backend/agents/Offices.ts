import { OfficeAgent } from '../core/OfficeAgent.js';
import { AgentResponse } from '../interfaces/types.js';

export class CodingOffice extends OfficeAgent {
  protected agentId = 'CODING_OFFICE';
  protected systemPrompt = 'You are the Coding Office. You implement features and write clean code.';

  protected async processTask(payload: any): Promise<AgentResponse> {
    console.log(`[CodingOffice] Implementing: ${payload}`);
    return {
      agentId: this.agentId,
      content: `Implemented code for: ${payload}. // Logic simulated`,
      status: 'completed',
    };
  }
}

export class DebuggingOffice extends OfficeAgent {
  protected agentId = 'DEBUGGING_OFFICE';
  protected systemPrompt = 'You are the Debugging Office. You analyze logs and fix bugs.';

  protected async processTask(payload: any): Promise<AgentResponse> {
    console.log(`[DebuggingOffice] Debugging: ${payload}`);
    return {
      agentId: this.agentId,
      content: `Fixed bug in: ${payload}. // Logic simulated`,
      status: 'completed',
    };
  }
}

export class BrainstormingOffice extends OfficeAgent {
  protected agentId = 'BRAINSTORMING_OFFICE';
  protected systemPrompt = 'You are the Brainstorming Office. You research and ideate.';

  protected async processTask(payload: any): Promise<AgentResponse> {
    console.log(`[BrainstormingOffice] Brainstorming: ${payload}`);
    return {
      agentId: this.agentId,
      content: `Ideated solutions for: ${payload}. // Logic simulated`,
      status: 'completed',
    };
  }
}
