import Link from "next/link";
import { IntroSection } from "@/components/sections/IntroSection";
import { AlbumSection } from "@/components/sections/AlbumSection";
import { StorySection } from "@/components/sections/StorySection";

export default function StoryPage() {
  return (
    <main className="relative flex min-h-screen flex-col bg-black">
      {/* 1. 인트로 섹션만 남김 */}
      <IntroSection />
      <StorySection />
      <AlbumSection />

      {/* 2. 다음 페이지(앨범)로 가는 버튼 */}
      <div className="py-20 flex justify-center w-full bg-black z-20">
        <Link href="/special">
          <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 duration-500 hover:bg-neutral-900 border border-neutral-800">
            <div className="absolute translate-y-[150%] opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
              <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent font-bold">
                See Photo Album &rarr;
              </span>
            </div>
            <div className="flex items-center gap-2 transition group-hover:-translate-y-[150%] group-hover:opacity-0">
              <span>200일 편지 보러가기</span>
            </div>
          </button>
        </Link>
      </div>
    </main>
  );
}
