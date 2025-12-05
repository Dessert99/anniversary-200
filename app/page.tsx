// src/app/page.tsx

import { CakeOpening } from "@/components/sections/CakeOpening";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center bg-black overflow-x-hidden">
      {/* 1. 케이크 오프닝 */}
      <CakeOpening />
    </main>
  );
}
