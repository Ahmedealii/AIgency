import React from 'react';
import { Scene } from './components/Scene';
import { InteractionOverlay } from './components/InteractionOverlay';

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#020205', position: 'relative', overflow: 'hidden' }}>
      <Scene />
      <InteractionOverlay />

      <div style={{
        position: 'absolute',
        bottom: '40px',
        left: '40px',
        color: 'white',
        fontFamily: 'Inter, system-ui, sans-serif',
        pointerEvents: 'none',
        textShadow: '0 2px 15px rgba(0,0,0,0.8)',
        zIndex: 10
      }}>
        <h1 style={{
          margin: 0,
          fontSize: '42px',
          fontWeight: '900',
          letterSpacing: '-2px',
          background: 'linear-gradient(to right, #fff, #aaa)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          AIgency Campus
        </h1>
        <p style={{
          margin: 0,
          opacity: 0.7,
          fontSize: '18px',
          fontWeight: '300',
          letterSpacing: '1px'
        }}>
          Autonomous Project Management Ecosystem
        </p>
      </div >
    </div>
  );
}

export default App;
