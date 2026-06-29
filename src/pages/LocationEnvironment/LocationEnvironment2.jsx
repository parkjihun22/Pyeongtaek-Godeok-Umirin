import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/LocationEnvironment/LocationEnvironment2/page1.jpg";

const locationMenu = [
  { title: "입지안내", url: "/LocationEnvironment/intro" },
  { title: "프리미엄", url: "/LocationEnvironment/primium" },
];

const LocationEnvironment2 = () => {
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="프리미엄" />
      <MenuBar contents={locationMenu} />

      <div className={styles.textBox}>
        <div>고덕국제신도시의 중심에서</div>
        <div>삼성 평택캠퍼스와 함께 누리는 프리미엄 라이프</div>
        <div>평택 고덕 우미린 프레스티지가 새로운 주거 기준을 제안합니다.</div>
      </div>

      <figure className={styles.locationMapFrame}>
        <img
          src={page1}
          className={styles.image3}
          alt="평택 고덕 우미린 프리미엄 및 지북동 주거가치 이미지"
        />
      </figure>

      <Footer />
    </div>
  );
};

export default LocationEnvironment2;
