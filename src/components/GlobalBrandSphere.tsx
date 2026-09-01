"use client";
import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

interface Props {
  scrollYProgress?: any;
  interactive?: boolean;
}

export default function GlobalBrandSphere({ scrollYProgress, interactive = false }: Props) {
  const { viewport } = useThree();
  const groupRef = useRef<THREE.Group>(null);
  const outerSphere = useRef<THREE.Mesh>(null);
  const innerSphere = useRef<THREE.Mesh>(null);
  const scrollRef = useRef(0);

  // Track scroll if provided
  React.useEffect(() => {
    if (scrollYProgress) {
      return scrollYProgress.onChange((latest: number) => {
        scrollRef.current = latest;
      });
    }
  }, [scrollYProgress]);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // Base continuous rotation
    if (outerSphere.current && innerSphere.current) {
      outerSphere.current.rotation.y = t * 0.2;
      outerSphere.current.rotation.x = t * 0.1;
      
      innerSphere.current.rotation.y = -t * 0.15;
      
      // If scroll-linked, add rotation and scale based on scroll
      if (scrollYProgress) {
        const r = scrollRef.current;
        outerSphere.current.rotation.y += r * Math.PI * 2;
        innerSphere.current.rotation.y += r * Math.PI * 2;
        
        const bulge = 1 + Math.sin(r * Math.PI) * 0.4;
        outerSphere.current.scale.set(bulge, bulge, bulge);
        innerSphere.current.scale.set(bulge, bulge, bulge);
      }
    }

    // Interactive mouse follow applied to the ENTIRE group
    if (interactive && groupRef.current) {
      // Map pointer (-1 to 1) to a wider rotation range
      const targetX = (state.pointer.y * Math.PI); // Up/down rotation
      const targetY = (state.pointer.x * Math.PI); // Left/right rotation
      
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.05);
    }
  });

  // Calculate a fully responsive base scale based on the 3D viewport width!
  // On mobile (narrow viewport), this smoothly shrinks the object so it never overflows.
  const baseScale = Math.min(1.6, viewport.width / 3.5);

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={groupRef} scale={baseScale}>
        {/* Outer Tech Grid Sphere */}
        <mesh ref={outerSphere} castShadow receiveShadow>
          <icosahedronGeometry args={[1.2, 2]} />
          <meshStandardMaterial 
            color="#818cf8" 
            wireframe={true}
            transparent
            opacity={0.3}
          />
        </mesh>
        
        {/* Inner Core */}
        <mesh ref={innerSphere}>
          <icosahedronGeometry args={[0.9, 3]} />
          <meshStandardMaterial 
            color="#4f46e5" 
            metalness={0.8} 
            roughness={0.2}
            emissive="#312e81"
            emissiveIntensity={0.5}
          />
        </mesh>

        {/* Orbiting Particles/Satellites to represent global connections */}
        {[...Array(5)].map((_, i) => (
          <mesh 
            key={i} 
            position={[
              Math.sin((i / 5) * Math.PI * 2) * 1.5,
              Math.cos((i / 5) * Math.PI * 2) * 1.0,
              Math.sin((i / 5) * Math.PI) * 1.5
            ]}
          >
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial color="#25D366" emissive="#25D366" emissiveIntensity={0.5} />
          </mesh>
        ))}
      </group>
    </Float>
  );
}
