// src/components/sections/IntroSection.tsx
"use client";

import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export function IntroSection() {
  return <HeroParallax products={products} />;
}

// 💡 여기에 들어갈 사진들을 정의하는 곳이야.
// 나중에 너희 커플 사진 경로("/images/photo1.jpg")로 바꾸면 돼!
export const products = [
  {
    title: "우리의 첫 만남",
    link: "#", // 클릭하면 이동할 곳 (없으면 #)
    thumbnail:
      "https://images.unsplash.com/photo-1516664923483-3765f025076e?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "첫 번째 여행",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1526772662000-3f88f107f5d8?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "맛있는 저녁",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "함께 본 바다",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "기념일 케이크",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "한강 산책",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1542662565-7e4b66b5adaa?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "놀이공원 데이트",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "봄날의 벚꽃",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1522383225653-ed111181a951?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "비 오는 날",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "행복한 순간",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "너랑 나",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "사랑해",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "200일 축하해",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1482869403810-77a419f18731?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "앞으로도 함께",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "영원히",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1000&auto=format&fit=crop",
  },
];
