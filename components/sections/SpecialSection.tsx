"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Gallery3D } from "./Gallery3D";

export function SpecialSection() {
  return (
    <section className="w-full h-screen relative bg-[#191920]">
      {/* 상단 안내 문구 */}
      <div className="absolute top-10 left-0 w-full text-center z-10 pointer-events-none">
        <p className="text-gray-300 mt-2 text-lg drop-shadow-md font-bold">
          <span className="text-purple-400">Memory Gallery</span>
        </p>
        <p className="text-sm text-gray-500">
          왼쪽부터 차례대로 액자를 클릭해줘!
        </p>
      </div>

      <Canvas dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 2, 15] }}>
        <color attach="background" args={["#191920"]} />
        <fog attach="fog" args={["#191920", 0, 15]} />

        <Suspense fallback={null}>
          <Gallery3D images={memories} />
        </Suspense>
      </Canvas>
    </section>
  );
}

// 📝 [데이터 설정] desc(편지) 추가 완료
const memories = [
  // 1. 왼쪽 끝
  {
    position: [-2.5, 0, 1.0],
    rotation: [0, Math.PI / 4, 0],
    url: "images/special/sp1.jpeg",
    title: "다음 ➡️",
    desc: `안녕 보정이, 200일을 맞이해서 이벤트를 준비했어!
절대 어제 보정이가 이벤트 없냐고 물어봐서 급하게 준비한 건 아니고, 언젠가 꼭 보정이를 위해서 웹사이트 하나 만들어주고 싶었어. 오해하지 말 것!
이거 만들면서 우리 옛날 사진들을 쭉 봤는데, 점점 놀러가는 주기가 길어지더라고...🥲 반성하고 있어!!!!
오른쪽에 있는 사진은 우리가 찍은 첫 번째 인생네컷이자, 딱 우리 사귀기로 한 날 찍은 거야. 이 사진, 저번 포토북 만들 때도 봤는데 다시 봐도 역시 어색해 보인다. 그래도 요즘은 이때보다 표정이 훨씬 자연스럽다 ㅎㅎ.
보정이 스타일도 그때랑 비교하면 많이 달라진 것 같아. 물론 이때도 예뻤지만, 요즘은 뭔가 점점 더 내 이상형 그 자체가 되어가는 느낌이라서 아주 좋아 ㅎㅎ.
이 사진 찍고 벌써 200일이나 지났다니... 시간 진짜 빠르다.
    `,
  },
  // 2. 왼쪽 중간
  {
    position: [-1.3, 0, 0.3],
    rotation: [0, Math.PI / 8, 0],
    url: "images/special/sp2.jpeg",
    title: "다음 ➡️",
    desc: `이거 만들 때 너무 힘들었는데 보정이가 보고 좀 재밌어했으면 좋겠다. 
제미나이 혼내가면서 몇 시간 동안 만든 것이니 스크롤 천천히 내리면서 음미하도록 해.
혹시 이전 페이지를 휙휙 넘어갔다면 지금 당장 다시 돌아가서 천천히 다시 보고 와.
보정이한테 이런식의 이벤트를 해주는 사람은 아마 내가 처음이자 마지막이지 않을까 싶어. 진짜 만약에 보정이가 나를 싫어하게 된다면, 그 이유는 코딩하는 나 때문일 것이고, 다음 사람은 분명 비개발자일 것이기 때문이지. 
(하지만 헤어질 일은 없을 것이야)
`,
  },
  // 3. 정중앙
  {
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    url: "images/special/sp3.png",
    title: "다음 ➡️",
    desc: `우리 요즘 말그대로 하루종일 붙어있잖아? 나 그래도 전혀 질리지가 않아. 수업도 같이 들었으면 좋겠고, 아침도 같이 먹었으면 좋겠고, 수업 끝나고 헬스장도 같이 가고 싶어. 내가 이렇게까지 누군가와 붙어있고 싶었던 적이 없는데 나한테 무슨 짓은 한 거야.
나를 이렇게 만들어놓고 혼자 폴란드를 가버리면 어떡하라는 것이야!!
`,
  },
  // 4. 오른쪽 중간
  {
    position: [1.3, 0, 0.3],
    rotation: [0, -Math.PI / 8, 0],
    url: "images/special/sp4.jpeg",
    title: "다음 ➡️",
    desc: `아니 그리고 보정이 요즘 인기가 왜 이렇게 많아? 질투나게! 😡
보정이가 지금까지 자랑할 때 내 속이 얼마나 타들어 갔는지 알아?
분명히 요즘 언급된 사람들 말고도 속으로 보정이 좋아하는 사람 많을 것 같다..........나 버리면 안된다? 😭
그리고 나이가 중요한게 아니야. 남자는 다 위험하다고. 7살이든 8살이든 상대방이 남자면 무조건 철벽을 치도록 해.
내가 다른 사람들보다 더 잘해줄게 떠나지마.
`,
  },
  // 5. 오른쪽 끝
  {
    position: [2.5, 0, 1.0],
    rotation: [0, -Math.PI / 4, 0],
    url: "images/special/sp5.jpeg",
    title: "사랑해 🥰",
    desc: `남자친구로서 할 일을 다하고 있는지 잘 모르겠어. 표현도 자주 하려고 하는 편인데 부족하면 말해줘.
내가 남들보다 많이 못해주는데도 내 옆에 있어줘서 고맙고,
항상 나 데리고 여기저기 놀러다녀줘서 고맙고,
누구보다 내 생일을 진심으로 챙겨줘서 고맙고,
나보다 내가 더 잘되길 바라줘서 고맙고,
항상 순수한 마음으로 나를 대해줘서 고마워~

우리 200일 진심으로 축하하고, 앞으로도 지금처럼 예쁘게 사랑하자. 사랑해~~~!!!
`,
  },
];
