import { Message, AgentResponse } from '../interfaces/types';
export declare abstract class OfficeAgent {
    protected abstract agentId: string;
    protected abstract systemPrompt: string;
    constructor();
    protected abstract processTask(payload: any): Promise<AgentResponse>;
    protected onMessageReceived(message: Message): Promise<void>;
    directAction(payload: any): Promise<AgentResponse>;
}
//# sourceMappingURL=OfficeAgent.d.ts.map