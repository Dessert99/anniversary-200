"use client";

import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import Snowfall from "react-snowfall"; // ✅ 눈 내리는 라이브러리 추가

export function AlbumSection() {
  return (
    <div className="w-full bg-black py-20 relative overflow-hidden">
      {/* ❄️ 눈 내리는 효과 추가 */}
      <Snowfall
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0, // 배경으로 보내기
        }}
        snowflakeCount={200} // 눈송이 개수 (앨범 보는데 방해 안 되게 적당히)
        color="#ffffff"
        opacity={[0.3, 0.6]} // 너무 진하지 않게 투명도 조절
        speed={[2, 3]} // 차분하게 내리는 속도
        wind={[-0.5, 0.5]} // 살랑거리는 바람
        radius={[0.5, 2.0]} // 눈송이 크기
      />

      {/* 텍스트와 앨범 콘텐츠 (눈 위에 표시) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 mb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
          놓치고 싶지 않은 우리의 모든 순간들 📸
        </h2>
      </div>
      {/* 갤러리 컴포넌트 (눈 위에 표시) */}
      <div className="relative z-10">
        <ParallaxScroll images={images} />
      </div>
    </div>
  );
}

// ✅ 이미지 경로를 안전하게 로컬 파일로 통일했습니다. (에러 방지용)
// 나중에 public/images 폴더에 실제 사진들을 넣고 파일명만 바꿔주시면 됩니다!
// 1.jpeg 부터 30.jpeg 까지 자동으로 경로 생성
// ✅ 파일 이름을 직접 지정해서 에러 방지 (존재하는 파일만 리스트업)
const images = [
  "/images/album/1.jpeg",
  "/images/album/2.jpeg",
  "/images/album/3.jpeg",
  "/images/album/4.jpeg",
  "/images/album/5.jpeg",
  "/images/album/6.jpeg",
  "/images/album/7.jpeg",
  "/images/album/8.jpeg",
  "/images/album/10.jpeg",
  "/images/album/11.jpeg",
  "/images/album/12.jpeg",
  "/images/album/13.jpeg",
  "/images/album/14.jpeg",
  "/images/album/15.jpeg",
  "/images/album/16.jpeg",
  "/images/album/18.jpeg",
  "/images/album/19.jpeg",
  "/images/album/21.jpeg",
  "/images/album/22.jpeg",
  "/images/album/23.jpeg",
  "/images/album/25.jpeg",
  "/images/album/26.jpeg",
  "/images/album/27.jpeg",
  "/images/album/28.jpeg",
  "/images/album/30.jpeg",
  "/images/album/32.jpeg",
  "/images/album/35.jpeg",
  "/images/album/38.jpeg",
  "/images/album/39.jpeg",
  "/images/album/40.jpeg",

  "/images/album/43.jpeg",
  "/images/album/44.jpeg",
  "/images/album/47.jpeg",
  "/images/album/51.jpeg",
  "/images/album/52.jpeg",
];
