import { create } from 'zustand';
import { io, Socket } from 'socket.io-client';

interface OfficeState {
  activeOfficeId: string | null;
  offices: {
    [id: string]: {
      id: string;
      name: string;
      position: [number, number, number];
      status: 'idle' | 'busy' | 'error';
      color: string;
    };
  };
  events: any[];
  setActiveOffice: (id: string | null) => void;
  setOfficeStatus: (id: string, status: 'idle' | 'busy' | 'error') => void;
  addEvent: (event: any) => void;
  sendUserCommand: (command: string) => void;
}

const socket: Socket = io('http://localhost:3001');

export const useOfficeStore = create<OfficeState>((set) => ({
  activeOfficeId: null,
  offices: {
    'CEO_OFFICE': {
      id: 'CEO_OFFICE',
      name: 'CEO Office',
      position: [0, 0, 0],
      status: 'idle',
      color: '#ffd700',
    },
    'CODING_OFFICE': {
      id: 'CODING_OFFICE',
      name: 'Coding Office',
      position: [5, 0, -5],
      status: 'idle',
      color: '#4caf50',
    },
    'DEBUGGING_OFFICE': {
      id: 'DEBUGGING_OFFICE',
      name: 'Debugging Office',
      position: [-5, 0, -5],
      status: 'idle',
      color: '#f44336',
    },
    'BRAINSTORMING_OFFICE': {
      id: 'BRAINSTORMING_OFFICE',
      name: 'Brainstorming Office',
      position: [0, 0, -10],
      status: 'idle',
      color: '#2196f3',
    },
  },
  events: [],
  setActiveOffice: (id) => set({ activeOfficeId: id }),
  setOfficeStatus: (id, status) =>
    set((state) => ({
      offices: {
        ...state.offices,
        [id]: { ...state.offices[id], status },
      },
    })),
  addEvent: (event) => set((state) => ({ events: [...state.events, event] })),
  sendUserCommand: (command) => {
    socket.emit('user_command', command);
  },
}));

socket.on('company_event', (event) => {
  useOfficeStore.getState().addEvent(event);

  if (event.type === 'AGENT_COMMUNICATION') {
    const { from, to } = event.payload;
    useOfficeStore.getState().setOfficeStatus(from, 'busy');
    setTimeout(() => {
      useOfficeStore.getState().setOfficeStatus(from, 'idle');
    }, 2000);
  }
});
