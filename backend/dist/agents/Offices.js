import { OfficeAgent } from '../core/OfficeAgent.js';
export class CodingOffice extends OfficeAgent {
    agentId = 'CODING_OFFICE';
    systemPrompt = 'You are the Coding Office. You implement features and write clean code.';
    async processTask(payload) {
        console.log(`[CodingOffice] Implementing: ${payload}`);
        return {
            agentId: this.agentId,
            content: `Implemented code for: ${payload}. // Logic simulated`,
            status: 'completed',
        };
    }
}
export class DebuggingOffice extends OfficeAgent {
    agentId = 'DEBUGGING_OFFICE';
    systemPrompt = 'You are the Debugging Office. You analyze logs and fix bugs.';
    async processTask(payload) {
        console.log(`[DebuggingOffice] Debugging: ${payload}`);
        return {
            agentId: this.agentId,
            content: `Fixed bug in: ${payload}. // Logic simulated`,
            status: 'completed',
        };
    }
}
export class BrainstormingOffice extends OfficeAgent {
    agentId = 'BRAINSTORMING_OFFICE';
    systemPrompt = 'You are the Brainstorming Office. You research and ideate.';
    async processTask(payload) {
        console.log(`[BrainstormingOffice] Brainstorming: ${payload}`);
        return {
            agentId: this.agentId,
            content: `Ideated solutions for: ${payload}. // Logic simulated`,
            status: 'completed',
        };
    }
}
