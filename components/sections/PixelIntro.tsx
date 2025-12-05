"use client";

import React from "react";
import { motion } from "framer-motion";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";

export function PixelIntro() {
  return (
    <section className="w-full min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden relative">
      {/* 1. 중앙 텍스트 내용 (Canvas 위에 오버레이) */}
      {/* pointer-events-none을 줘서 마우스가 글자를 통과해 뒤의 픽셀 사진에 닿게 함 (중요!) */}

      <div className="z-20 text-center px-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-2xl">
          Happy 200th Day <br /> Anniversary
        </h1>
      </div>

      {/* 2. 픽셀레이트 캔버스 (사진 효과) */}
      <div className="z-10 flex items-center justify-center w-full h-full p-10">
        <PixelatedCanvas
          src="/images/me.jpeg" // 📝 여기에 너희의 베스트 커플 사진을 넣어줘! (기존 me.jpeg 사용)
          width={1000} // 사진 비율에 맞춰서 조절해줘 (예: 가로 사진이면 800x600)
          height={800}
          cellSize={4} // 픽셀 크기 (작을수록 선명함)
          dotScale={0.9}
          shape="square"
          backgroundColor="#000000" // 배경색과 맞춤
          dropoutStrength={0.1} // 랜덤하게 꺼지는 픽셀 비율
          interactive={true} // 마우스 반응 켜기
          distortionStrength={0.2} // 마우스에 반응하는 강도
          distortionRadius={200} // 반응 범위
          distortionMode="repel" // 마우스를 피하는 효과 (repel)
          followSpeed={0.2}
          jitterStrength={4}
          jitterSpeed={1}
          sampleAverage={true}
          className="rounded-xl shadow-2xl shadow-purple-500/20" // 은은한 그림자 추가
        />
      </div>

      {/* 아래로 스크롤 유도 화살표 */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 text-white/50 text-sm z-20 pointer-events-none"
      >
        ▼ Scroll Down
      </motion.div>
    </section>
  );
}
