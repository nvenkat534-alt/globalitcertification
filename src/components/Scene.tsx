"use client";

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Box } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShape = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.1;
      ringRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
      {/* Central Abstract Core */}
      <Sphere ref={meshRef} args={[1.5, 64, 64]} scale={1.2}>
        <MeshDistortMaterial 
          color="#4f46e5" 
          attach="material" 
          distort={0.4} 
          speed={2} 
          roughness={0.2}
          metalness={0.8}
          wireframe={false}
        />
      </Sphere>

      {/* Orbiting Tech Elements */}
      <group ref={ringRef}>
        <Box args={[0.4, 0.4, 0.4]} position={[3, 0, 0]}>
          <meshStandardMaterial color="#818cf8" metalness={0.5} roughness={0.2} />
        </Box>
        <Box args={[0.3, 0.3, 0.3]} position={[-2.5, 1.5, 1]}>
          <meshStandardMaterial color="#0f172a" metalness={0.8} roughness={0.1} />
        </Box>
        <Sphere args={[0.2, 32, 32]} position={[0, -3, 1]}>
          <meshStandardMaterial color="#818cf8" emissive="#818cf8" emissiveIntensity={0.5} />
        </Sphere>
      </group>
    </Float>
  );
};

export default function Scene() {
  return (
    <div className="absolute inset-0 z-0 opacity-80 md:opacity-100">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#818cf8" />
        <spotLight position={[0, 5, 10]} penumbra={1} intensity={1} color="#4f46e5" />
        <FloatingShape />
      </Canvas>
    </div>
  );
}
