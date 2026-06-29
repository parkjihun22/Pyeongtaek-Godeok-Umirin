const SITE_URL = "https://cheongju-hanyanglips.com";

export const siteSeo = {
  siteName: "평택 고덕 우미린",
  siteUrl: SITE_URL,
  phone: "1533-8848",
  ogImage: "/img/og/main.jpg",
  locale: "ko_KR",
  organizationId: `${SITE_URL}/#organization`,
  websiteId: `${SITE_URL}/#website`,

  defaultDescription:
    "평택 고덕 우미린 공식 홈페이지입니다. 경기도 평택시 고덕 국제화계획지구 내 Abc-36블록에 조성되는 평택 고덕 우미린 프레스티지 총 743세대, 전용 84㎡·94㎡·101㎡·111㎡ 타입, 청약정보, 분양가 상담, 견본주택과 모델하우스 방문예약 정보를 확인하세요.",

  project: {
    addressCountry: "KR",
    addressRegion: "경기도",
    addressLocality: "평택시",
    streetAddress: "고덕 국제화계획지구 내 Abc-36블록",
    brands: ["평택 고덕 우미린", "평택 고덕 우미린 프레스티지", "우미건설"],
    navigationSchemaName: "평택 고덕 우미린 주요 메뉴",
  },

  keywords: [
    "평택 고덕 우미린",
    "평택 고덕 우미린 프레스티지",
    "평택 고덕 아파트",
    "고덕국제신도시",
    "고덕 국제화계획지구",
    "평택 고덕 국제화계획지구 Abc-36블록",
    "평택 신축아파트",
    "평택 아파트 분양",
    "평택 고덕 분양",
    "평택 고덕 우미린 모델하우스",
    "평택 고덕 우미린 견본주택",
    "평택 고덕 우미린 공급정보",
    "평택 고덕 우미린 청약",
    "평택 고덕 우미린 분양가",
    "평택 고덕 우미린 743세대",
    "평택 고덕 우미린 84㎡",
    "평택 고덕 우미린 94㎡",
    "평택 고덕 우미린 101㎡",
    "평택 고덕 우미린 111㎡",
    "84A 84B 84D 94A 94B 94D 101 111 타입",
    "모델하우스 방문예약",
  ],
};

export const seoNavigation = [
  {
    name: "브랜드소개",
    path: "/Brand/intro",
    children: [
      { name: "브랜드소개", path: "/Brand/intro" },
      { name: "홍보영상", path: "/Brand/video" },
    ],
  },
  {
    name: "사업안내",
    path: "/BusinessGuide/intro",
    children: [
      { name: "사업안내", path: "/BusinessGuide/intro" },
      { name: "분양일정", path: "/BusinessGuide/plan" },
    ],
  },
  {
    name: "입지환경",
    path: "/LocationEnvironment/intro",
    children: [
      { name: "입지안내", path: "/LocationEnvironment/intro" },
      { name: "프리미엄", path: "/LocationEnvironment/primium" },
    ],
  },
  {
    name: "단지안내",
    path: "/ComplexGuide/intro",
    children: [
      { name: "단지배치도", path: "/ComplexGuide/intro" },
      { name: "호수배치도", path: "/ComplexGuide/detailintro" },
      { name: "커뮤니티", path: "/ComplexGuide/community" },
    ],
  },
  {
    name: "분양안내",
    path: "/BusinessGuide/documents",
    children: [
      { name: "공급안내", path: "/BusinessGuide/documents" },
      { name: "입주자 모집공고", path: "/SalesInfo/announcement" },
      { name: "계약서류안내", path: "/SalesInfo/guide" },
    ],
  },
  {
    name: "타입안내",
    path: "/FloorPlan/59A",
    children: [
      { name: "84㎡", path: "/FloorPlan/59A" },
      { name: "94㎡", path: "/FloorPlan/59B" },
      { name: "101㎡", path: "/FloorPlan/84A" },
      { name: "111㎡", path: "/FloorPlan/84B" },
      { name: "E-모델하우스", path: "/FloorPlan/Emodel" },
    ],
  },
  {
    name: "홍보센터",
    path: "/Promotion/Customer",
    children: [{ name: "관심고객등록", path: "/Promotion/Customer" }],
  },
];

const page = ({
  path,
  title,
  description,
  menu,
  image = siteSeo.ogImage,
  priority = 0.8,
  changefreq = "weekly",
  robots = "index, follow, max-snippet:-1, max-image-preview:large",
}) => ({
  path,
  title,
  description,
  menu,
  image,
  priority,
  changefreq,
  robots,
});

export const seoPages = {
  home: page({
    path: "/",
    title: "평택 고덕 우미린",
    description: siteSeo.defaultDescription,
    menu: "홈",
    priority: 1,
    changefreq: "daily",
  }),

  brandIntro: page({
    path: "/Brand/intro",
    title: "브랜드소개 | 평택 고덕 우미린",
    description:
      "평택 고덕 우미린 프레스티지의 브랜드 가치와 주거 철학을 소개합니다. 고덕국제신도시에서 만나는 우미린 브랜드 아파트의 분양 정보를 확인하세요.",
    menu: "브랜드소개",
  }),

  brandVideo: page({
    path: "/Brand/video",
    title: "홍보영상 | 평택 고덕 우미린",
    description:
      "평택 고덕 우미린 홍보영상을 통해 평택 고덕 우미린 프레스티지의 브랜드 프리미엄과 주거 가치를 확인하세요.",
    menu: "브랜드소개",
  }),

  businessIntro: page({
    path: "/BusinessGuide/intro",
    title: "사업안내 | 평택 고덕 우미린",
    description:
      "평택 고덕 우미린 사업안내 페이지입니다. 경기도 평택시 고덕 국제화계획지구 내 Abc-36블록, 총 743세대 규모의 평택 고덕 우미린 프레스티지 정보를 확인하세요.",
    menu: "사업안내",
    image: "/img/og/business.jpg",
    priority: 0.9,
  }),

  businessPlan: page({
    path: "/BusinessGuide/plan",
    title: "분양일정 | 평택 고덕 우미린",
    description:
      "평택 고덕 우미린 분양일정 안내입니다. 특별공급, 일반공급, 당첨자 발표, 서류접수와 정당계약 등 주요 청약 일정을 확인하세요.",
    menu: "사업안내",
  }),

  salesGuide: page({
    path: "/BusinessGuide/documents",
    title: "공급안내 | 평택 고덕 우미린",
    description:
      "평택 고덕 우미린 공급안내 페이지입니다. 평택 고덕 우미린 프레스티지의 공급 규모, 타입 구성, 세대 안내와 분양 상담 전 필요한 정보를 확인하세요.",
    menu: "분양안내",
  }),

  announcement: page({
    path: "/SalesInfo/announcement",
    title: "입주자 모집공고 | 평택 고덕 우미린",
    description:
      "평택 고덕 우미린 입주자 모집공고 안내 페이지입니다. 총 743세대 공급 계획, 청약 일정, 계약 조건 등 분양 전 확인해야 할 공고 정보를 제공합니다.",
    menu: "분양안내",
  }),

  salesInfoGuide: page({
    path: "/SalesInfo/guide",
    title: "계약서류안내 | 평택 고덕 우미린",
    description:
      "평택 고덕 우미린 계약서류안내 페이지입니다. 청약, 계약, 자격 확인, 제출서류와 상담 전 준비해야 할 주요 내용을 확인하세요.",
    menu: "분양안내",
  }),

  locationIntro: page({
    path: "/LocationEnvironment/intro",
    title: "입지환경 | 평택 고덕 우미린",
    description:
      "평택 고덕 우미린 입지환경 안내입니다. 고덕국제신도시 생활권에서 누리는 교통, 생활 인프라와 평택 고덕 우미린 프레스티지의 주거 가치를 확인하세요.",
    menu: "입지환경",
    image: "/img/og/location.jpg",
    priority: 0.9,
  }),

  locationPremium: page({
    path: "/LocationEnvironment/primium",
    title: "프리미엄 | 평택 고덕 우미린",
    description:
      "평택 고덕 우미린 프리미엄 안내입니다. 평택 고덕 우미린 프레스티지의 입지 가치, 생활 인프라, 브랜드 설계와 주거 프리미엄을 소개합니다.",
    menu: "입지환경",
    image: "/img/og/location.jpg",
  }),

  complexIntro: page({
    path: "/ComplexGuide/intro",
    title: "단지배치도 | 평택 고덕 우미린",
    description:
      "평택 고덕 우미린 단지배치도 안내입니다. 동선, 조망, 생활 편의와 쾌적성을 고려한 평택 고덕 우미린 프레스티지의 단지 구성을 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
    priority: 0.9,
  }),

  complexDetail: page({
    path: "/ComplexGuide/detailintro",
    title: "호수배치도 | 평택 고덕 우미린",
    description:
      "평택 고덕 우미린 호수배치도 안내입니다. 동·호수 구성과 단지 내 위치 정보를 통해 세대별 배치 흐름을 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
  }),

  complexCommunity: page({
    path: "/ComplexGuide/community",
    title: "커뮤니티 | 평택 고덕 우미린",
    description:
      "평택 고덕 우미린 커뮤니티 안내입니다. 입주민의 일상 편의와 여가를 고려한 커뮤니티 시설과 단지 생활 가치를 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
  }),

  floorPlan84: page({
    path: "/FloorPlan/59A",
    title: "84㎡ 평면도 | 평택 고덕 우미린",
    description:
      "평택 고덕 우미린 84㎡ 평면도 안내입니다. 84A·84B·84D 타입의 공간 구성과 생활 동선을 확인하세요.",
    menu: "타입안내",
  }),

  floorPlan94: page({
    path: "/FloorPlan/59B",
    title: "94㎡ 평면도 | 평택 고덕 우미린",
    description:
      "평택 고덕 우미린 94㎡ 평면도 안내입니다. 94A·94B·94D 타입의 공간 활용과 세대 구성을 확인하세요.",
    menu: "타입안내",
  }),

  floorPlan101: page({
    path: "/FloorPlan/84A",
    title: "101㎡ 평면도 | 평택 고덕 우미린",
    description:
      "평택 고덕 우미린 101㎡ 평면도 안내입니다. 전용 101㎡ 타입의 넓은 공간 구성과 주거 동선을 확인하세요.",
    menu: "타입안내",
  }),

  floorPlan111: page({
    path: "/FloorPlan/84B",
    title: "111㎡ 평면도 | 평택 고덕 우미린",
    description:
      "평택 고덕 우미린 111㎡ 평면도 안내입니다. 전용 111㎡ 프리미엄 타입의 공간 구성과 생활 동선을 확인하세요.",
    menu: "타입안내",
  }),

  emodel: page({
    path: "/FloorPlan/Emodel",
    title: "E-모델하우스 | 평택 고덕 우미린",
    description:
      "평택 고덕 우미린 E-모델하우스입니다. 84㎡, 94㎡, 101㎡, 111㎡ 타입의 실내 구조, 공간 구성과 주거 동선을 온라인으로 확인하세요.",
    menu: "타입안내",
    image: "/img/og/emodel.jpg",
    priority: 0.9,
  }),

  customer: page({
    path: "/Promotion/Customer",
    title: "관심고객등록 | 평택 고덕 우미린",
    description:
      "평택 고덕 우미린 관심고객등록 페이지입니다. 분양 일정, 모델하우스 방문예약, 청약 정보와 주요 안내를 빠르게 받아보세요.",
    menu: "홍보센터",
    image: "/img/og/customer.jpg",
    priority: 0.9,
    changefreq: "daily",
  }),

  notFound: page({
    path: "/404",
    title: "페이지를 찾을 수 없습니다 | 평택 고덕 우미린",
    description:
      "요청하신 페이지를 찾을 수 없습니다. 평택 고덕 우미린 공식 홈페이지의 사업안내, 입지환경, 타입안내, E-모델하우스와 관심고객등록 메뉴를 이용해 주세요.",
    menu: "오류",
    priority: 0,
    changefreq: "yearly",
    robots: "noindex, follow",
  }),
};

export const seoPathMap = Object.fromEntries(
  Object.entries(seoPages).map(([key, value]) => [value.path.toLowerCase(), key])
);

export const getAbsoluteUrl = (path = "/") => {
  if (/^https?:\/\//.test(path)) return path;
  return `${siteSeo.siteUrl}${path}`;
};

export const getSeoPageByPath = (pathname = "/") => {
  const decodedPath = decodeURI(pathname).replace(/\/$/, "") || "/";
  const normalizedPath = decodedPath.toLowerCase();
  const exactKey = seoPathMap[normalizedPath];

  if (exactKey) return seoPages[exactKey];

  if (normalizedPath.endsWith("/customer")) return seoPages.customer;

  return seoPages.notFound;
};