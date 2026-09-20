import React from 'react';
import { Float } from '@react-three/drei';
import { Text } from '@react-three/drei';
import { useOfficeStore } from '../store/officeStore';

interface OfficeProps {
  officeId: string;
}

export const Office: React.FC<OfficeProps> = ({ officeId }) => {
  const office = useOfficeStore((state) => state.offices[officeId]);
  const setActiveOffice = useOfficeStore((state) => state.setActiveOffice);
  const activeOfficeId = useOfficeStore((state) => state.activeOfficeId);

  const isSelected = activeOfficeId === officeId;

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh
        position={office.position}
        onClick={(e) => {
          e.stopPropagation();
          setActiveOffice(officeId);
        }}
      >
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial
          color={office.color}
          emissive={office.status === 'busy' ? office.color : '#000'}
          emissiveIntensity={office.status === 'busy' ? 2 : 0}
          transparent
          opacity={0.9}
        />
        <Text
          position={[0, 1.5, 0]}
          fontSize={0.5}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {office.name}
        </Text>
      </mesh>
    </Float>
  );
};
