import unit01 from "../../assets/UnitplanBox/unit01.jpg";
import unit02 from "../../assets/UnitplanBox/unit02.jpg";
import unit03 from "../../assets/UnitplanBox/unit03.jpg";
import unit04 from "../../assets/UnitplanBox/unit04.jpg";
import unit05 from "../../assets/FloorPlan/FloorPlan5/unit05.jpg";
import unit06 from "../../assets/FloorPlan/FloorPlan6/unit06.jpg";

export const unitPlanData = {
  eyebrow: "UNIT PLAN",

  title: "평택 고덕 우미린 타입안내",

  description:
    "평택 고덕 우미린 프레스티지의 84㎡·94㎡·101㎡·111㎡ 타입별 평면을 확인할 수 있습니다. 타입별 공간 구성과 생활 동선을 비교하며 실거주에 적합한 주거 공간을 살펴보세요.",

  plans: [
    {
      id: "84",
      type: "84",
      name: "84㎡",
      summary:
        "84A·84B·84D 타입의 평면 구성과 공간 활용을 확인해 보세요.",

      image: unit01,
      alt: "평택 고덕 우미린 84㎡ 평면도",

      link: "/FloorPlan/59A",
    },

    {
      id: "94",
      type: "94",
      name: "94㎡",
      summary:
        "94A·94B·94D 타입의 평면 구성과 생활 동선을 확인해 보세요.",

      image: unit02,
      alt: "평택 고덕 우미린 94㎡ 평면도",

      link: "/FloorPlan/59B",
    },

    {
      id: "101",
      type: "101",
      name: "101㎡",
      summary:
        "101㎡ 타입의 넓고 여유로운 공간 구성을 확인해 보세요.",

      image: unit03,
      alt: "평택 고덕 우미린 101㎡ 평면도",

      link: "/FloorPlan/84A",
    },

    {
      id: "111",
      type: "111",
      name: "111㎡",
      summary:
        "111㎡ 프리미엄 타입의 공간 구성과 생활 동선을 확인해 보세요.",

      image: unit04,
      alt: "평택 고덕 우미린 111㎡ 평면도",

      link: "/FloorPlan/84B",
    },
  ],
};