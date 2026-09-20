"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrainstormingOffice = exports.DebuggingOffice = exports.CodingOffice = void 0;
const OfficeAgent_1 = require("../core/OfficeAgent");
const types_1 = require("../interfaces/types");
class CodingOffice extends OfficeAgent_1.OfficeAgent {
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
exports.CodingOffice = CodingOffice;
class DebuggingOffice extends OfficeAgent_1.OfficeAgent {
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
exports.DebuggingOffice = DebuggingOffice;
class BrainstormingOffice extends OfficeAgent_1.OfficeAgent {
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
exports.BrainstormingOffice = BrainstormingOffice;
//# sourceMappingURL=Offices.js.map