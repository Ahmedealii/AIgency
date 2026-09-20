import React from 'react';
import { Float, MeshWobbleMaterial, MeshDistortMaterial, PerspectiveCamera, OrbitControls, Sky, ContactShadows, Float as FloatDrei, Text, Float as FloatDrei2 } from '@react-three/drei';
import { useOfficeStore } from '../store/officeStore';

interface OfficeProps {
  officeId: string;
}

export const Office: React.FC<OfficeProps> = ({ officeId }) => {
  const office = useOfficeStore((state) => state.offices[officeId]);
  const setActiveOffice = useOfficeStore((state) => state.setActiveOffice);
  const activeOfficeId = useOfficeStore((state) => state.activeOfficeId);

  if (!office) return null;

  const isSelected = activeOfficeId === officeId;

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group
        position={office.position}
        onClick={(e) => {
          e.stopPropagation();
          setActiveOffice(officeId);
        }}
      >
        {/* Main Building Structure */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[2.5, 3, 2.5]} />
          <meshStandardMaterial
            color={office.color}
            metalness={0.6}
            roughness={0.2}
            emissive={office.status === 'busy' ? office.color : '#000'}
            emissiveIntensity={office.status === 'busy' ? 1.5 : 0}
          />
        </mesh>

        {/* Roof Detail */}
        <mesh position={[0, 1.6, 0]}>
          <boxGeometry args={[2.7, 0.2, 2.7]} />
          <meshStandardMaterial color="#333" metalness={0.8} roughness={0.1} />
        </mesh>

        {/* Windows/Detailing */}
        {[[-0.6, 0.5, 1.26], [0.6, 0.5, 1.26], [-0.6, -0.5, 1.26], [0.6, -0.5, 1.26]].map((pos, i) => (
          <mesh key={i} position={pos as [number, number, number]}>
            <planeGeometry args={[0.4, 0.4]} />
            <meshStandardMaterial
              color="#88ccff"
              emissive="#88ccff"
              emissiveIntensity={office.status === 'busy' ? 2 : 0.5}
              transparent
              opacity={0.8}
            />
          </mesh>
        ))}

        {/* Floating Label */}
        <Text
          position={[0, 2.5, 0]}
          fontSize={0.4}
          color="white"
          anchorX="center"
          anchorY="middle"
          fontWeight="bold"
        >
          {office.name}
        </Text>

        {/* Selection Highlight Ring */}
        {isSelected && (
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.51, 0]}>
            <ringGeometry args={[1.8, 2, 32]} />
            <meshBasicMaterial color={office.color} transparent opacity={0.6} side={2} />
          </mesh>
        )}
      </group>
    </Float>
  );
};
