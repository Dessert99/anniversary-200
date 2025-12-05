"use client";

import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import {
  useCursor,
  MeshReflectorMaterial,
  Image,
  Text,
  Environment,
  Html,
} from "@react-three/drei";
import { useRoute, useLocation } from "wouter";
import { easing } from "maath";
import getUuid from "uuid-by-string";

const GOLDENRATIO = 1.61803398875;

export function Gallery3D({ images }) {
  return (
    <group position={[0, -0.5, 0]}>
      <Frames images={images} />
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={80}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#050505"
          metalness={0.5}
        />
      </mesh>
      <Environment preset="city" />
    </group>
  );
}

function Frames({
  images,
  q = new THREE.Quaternion(),
  p = new THREE.Vector3(),
}) {
  const ref = useRef<THREE.Group>(null);
  const clicked = useRef<THREE.Object3D>(null);
  const [, params] = useRoute("/item/:id");
  const [, setLocation] = useLocation();

  useEffect(() => {
    // @ts-ignore
    clicked.current = ref.current.getObjectByName(params?.id);
    if (clicked.current) {
      if (clicked.current.parent) {
        clicked.current.parent.updateWorldMatrix(true, true);

        // 🔙 [요청하신 대로 원복 완료]
        // 카메라가 사진 정중앙 바로 앞(1.25)까지 다가갑니다. (가장 꽉 차고 예쁜 구도)
        clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 1.25));
        clicked.current.parent.getWorldQuaternion(q);
      }
    } else {
      p.set(0, 0, 5.5);
      q.identity();
    }
  });

  useFrame((state, dt) => {
    easing.damp3(state.camera.position, p, 0.4, dt);
    easing.dampQ(state.camera.quaternion, q, 0.4, dt);
  });

  return (
    <group
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();
        setLocation(
          clicked.current === e.object ? "/" : "/item/" + e.object.name,
        );
      }}
      onPointerMissed={() => setLocation("/")}
    >
      {images.map((props) => (
        <Frame key={props.url} {...props} />
      ))}
    </group>
  );
}

function Frame({ url, c = new THREE.Color(), title, desc, ...props }) {
  const image = useRef<any>(null);
  const frame = useRef<any>(null);
  const [, params] = useRoute("/item/:id");
  const [hovered, hover] = useState(false);
  const [rnd] = useState(() => Math.random());
  const name = getUuid(url);
  const isActive = params?.id === name;

  useCursor(hovered);
  useFrame((state, dt) => {
    if (image.current) {
      // 확대 비율 유지
      image.current.material.zoom = 1;
      easing.damp3(
        image.current.scale,
        [
          0.85 * (!isActive && hovered ? 0.85 : 1),
          0.9 * (!isActive && hovered ? 0.905 : 1),
          1,
        ],
        0.1,
        dt,
      );
    }
    if (frame.current) {
      easing.dampC(
        frame.current.material.color,
        hovered ? "orange" : "white",
        0.1,
        dt,
      );
    }
  });

  return (
    <group {...props}>
      <mesh
        name={name}
        onPointerOver={(e) => (e.stopPropagation(), hover(true))}
        onPointerOut={() => hover(false)}
        scale={[1, GOLDENRATIO, 0.05]}
        position={[0, GOLDENRATIO / 2, 0]}
      >
        <boxGeometry />
        <meshStandardMaterial
          color="#151515"
          metalness={0.5}
          roughness={0.5}
          envMapIntensity={2}
        />
        <mesh
          ref={frame}
          raycast={() => null}
          scale={[0.9, 0.93, 0.9]}
          position={[0, 0, 0.2]}
        >
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
        </mesh>
        <Image
          raycast={() => null}
          ref={image}
          position={[0, 0, 0.7]}
          url={url}
        />
      </mesh>

      <Text
        maxWidth={0.5}
        anchorX="left"
        anchorY="top"
        position={[0.55, GOLDENRATIO, 0]}
        fontSize={0.1}
      >
        {title}
      </Text>

      {/* 💌 [편지 위치 조정] */}
      {isActive && (
        <Html
          // 📍 중요: 카메라가 너무 가까우니(1.25), 편지를 너무 왼쪽(-2)에 두면 안 보입니다.
          // -0.9 정도로 설정해서 사진의 왼쪽 가장자리에 '살짝 겹치게' 배치했습니다.
          position={[-0.5, 0.1, 0]}
          transform
          scale={0.25} // [핵심] 전체를 1/4로 축소 (압축해서 보여줌 -> 선명해짐)
          distanceFactor={4}
          style={{
            transform: "translate3d(-50%, -50%, 0)", // HTML 기준점을 조정해 왼쪽 정렬 느낌 내기
          }}
        >
          <div className="w-[400px] h-[600px] bg-black p-4 rounded-lg text-white border border-gray-500">
            <p
              className="text-xl  text-white font-bold "
              style={{ whiteSpace: "pre-wrap" }}
            >
              {desc}
            </p>
          </div>
        </Html>
      )}
    </group>
  );
}
