// src/components/sections/AlbumSection.tsx
"use client";

import { ParallaxScroll } from "@/components/ui/parallax-scroll";

export function AlbumSection() {
  return (
    <div className="w-full bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 mb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          All Our Moments 📸
        </h2>
        <p className="text-gray-400 text-lg">
          놓치고 싶지 않은 우리의 모든 순간들
        </p>
      </div>

      {/* 갤러리 컴포넌트 */}
      <ParallaxScroll images={images} />
    </div>
  );
}

// 📸 사진 데이터 (나중에 public/images 폴더에 있는 파일 경로로 바꾸면 돼!)
const images = [
  "https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1434725039720-bb36506364d9?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516664923483-3765f025076e?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526772662000-3f88f107f5d8?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542662565-7e4b66b5adaa?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522383225653-ed111181a951?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1000&auto=format&fit=crop",
];
