import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 900 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 22;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.03;
    ref.current.rotation.x = Math.sin(t * 0.08) * 0.12;
    const pos = ref.current.geometry.attributes.position;
    for (let i = 0; i < count; i++) {
      const y = pos.getY(i);
      pos.setY(i, y + Math.sin(t * 0.6 + i) * 0.0015);
    }
    pos.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#8b7bff"
        transparent
        opacity={0.9}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function Wave() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = state.clock.getElapsedTime() * 0.02;
  });
  return (
    <mesh ref={ref} position={[0, -4.2, -4]} rotation={[-Math.PI / 2.4, 0, 0]}>
      <planeGeometry args={[30, 30, 48, 48]} />
      <meshBasicMaterial color="#2dd4bf" wireframe transparent opacity={0.07} />
    </mesh>
  );
}

function Sculpture() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = t * 0.18;
    ref.current.rotation.y = t * 0.24;
    ref.current.position.y = Math.sin(t * 0.5) * 0.35;
  });
  return (
    <mesh ref={ref} position={[3.4, 0.6, -2]}>
      <torusKnotGeometry args={[0.85, 0.26, 140, 20]} />
      <meshBasicMaterial color="#8b7bff" wireframe transparent opacity={0.5} />
    </mesh>
  );
}

function SculptureTwo() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = t * -0.12;
    ref.current.rotation.y = t * 0.16;
    ref.current.position.y = -1.4 + Math.cos(t * 0.4) * 0.3;
  });
  return (
    <mesh ref={ref} position={[-3.8, -1.4, -3]}>
      <icosahedronGeometry args={[0.7, 0]} />
      <meshBasicMaterial color="#2dd4bf" wireframe transparent opacity={0.3} />
    </mesh>
  );
}

export default function ParticleField() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }} dpr={[1, 1.75]}>
        <Particles />
        <Sculpture />
        <SculptureTwo />
        <Wave />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--ink)]" />
    </div>
  );
}
