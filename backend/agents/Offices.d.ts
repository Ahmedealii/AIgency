import { OfficeAgent } from '../core/OfficeAgent';
import { AgentResponse } from '../interfaces/types';
export declare class CodingOffice extends OfficeAgent {
    protected agentId: string;
    protected systemPrompt: string;
    protected processTask(payload: any): Promise<AgentResponse>;
}
export declare class DebuggingOffice extends OfficeAgent {
    protected agentId: string;
    protected systemPrompt: string;
    protected processTask(payload: any): Promise<AgentResponse>;
}
export declare class BrainstormingOffice extends OfficeAgent {
    protected agentId: string;
    protected systemPrompt: string;
    protected processTask(payload: any): Promise<AgentResponse>;
}
//# sourceMappingURL=Offices.d.ts.map