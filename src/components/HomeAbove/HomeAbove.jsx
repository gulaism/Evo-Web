import React, { useEffect, useRef, useState } from "react";
// styles
import styles from "./HomeAbove.module.scss";
// images
// import rightArrow from "../../../assets/images/HomePage/Expand_right.svg";
import rightArrow from "../../assets/images/HomePage/Expand_right.svg";
import plus from "../../assets/images/HomePage/plus.svg";
import cursorIcon from "../../assets/images/HomePage/Vector.svg";

const items = [
  {
    title: "From Zero To Expert",
    span: "Expert",
    description:
      "Tecrübəli müəllim və mentormuz tələbələrə real layihələrdə prosktiki təcrübə qazanmağa kömək edir.",
  },
  {
    title: "İnnovativ Təcrübə Proqramı",
    span: "İnnovativ",
    description:
      "Proqram müddətində seminarlar və real layihələr üzrə qazanmağa kömək edir.",
  },
  {
    title: "HR mütəxəssisi ilə keçirilən təlimlər",
    span: "HR mütəxəssisi",
    description:
      "Peşəkar kadr yetişdirir, sizə CV hazırlama və müsahibə sualları üzrə dəstək olunur.",
  },
  {
    title: "InnoTech təqaüd proqramı",
    span: "InnoTech",
    description:
      "Tecrübəli müəllim və mentormuz tələbələrə real layihələrdə prosktiki təcrübə qazanmağa kömək edir.",
  },
  {
    title: "Strateji köməkçi dəstəyi", 
    span: "Strateji",
    description:
      "Strategi köməkçilərimiz hər gün suallarınıza cavablandırmağa kömək edəcək.",
  },
];

const Item = ({ title, span , description }) => {
  const splitTitle = title.split(new RegExp(`(${span})`, "i"));

  return(
    <div className={styles.item}>
    <h3 className={styles.itemTitle}> 
      {splitTitle.map((part, index) => (
        part.toLowerCase() === span.toLowerCase() ? (
          <span key={index}>{part}</span>
        ) : (
          <React.Fragment key={index}>{part}</React.Fragment>
        )
      ))}
    </h3>
    <p className={styles.itemDescription}>{description}</p>
  </div>
  )
};
const HomeAbove = () => {
  const [mousePosition, setMousePosition] = useState({ x: 300, y: 300 });
  const [isHovered, setIsHovered] = useState(false);
  const cursorRef = useRef(null);

  useEffect(() => {
    const home = document.getElementById("home");

    if (!home) return;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    home.addEventListener("mousemove", handleMouseMove);
    home.addEventListener("mouseenter", handleMouseEnter);
    home.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      home.removeEventListener("mousemove", handleMouseMove);
      home.removeEventListener("mouseenter", handleMouseEnter);
      home.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const itemsPerRow = 3;
  const rows = Math.ceil(items.length / itemsPerRow);

  return (
    <div className="container" style={{ position: "relative" }}>
      {/* Custom Cursor */}
      {isHovered && (
        <div
          ref={cursorRef}
          style={{
            position: "fixed",
            left: mousePosition.x,
            top: mousePosition.y,
            pointerEvents: "none",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 25,
              top: 10,
              backgroundColor: "#9747FF",
              color: "white",
              borderRadius: "33px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span className={styles.cursorSpan}>Xoş gəlmisən!</span>
          </div>
          <div style={{position: "absolute", inset: "0", width: "16px", height: "16px"}}>
            <img style={{width: "100%", height: "100%", objectFit: "cover"}} src={cursorIcon} alt="" />
          </div>
        </div>
      )}

      {/* Content */}
      <div id="home" className={styles.homeWelcome}>
        <div className={styles.welcomeHead}>
          <div>
            <div>XX+ Məzun sayı</div>
            <div className={styles.photosCont}>
              <div>
                <img
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://randomuser.me/api/portraits/men/2.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://randomuser.me/api/portraits/men/3.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <div>XX+ Akademik heyət</div>
            <div className={styles.photosCont}>
              <div>
                <img
                  src="https://randomuser.me/api/portraits/men/4.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://randomuser.me/api/portraits/men/5.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://randomuser.me/api/portraits/men/6.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.welcomeText}>
          Gələcəyin bacarıqları bu günün akademiyasında!
        </div>
        <div className={styles.welcomeSubText}>
          Texnologiya ilə uyğunlaşın, bacarıqlarınızı inkişaf etdirin, gələcəyin
          iş dünyasında uğur qazanmaq üçün lazım olan bilik və təcrübəni bu gün
          əldə edin.
        </div>
        <button>Kəşf et</button>
      </div>

      <div className={styles.eduFields}>
        <div className={styles.heading}>Tədris Sahələri</div>
        <div className={styles.gridBox}>
          <div className={styles.box}>
            <div className={styles.boxHeading}>Advanced Front-end</div>
            <div className={styles.boxDesc}>
              Front-end dünyasında ilk addımları bizimlə at.
            </div>
            <div className={styles.boxBottom}>
              <div className={styles.time}>
                <div>4 ay</div>
                <div>52 saat</div>
              </div>
              <button className={styles.arrowCont}>
                <img className={styles.arrowImg} src={rightArrow} alt="" />
              </button>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.boxHeading}>Back-end Java</div>
            <div className={styles.boxDesc}>
              Back-end dünyasında ilk addımları bizimlə at.
            </div>
            <div className={styles.boxBottom}>
              <div className={styles.time}>
                <div>4 ay</div>
                <div>52 saat</div>
              </div>
              <button className={styles.arrowCont}>
                <img className={styles.arrowImg} src={rightArrow} alt="" />
              </button>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.boxHeading}>Ethical Hacking</div>
            <div className={styles.boxDesc}>
              Kibertəhlükəsizlik dünyasında ilk addımları bizimlə at. 4 ay 52
              saat
            </div>
            <div className={styles.boxBottom}>
              <div className={styles.time}>
                <div>4 ay</div>
                <div>52 saat</div>
              </div>
              <button className={styles.arrowCont}>
                <img className={styles.arrowImg} src={rightArrow} alt="" />
              </button>
            </div>
          </div>
        </div>
        <button>
          <img src={plus} alt="" />
        </button>
      </div>

      <div className={styles.difCont}>
        <div className={styles.heading}>Fərqimiz</div>
        <div className={styles.itemsContainer}>
          {Array.from({ length: rows }).map((_, rowIndex) => {
            const start = rowIndex * itemsPerRow;
            const end = Math.min(start + itemsPerRow, items.length);
            const rowItems = items.slice(start, end);

            return (
              <div key={rowIndex} className={styles.row}>
                {rowItems.map((item, itemIndex) => (
                  <Item key={itemIndex} {...item} />
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeAbove;
