"use client";

import confetti from "canvas-confetti";
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Text,
  Float,
  OrbitControls,
  Environment,
  Sparkles,
  Image as DreiImage,
} from "@react-three/drei";
import * as THREE from "three";
import Link from "next/link";

export function CakeOpening() {
  const triggerHeartConfetti = () => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 50 };
    const heartShape = confetti.shapeFromText({ text: "💖", scalar: 3 });

    const random = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const interval: NodeJS.Timeout = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 30 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        shapes: [heartShape],
        origin: { x: random(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        shapes: [heartShape],
        origin: { x: random(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  return (
    <section className="w-full h-screen bg-[#0f172a] relative overflow-hidden">
      {/* 3D 캔버스 배경 */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 2, 12], fov: 45 }} shadows>
          <color attach="background" args={["#0f172a"]} />
          <fog attach="fog" args={["#0f172a", 5, 25]} />
          <ambientLight intensity={0.4} color="#dbf4ff" />
          <spotLight
            position={[10, 10, 10]}
            angle={0.5}
            penumbra={1}
            intensity={0.8}
            castShadow
            color="#fff0d4"
          />
          <Sparkles
            count={300}
            scale={[20, 20, 10]}
            size={4}
            speed={0.4}
            opacity={0.8}
            color="#ffffff"
          />
          <SnowyGround />
          <WinterForest />
          <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
            <CakeModel />
          </Float>
          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.8}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2}
          />
          <Environment preset="park" />
        </Canvas>
      </div>

      {/* ✅ UI 레이어 수정됨 
        - div를 하나로 합쳤습니다.
        - h-full로 높이를 꽉 채우고, justify-between으로 위/아래로 벌려줍니다.
      */}
      <div className="relative z-10 flex flex-col items-center justify-between h-full py-20 pointer-events-none">
        {/* 상단: 축하 버튼 */}
        <button
          onClick={triggerHeartConfetti}
          className="pointer-events-auto px-8 py-3 bg-gradient-to-r from-red-500 to-green-600 hover:from-red-600 hover:to-green-700 text-white rounded-full font-bold text-lg transition-all animate-bounce shadow-lg shadow-green-900/50 border-2 border-white/20"
        >
          🎄 200일 축하하기! (클릭)
        </button>

        {/* 하단: 다음 페이지 이동 버튼 */}
        <div className="flex flex-col items-center gap-6 pointer-events-auto">
          <Link href="/story">
            <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950/80 backdrop-blur-sm px-6 font-medium text-neutral-200 duration-500 hover:bg-neutral-900 border border-neutral-700 shadow-xl">
              <div className="absolute translate-y-[150%] opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent font-bold">
                  Go Next Page &rarr;
                </span>
              </div>
              <div className="flex items-center gap-2 transition group-hover:-translate-y-[150%] group-hover:opacity-0">
                <span>우리의 이야기 보러가기</span>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ... (아래 SnowyGround, WinterForest, CakeModel, SimpleTree, Candle 컴포넌트는 기존과 동일하므로 그대로 두시면 됩니다)

function SnowyGround() {
  return (
    <mesh position={[0, -2.1, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="#e2e8f0" roughness={1} />
    </mesh>
  );
}

function WinterForest() {
  const trees = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      x: Math.random() * 20 - 10,
      z: Math.random() * 10 - 15,
      scale: 0.8 + Math.random() * 0.5,
    }));
  }, []);

  return (
    <group>
      {trees.map((tree, i) => (
        <SimpleTree
          key={i}
          position={[tree.x, -2, tree.z]}
          scale={tree.scale}
        />
      ))}
    </group>
  );
}

function SimpleTree({
  position,
  scale = 1,
}: {
  position: [number, number, number];
  scale?: number;
}) {
  return (
    <group position={position} scale={[scale, scale, scale]}>
      <mesh position={[0, 0.5, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.3, 1, 8]} />
        <meshStandardMaterial color="#3f2e26" />
      </mesh>
      <mesh position={[0, 1.2, 0]} castShadow>
        <coneGeometry args={[1.2, 1.5, 8]} />
        <meshStandardMaterial color="#166534" roughness={0.8} />
      </mesh>
      <mesh position={[0, 2.0, 0]} castShadow>
        <coneGeometry args={[0.9, 1.2, 8]} />
        <meshStandardMaterial color="#15803d" roughness={0.8} />
      </mesh>
      <mesh position={[0, 2.8, 0]} castShadow>
        <coneGeometry args={[0.6, 1.0, 8]} />
        <meshStandardMaterial color="#22c55e" roughness={0.8} />
      </mesh>
    </group>
  );
}

function CakeModel() {
  return (
    <group position={[0, -1.5, 0]}>
      <DreiImage
        url="/images/cake/cake.png"
        position={[0, 3, 0]}
        scale={[3, 3, 1]}
        transparent
      />

      <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[2, 2, 1, 32]} />
        <meshStandardMaterial color="#fbcfe8" roughness={0.3} />
      </mesh>

      <mesh position={[0, 1.05, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.9, 0.1, 16, 100]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      <mesh position={[0, 1.5, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.5, 1.5, 1, 32]} />
        <meshStandardMaterial color="#fce7f3" roughness={0.3} />
      </mesh>

      <group position={[0, 2, 0]}>
        {[...Array(8)].map((_, i) => (
          <mesh
            key={i}
            position={[
              1.4 * Math.cos((i * Math.PI) / 4),
              0,
              1.4 * Math.sin((i * Math.PI) / 4),
            ]}
          >
            <sphereGeometry args={[0.2, 16, 16]} />
            <meshStandardMaterial color="#ffffff" />
          </mesh>
        ))}
      </group>

      <Candle position={[1, 1.5, 0.5]} />
      <Candle position={[-1, 1.5, 0.5]} />

      <Text
        position={[0, 1.5, 2]}
        fontSize={1}
        color="#fbbf24"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.05}
        outlineColor="#b45309"
      >
        200 Days!
      </Text>
    </group>
  );
}

function Candle({ position }: { position: [number, number, number] }) {
  const flame = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (flame.current) {
      flame.current.scale.y = 1 + Math.sin(clock.elapsedTime * 10) * 0.1;
      flame.current.scale.x = 1 + Math.sin(clock.elapsedTime * 15) * 0.05;
    }
  });

  return (
    <group position={position}>
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 1, 16]} />
        <meshStandardMaterial color="#60a5fa" />
      </mesh>

      <mesh position={[0, 1.05, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.1, 8]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      <mesh ref={flame} position={[0, 1.25, 0]}>
        <coneGeometry args={[0.1, 0.3, 16]} />
        <meshStandardMaterial
          color="#ff5722"
          emissive="#ffbf00"
          emissiveIntensity={2}
          toneMapped={false}
        />
      </mesh>

      <pointLight
        position={[0, 1.2, 0]}
        intensity={1.5}
        color="#ffaa00"
        distance={3}
        decay={2}
      />
    </group>
  );
}
