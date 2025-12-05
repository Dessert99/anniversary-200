// src/components/sections/StorySection.tsx
"use client";

import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function StorySection() {
  return (
    <div className="w-full bg-black py-20 relative">
      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {/* 제목 */}
          <div className="mb-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Our Story 📖
            </h2>
            <p className="text-gray-400 mt-4 text-lg">
              우리가 함께 걸어온 시간들
            </p>
          </div>

          {/* 스토리 목록 반복 */}
          {stories.map((item, index) => (
            <div key={index} className="mb-24 relative">
              {/* 왼쪽 날짜 뱃지 */}
              <div className="absolute -left-4 top-2 w-4 h-4 rounded-full bg-purple-500 blur-sm" />
              <h3 className="text-2xl font-bold text-purple-400 mb-2 pl-4">
                {item.date}
              </h3>

              {/* 3D 카드 컴포넌트 */}
              <CardContainer className="inter-var w-full">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  {/* 카드 제목 */}
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    {item.title}
                  </CardItem>

                  {/* 카드 설명 */}
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {item.description}
                  </CardItem>

                  {/* 카드 이미지 */}
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src={item.image}
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>

                  {/* 버튼 같은 장식 (옵션) */}
                  <div className="flex justify-between items-center mt-10">
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      기억나? →
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
}

// 📝 여기에 너희의 이야기를 채워넣으면 돼!
const stories = [
  {
    title: "우리의 첫 만남",
    date: "2025.XX.XX",
    description: "처음 만났던 카페, 기억나? 엄청 떨렸었는데...",
    image:
      "https://images.unsplash.com/photo-1516664923483-3765f025076e?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "첫 번째 데이트",
    date: "2025.XX.XX",
    description: "한강 공원에서 라면 먹고 산책했던 날.",
    image:
      "https://images.unsplash.com/photo-1542662565-7e4b66b5adaa?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "100일 기념일",
    date: "2025.XX.XX",
    description: "서로 편지 써주고 케이크 불었던 날! 감동이었어.",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "제주도 여행",
    date: "2025.XX.XX",
    description: "비행기 타고 슝~ 바다 색깔 너무 예뻤지?",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop",
  },
];
