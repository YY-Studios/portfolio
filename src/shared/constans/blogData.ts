export type BlogItem = {
  id: string;
  title: string;
  summary: string;
  date: string; // "2026.02.25"
  period?: string; // 선택: "2026.02"
  link: string;
  tags?: string[];
  thumbnail?: string;
};

export const BLOGS: BlogItem[] = [
  {
    id: "react-query-from-scratch",
    title: "React Query를 직접 구현해보며 내부 동작 이해하기",
    summary:
      "query cache, staleTime, refetch 흐름을 직접 구현하면서 React Query의 핵심 동작을 정리한 글입니다.",
    date: "2026.02.21",
    period: "2026.02",
    link: "https://velog.io/@your-id/react-query-from-scratch",
    tags: ["React", "TanStack Query", "TypeScript"],
    thumbnail: "/images/blog/test.png",
  },
  {
    id: "zustand-pattern",
    title: "Zustand로 필터 상태 설계하기",
    summary:
      "카테고리/키 구조 기반으로 필터 상태를 관리하는 실무형 패턴과 타입 설계 포인트를 정리했습니다.",
    date: "2026.02.13",
    period: "2026.02",
    link: "https://velog.io/@your-id/zustand-filter-state",
    tags: ["Zustand", "State", "TypeScript"],
    thumbnail: "/images/blog/test.png",
  },
  {
    id: "nextjs-auth-ui",
    title: "Next.js 인증 UI 분리 패턴 정리",
    summary:
      "상위 컴포넌트와 훅 책임을 분리해서 로그인 UI를 유지보수하기 쉽게 구성한 방법을 정리했습니다.",
    date: "2026.01.24",
    period: "2026.01",
    link: "https://velog.io/@your-id/nextjs-auth-ui-pattern",
    tags: ["Next.js", "Auth", "UI Architecture"],
    thumbnail: "/images/blog/test.png",
  },
];
