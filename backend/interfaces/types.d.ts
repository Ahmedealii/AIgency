export interface Message {
    id: string;
    from: string;
    to: string;
    payload: any;
    priority: 'low' | 'medium' | 'high';
    timestamp: number;
}
export interface AgentResponse {
    agentId: string;
    content: string;
    status: 'completed' | 'error' | 'delegated';
    data?: any;
}
//# sourceMappingURL=types.d.ts.map