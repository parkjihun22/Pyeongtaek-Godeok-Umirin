import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/BusinessGuide/BusinessGuide1/page1.jpg";
import tableImage from "../../assets/BusinessGuide/BusinessGuide1/tableImage.jpg";



const projectData = [
  {
    label: "현장명",
    value: "평택 고덕 우미린 프레스티지",
  },

  {
    label: "사업명",
    value: "평택 고덕 우미린 프레스티지",
  },

  {
    label: "대지위치",
    value: "경기도 평택시 고덕 국제화계획지구 내 Abc-36블록",
  },

  {
    label: "규모",
    value: "총 743세대",
  },

  {
    label: "주택형",
    value: "84㎡ · 94㎡ · 101㎡ · 111㎡",
  },

  {
    label: "시행",
    value: "우미건설(주), 지에스건설(주), 이에스아이(주)",
  },

  {
    label: "시공",
    value: "우미건설(주), 지에스건설(주), 이에스아이(주)",
  },
];
const BusinessGuide1 = () => {
  const menuContents = [
    { title: "사업안내", url: "/BusinessGuide/intro" },
    { title: "분양일정", url: "/BusinessGuide/plan" },
  ];

  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation();
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
<Header isChanged={isScroll} />
<FixIcon />

<Bener title="사업개요" />

<MenuBar contents={menuContents} />
<div className={styles.textBox}>
  <div>고덕국제신도시의 미래가치를 담은 프리미엄 주거단지</div>
  <div>평택 고덕 우미린 프레스티지, 우미건설의 새로운 주거 가치</div>
</div>

<img className={styles.img3} src={page1} alt="평택 고덕 우미린 사업개요 이미지"/>

			<div className={styles.tableContainer}>
				{!isMobile && (
					<img
						className={styles.tableImg}
						src={tableImage}
						alt="평택 고덕 우미린 사업개요 표 이미지"
					/>
				)}
				<table className={styles.projectTable}>
					<tbody>
						{projectData.map((item, index) => (
							<tr key={index}>
								<td className={styles.label}>{item.label}</td>
								<td className={styles.contents}>{item.value}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			 <div className={styles.commonBox}>
				<div className={styles.notice}>
					※ 본 홈페이지에 표기된 내용은 하기의 내용을 근거로 한 내용이며, 추후 계획의 변동 등은 당사와 무관합니다.
				</div>
				
			</div> 


			<Footer />
		</div>
	)
}

export default BusinessGuide1;
