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
    desc: `이거 만드는데 너무 힘들었는데 보정이가 보고 좀 재밌어했으면 좋겠다. 처음 써보는 기술이 많아서 제미나이 혼내가면서 몇 시간 동안 만든 것이니 스크롤 천천히 내리면서 음미하도록 해.
혹시 이전 페이지를 휙휙 넘어갔다면 지금 당장 다시 돌아가서 천천히 다시 보고 오도록.
보정이한테 이런식의 이벤트를 해주는 사람은 아마 내가 처음이자 마지막이지 않을까 싶어. 진짜 만약에 보정이가 나를 싫어하게 된다면, 다음 사람은 분명 비개발자일 것이기 때문이지. (하지만 헤어질 일은 없을 것이야)
`,
  },
  // 3. 정중앙
  {
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    url: "images/special/sp3.png",
    title: "다음 ➡️",
    desc: `우리 요즘 말그대로 하루종일 붙어있잖아? 나 그래도 전혀 질리지가 않아. 수업도 같이 들었으면 좋겠고, 아침도 같이 먹었으면 좋겠고, 수업 끝나고 헬스장도 같이 가고 싶어. 내가 이렇게까지 누군가와 붙어있던 적이 없는데 나한테 무슨 짓은 한 것이야...
나를 이렇게 망가뜨려놓고 혼자 폴란드를 가버리면 어떡하냐는 말이다!!!!!
`,
  },
  // 4. 오른쪽 중간
  {
    position: [1.3, 0, 0.3],
    rotation: [0, -Math.PI / 8, 0],
    url: "images/special/sp4.jpeg",
    title: "다음 ➡️",
    desc: `정말 가지 않았으면 좋겠는데..그래도 요즘 너무 할 게 많은 나 자신을 보면 그냥 보내주는 게 맞는 것 같아.
보정이가 할 게 그렇게 많냐고 자주 물어보잖아? 사실은 지금 당장 해야하는 과제나 공부는 그렇게 없긴 해. 하지만 앞으로 점점 사회가 요구하는 능력이 올라가 취업은 힘들어지고, 취업을 해도 평범 이상을 살기 위해서는 지금 많이 공부해놔야 한다고 생각해.
나는 보정이와 많은 미래를 생각하고 있어서 지금 열심히 하는 거야. 지금 보정이와 오랫동안 함께하고 싶어서 바쁘게 공부하며 산다고 생각해 주면 좋겠어. 내가 그렇게 개발에 미쳐 있는 사람은 아니야 ㅋㅋㅋㅋ
`,
  },
  // 5. 오른쪽 끝
  {
    position: [2.5, 0, 1.0],
    rotation: [0, -Math.PI / 4, 0],
    url: "images/special/sp5.jpeg",
    title: "사랑해 🥰",
    desc: `요즘 정신없이 바쁘게 사는 와중에도, 보정이가 내 옆에 있어서 얼마나 큰 힘이 되는지 몰라.
이번 이벤트 마음에 들었으면 좋겠다.
우리 200일 진심으로 축하하고, 앞으로도 지금처럼 예쁘게 사랑하자. 사랑해~~~!!!
`,
  },
];
