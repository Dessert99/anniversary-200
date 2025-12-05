// src/components/sections/StorySection.tsx
"use client";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import Snowfall from "react-snowfall"; // ✅ 눈 내리는 라이브러리 추가

export function StorySection() {
  return (
    // overflow-hidden 추가: 눈송이가 영역 밖으로 나가서 스크롤 생기는 것 방지
    <div className="w-full bg-black py-20 relative overflow-hidden">
      {/* ❄️ 눈 내리는 효과 (배경) */}
      <Snowfall
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0, // 배경으로 배치
        }}
        snowflakeCount={100} // 텍스트 읽는데 방해 안 되게 적당히
        color="#ffffff"
        opacity={[2, 5]}
        speed={[0.5, 1.0]}
        wind={[-0.5, 0.5]}
        radius={[0.5, 2.0]}
      />

      {/* TracingBeam에 z-10을 줘서 눈보다 위에 올라오게 합니다.
        (버튼 클릭 등이 막히지 않게 하기 위함) 
      */}
      <TracingBeam className="px-6 relative z-10">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {/* 제목 */}
          <div className="mb-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              우리의 이야기
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
                  <CardItem translateZ="100" className="w-full  mt-4">
                    <Image
                      src={item.image}
                      height={300} // 원본 비율에 맞춰 넉넉하게
                      width={1000} // 원본 비율에 맞춰 넉넉하게
                      className="w-full h-100 object-contain rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                      priority={true} // 처음 2개는 미리 로딩해서 깜빡임 방지
                    />
                  </CardItem>
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
    title: "우리의 첫(?) 데이트",
    date: "2025.05.",
    description: `사귀고 나서 처음으로 놀러 갔던 날이다! ${"\n"}
    아직 어색해서 조금 긴장했던 기억이 있네 ㅎㅎㅎ
    `,
    image: "/images/stroy/month5.jpeg",
  },
  {
    title: "행궁동 놀러 간 날~",
    date: "2025.06.",
    description: `야경을 못 봐서 아쉬웠지만 규카츠도 먹고 모루인형도 만들고 재밌는 하루였따`,
    image: "/images/stroy/month6.jpeg",
  },
  {
    title: "뽀정이 조교 근무 따라간 날",
    date: "2025.07.",
    description:
      "보정이 심심할까 봐 모현으로 같이 간 날! 솔직히 과방에 누구 들어올까 봐 걱정했어 ㅋㅋㅋ",
    image: "/images/stroy/month7.jpeg",
  },
  {
    title: "우리의 100일",
    date: "2025.08.",
    description:
      "이거 맞추고 여기저기 막 자랑하고 다님. 이때가 엊그제 같은데 벌써 200일이라니!",
    image: "/images/stroy/month8.jpeg",
  },
  {
    title: "귀멸의 칼날 본 날",
    date: "2025.09.",
    description: `보정이 이 날 기억 안 나지? 9월에 같이 찍은 사진이 별로 없더라고. ${"\n"}
      보정이가 기유를 너무 좋아해서 질투 났지만 귀칼 같이 봐줘서 참을게.
    `,
    image: "/images/stroy/month9.jpeg",
  },
  {
    title: "부산 여행",
    date: "2025.10.",
    description: `진짜 잊지 못할 추억을 쌓은 날이야. 날씨가 별로였지만 보정이랑 같이 있어서 재밌었다~`,
    image: "/images/stroy/month10.jpeg",
  },
  {
    title: "내 생일",
    date: "2025.11.",
    description:
      "이날 진짜 감동했음. 생일을 이렇게까지 축하받은 적은 없었는데 뽀정이한테 너무 고마웠어",
    image: "/images/stroy/month11.jpeg",
  },
];
