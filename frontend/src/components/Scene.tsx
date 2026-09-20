import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Sky, ContactShadows } from '@react-three/drei';
import { Office } from './Office';
import { useOfficeStore } from '../store/officeStore';

export const Scene: React.FC = () => {
  const offices = useOfficeStore((state) => state.offices);

  return (
    <Canvas shadows>
      <PerspectiveCamera
        makeDefault
        position={[15, 15, 15]}
        fov={45}
      />
      <OrbitControls
        enablePan={false}
        maxPolarAngle={Math.PI / 3}
        minPolarAngle={Math.PI / 4}
      />

      <Sky sunPosition={[100, 20, 100]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <spotLight position={[0, 20, 0]} angle={0.3} penumbra={1} intensity={2} castShadow />

      <Suspense fallback={null}>
        <group position={[0, -1, 0]}>
          {Object.values(offices).map((office) => (
            <Office key={office.id} officeId={office.id} />
          ))}
        </group>
        <ContactShadows
          opacity={0.4}
          scale={20}
          blur={2}
          far={4.5}
        />
      </Suspense>
    </Canvas>
  );
};
