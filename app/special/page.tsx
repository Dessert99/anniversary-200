import Link from "next/link";
import { SpecialSection } from "@/components/sections/SpecialSection";

export default function SpecialPage() {
  return (
    <main className="relative w-full h-screen bg-[#191920]">
      {/* 3D 스페셜 섹션 (화면 꽉 차게) */}
      <SpecialSection />

      {/* (선택사항) 처음으로 돌아가는 버튼 - 우측 하단에 작게 배치 */}
      <div className="absolute bottom-10 right-10 z-50">
        <Link href="/">
          <button className="px-6 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white/70 text-sm transition-all">
            ↺ 처음으로 돌아가기
          </button>
        </Link>
      </div>
    </main>
  );
}
