import bgImage from "../../assets/ComplexGuide/ComplexGuide1/bg-section.jpg";
import bannerImage from "../../assets/ComplexGuide/ComplexGuide1/complex-1024x573.jpg";
import layoutImage from "../../assets/ComplexGuide/ComplexGuide1/page1.webp";
import designImage from "../../assets/ComplexGuide/ComplexGuide2/page1.webp";
import communityImage from "../../assets/ComplexGuide/ComplexGuide3/page1.jpg";

export const communityData = {
  eyebrow: "COMMUNITY",

  title: "품격 있는 일상을 완성하는 프리미엄 단지",

  description:
    "평택 고덕 우미린 프레스티지는 총 743세대 규모의 프리미엄 아파트로, 쾌적한 단지 배치와 조경, 다양한 커뮤니티 공간을 통해 편리한 생활과 여유로운 일상을 함께 누릴 수 있는 주거 환경을 제공합니다.",

  backgroundImage: bgImage,

  banner: {
    image: bannerImage,
    alt: "평택 고덕 우미린 프레스티지 단지 전경",
  },

  items: [
    {
      id: "complex-layout",
      label: "단지 배치도",

      title: "쾌적한 생활을 위한 단지 배치",

      description:
        "평택 고덕 우미린 프레스티지는 채광과 통풍, 보행 동선을 고려한 단지 설계를 통해 더욱 쾌적하고 편안한 주거 환경을 제공합니다.",

      image: layoutImage,
      alt: "평택 고덕 우미린 프레스티지 단지 배치도",
    },

    {
      id: "complex-design",
      label: "단지 특화설계",

      title: "우미건설 프리미엄 설계",

      description:
        "입주민의 라이프스타일을 고려한 조경과 휴게 공간, 효율적인 동선 설계를 적용하여 편리하고 품격 있는 주거 환경을 제공합니다.",

      image: designImage,
      alt: "평택 고덕 우미린 프레스티지 특화 설계",
    },

    {
      id: "community-space",
      label: "커뮤니티",

      title: "입주민 중심의 커뮤니티 공간",

      description:
        "입주민의 건강과 여가, 소통을 위한 다양한 커뮤니티 공간을 계획하여 더욱 풍요롭고 편리한 프리미엄 라이프를 제공합니다.",

      image: communityImage,
      alt: "평택 고덕 우미린 프레스티지 커뮤니티",
    },
  ],
};