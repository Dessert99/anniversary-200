"use client";

import { HeroParallax } from "@/components/ui/hero-parallax";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import Snowfall from "react-snowfall"; // ✅ Snowfall 불러오기

export function IntroSection() {
  const [activeItem, setActiveItem] = useState<{
    title: string;
    thumbnail: string;
    desc?: string;
  } | null>(null);

  useEffect(() => {
    if (activeItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [activeItem]);

  return (
    // ✅ 1. 배경 컨테이너 추가 (새벽 밤 그라데이션 & relative 설정)
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* ✅ 2. 눈 내리는 효과 추가 (배경에 고정) */}
      <Snowfall
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0, // 다른 콘텐츠 뒤로 보내기
        }}
        snowflakeCount={300} // 눈송이 개수 (적당히)
        color="#ffffff" // 눈 색상
        opacity={[0.3, 0.7]} // 투명도 랜덤 범위 (은은하게)
        speed={[3, 4]} // 속도 랜덤 범위 (천천히)
        wind={[-0.5, 0.5]} // 살랑거리는 바람 효과
        radius={[0.5, 2.0]} // 눈송이 크기 랜덤 범위
      />

      {/* 기존 콘텐츠는 z-index를 높여서 눈 위에 표시 */}
      <div className="relative z-10">
        <HeroParallax products={products} />
      </div>

      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveItem(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-pointer"
            />

            <motion.div
              layoutId={`card-${activeItem.title}`}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[80vh] border border-white/10"
            >
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                <Image
                  src={activeItem.thumbnail}
                  alt={activeItem.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent md:hidden" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white md:hidden drop-shadow-lg">
                  {activeItem.title}
                </h3>
              </div>

              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col bg-white dark:bg-neutral-900">
                <h3 className="hidden md:block text-2xl font-bold mb-4 text-neutral-800 dark:text-white">
                  {activeItem.title}
                </h3>

                <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                  <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed whitespace-pre-wrap">
                    {activeItem.desc || "편지 내용이 없습니다."}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                  <p className="text-xs text-neutral-400 text-center">
                    From. 너의 00이가 💖
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ✅ 모든 썸네일 경로를 로컬 파일로 통일 (에러 방지)
export const products = [
  {
    title: "주머니에 손 빼!",
    link: "#",
    thumbnail: "/images/intro/48.jpeg",
  },
  {
    title: "영화보러간 날",
    link: "#",
    thumbnail: "/images/intro/49.jpeg",
  },
  {
    title: "무섭다",
    link: "#",
    thumbnail: "/images/intro/50.jpeg",
  },
  {
    title: "너무 별론데?",
    link: "#",
    thumbnail: "/images/intro/51.jpeg",
  },
  {
    title: "너무 예쁜데?",
    link: "#",
    thumbnail: "/images/intro/52.jpeg",
  },
  {
    title: "애잔한 표정",
    link: "#",
    thumbnail: "/images/intro/53.jpeg",
  },

  {
    title: "ㅋㅋㅋㅋㅋ",
    link: "#",
    thumbnail: "/images/intro/57.jpeg",
  },
  {
    title: "이거 진짜 잘 나왔다",
    link: "#",
    thumbnail: "/images/intro/58.jpeg",
  },
  {
    title: "오",
    link: "#",
    thumbnail: "/images/intro/59.jpeg",
  },
];
