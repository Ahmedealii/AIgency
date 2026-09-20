import { Message } from '../interfaces/types';
import { EventEmitter } from 'events';
declare class MessageBus extends EventEmitter {
    private static instance;
    private constructor();
    static getInstance(): MessageBus;
    send(message: Message): void;
    private handleMessage;
    listen(agentId: string, callback: (message: Message) => void): void;
}
declare const _default: MessageBus;
export default _default;
//# sourceMappingURL=MessageBus.d.ts.map