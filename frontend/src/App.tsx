import React from 'react';
import { Scene } from './components/Scene';
import { InteractionOverlay } from './components/InteractionOverlay';

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#050505', position: 'relative', overflow: 'hidden' }}>
      <Scene />
      <InteractionOverlay />

      <div style={{
        position: 'absolute',
        bottom: '30px',
        left: '30px',
        color: 'white',
        fontFamily: 'Inter, sans-serif',
        pointerEvents: 'none',
        textShadow: '0 2px 10px rgba(0,0,0,0.5)'
      }}>
        <h1 style={{ margin: 0, fontSize: '32px', fontWeight: '800', letterSpacing: '-1px' }}>AIgency Campus</h1>
        <p style={{ margin: 0, opacity: 0.6, fontSize: '16px' }}>Autonomous Project Management Ecosystem</p>
      </div>
    </div>
  );
}

export default App;
