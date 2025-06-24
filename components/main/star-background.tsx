"use client";

import { Points, PointMaterial } from "@react-three/drei";
import { Canvas, type PointsProps, useFrame } from "@react-three/fiber";
import * as random from "maath/random";
import { useState, useRef, Suspense, useMemo } from "react";
import type { Points as PointsType } from "three";

export const StarBackground = (props: PointsProps) => {
  const ref = useRef<PointsType | null>(null);
  
  // Use useMemo to prevent regeneration and add validation
  const sphere = useMemo(() => {
    const positions = random.inSphere(new Float32Array(5000), { radius: 1.2 });
    
    // Validate positions to prevent NaN values
    for (let i = 0; i < positions.length; i++) {
      if (isNaN(positions[i]) || !isFinite(positions[i])) {
        positions[i] = 0;
      }
    }
    
    return positions;
  }, []);

  useFrame((_state, delta) => {
    if (ref.current && isFinite(delta)) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        stride={3}
        positions={sphere as Float32Array}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export const StarsCanvas = () => (
  <div className="w-full h-full fixed inset-0 -z-10 overflow-hidden">
    <Canvas 
      camera={{ position: [0, 0, 1] }}
      style={{ width: '100%', height: '100%' }}
      gl={{ antialias: false, alpha: false }}
    >
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);
