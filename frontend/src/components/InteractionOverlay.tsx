import React from 'react';
import { useOfficeStore } from '../store/officeStore';

export const InteractionOverlay: React.FC = () => {
  const activeOffice = useOfficeStore((state) => {
    const id = state.activeOfficeId;
    return id ? state.offices[id] : null;
  });
  const events = useOfficeStore((state) => state.events);
  const sendUserCommand = useOfficeStore((state) => state.sendUserCommand);
  const [input, setInput] = React.useState('');

  const relevantEvents = events.filter(
    (e) => e.payload?.from === activeOffice?.id || e.payload?.to === activeOffice?.id
  ).slice(-10);

  if (!activeOffice) return null;

  return (
    <div style={{
      position: 'absolute',
      top: '20px',
      right: '20px',
      width: '350px',
      height: '500px',
      background: 'rgba(15, 15, 15, 0.9)',
      backdropFilter: 'blur(10px)',
      color: 'white',
      padding: '20px',
      borderRadius: '20px',
      border: `2px solid ${activeOffice.color}`,
      fontFamily: 'Inter, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.8)',
      zIndex: 100,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0, fontSize: '20px' }}>{activeOffice.name}</h2>
        <span style={{
          fontSize: '12px',
          padding: '4px 8px',
          borderRadius: '10px',
          background: activeOffice.color,
          color: 'black',
          fontWeight: 'bold'
        }}>
          {activeOffice.status.toUpperCase()}
        </span>
      </div >

      <div style={{
        flex: 1,
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '10px',
        padding: '15px',
        overflowY: 'auto',
        fontSize: '14px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}>
        {relevantEvents.length === 0 && (
          <p style={{ color: '#888', textAlign: 'center', marginTop: '20px' }}>
            No active communications.
          </p>
        )}
        {relevantEvents.map((e, i) => (
          <div key={i} style={{
            padding: '8px',
            borderRadius: '8px',
            background: e.payload?.from === activeOffice.id ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.1)',
            fontSize: '13px',
            borderLeft: `3px solid ${e.payload?.from === activeOffice.id ? activeOffice.color : '#fff'}`
          }}>
            <strong style={{ color: e.payload?.from === activeOffice.id ? activeOffice.color : '#fff' }}>
              {e.payload?.from}:
            </strong> {JSON.stringify(e.payload?.payload)}
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '10px' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && input) {
              sendUserCommand(input);
              setInput('');
            }
          }}
          placeholder="Command office..."
          style={{
            flex: 1,
            background: '#222',
            border: '1px solid #444',
            color: 'white',
            padding: '10px',
            borderRadius: '10px',
            outline: 'none'
          }}
        />
        <button
          onClick={() => {
            if (input) {
              sendUserCommand(input);
              setInput('');
            }
          }}
          style={{
            background: activeOffice.color,
            color: 'black',
            border: 'none',
            padding: '10px 15px',
            borderRadius: '10px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};
