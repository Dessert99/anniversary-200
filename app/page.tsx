// "use client"는 나중에 애니메이션 들어간 컴포넌트들 안에서 쓰면 되니까 여기선 뺌
import { AlbumSection } from "@/components/sections/AlbumSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { StorySection } from "@/components/sections/StorySection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      {/* 1. 인트로 섹션 (Hero Parallax) */}
      <IntroSection />

      {/* 2. 스토리 섹션 (Tracing Beam + 3D Card) */}
      <StorySection />

      {/* 3. 앨범 섹션 (Parallax Scroll) */}
      <AlbumSection />

      {/* 4. 스페셜 섹션 (3D Interactive) */}
      <section className="w-full h-screen flex items-center justify-center relative">
        <h1 className="text-4xl font-bold text-white">
          4. Special Section (여기에 R3F 3D)
        </h1>
      </section>
    </main>
  );
}
