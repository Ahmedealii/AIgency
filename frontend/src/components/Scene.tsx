import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Sky, ContactShadows, Stars, Environment } from '@react-three/drei';
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

      {/* Atmosphere */}
      <Sky sunPosition={[100, 20, 100]} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0, 0, 1} fade speed={1} />
      <Environment preset="city" />

      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} castShadow />
      <spotLight position={[0, 20, 0]} angle={0.3} penumbra={1} intensity={2} castShadow />

      <Suspense fallback={null}>
        {/* Ground Plane */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
          <planeGeometry args={[50, 50]} />
          <meshStandardMaterial
            color="#1a1a1a"
            roughness={0.8}
            metalness={0.2}
          />
        </mesh>

        <group position={[0, 0, 0]}>
          {Object.values(offices).map((office) => (
            <Office key={office.id} officeId={office.id} />
          ))}
        </group>

        <ContactShadows
          opacity={0.6}
          scale={30}
          blur={2}
          far={10}
          color="#000"
        />
      </Suspense>
    </Canvas>
  );
};
