import React, { useEffect, useRef, useState } from "react";
// styles
import styles from "./HomeAbove.module.scss";
// images
import rightArrow from "../../../assets/images/HomePage/Expand_right.svg";
import plus from "../../../assets/images/HomePage/plus.svg";
import cursorIcon from "../../../assets/images/HomePage/Vector.svg";
import minus from "../../../assets/images/HomePage/minus.svg";
import { Link } from "react-router-dom";

const eduFields = [
  {
    header: "Advanced Front-end",
    description: "Front-end dünyasında ilk addımları bizimlə at.",
    time: "4 ay",
    duration: "52 saat",
  },
  {
    header: "Back-end Java",
    description: "Back-end dünyasında ilk addımları bizimlə at.",
    time: "4 ay",
    duration: "52 saat",
  },
  {
    header: "Ethical Hacking",
    description: "Kibertəhlükəsizlik dünyasında ilk addımları bizimlə at.",
    time: "4 ay",
    duration: "52 saat",
  },
  {
    header: "Qrafik/Motion Dizayn",
    description: "Dizayn dünyasında ilk addımları bizimlə at.",
    time: "4 ay",
    duration: "52 saat",
  },
  {
    header: "UX/UI Dizayn",
    description: "Dizayn dünyasında ilk addımları bizimlə at.",
    time: "4 ay",
    duration: "52 saat",
  },
  {
    header: "İnteryer Dizayn",
    description: "Dizayn dünyasında ilk addımları bizimlə at.",
    time: "4 ay",
    duration: "52 saat",
  },
  {
    header: "Data Analitika",
    description: "Data analitika dünyasında ilk addımları bizimlə at.",
    time: "4 ay",
    duration: "52 saat",
  },
  {
    header: "QA Manual Testing",
    description: "QA Testing dünyasında ilk addımları bizimlə at.",
    time: "4 ay",
    duration: "52 saat",
  },
  {
    header: "Rəqəmsal Marketinq",
    description: "Marketinq dünyasında ilk addımları bizimlə at.",
    time: "4 ay",
    duration: "52 saat",
  },
  {
    header: "Agile",
    description: "Agile dünyasında ilk addımları bizimlə at.",
    time: "4 ay",
    duration: "52 saat",
  }
];

const EduField = ({ header, description, time, duration }) => {
  return (
    <div className={styles.box}>
      <div className={styles.boxHeading}>{header}</div>
      <div className={styles.boxDesc}>{description}</div>
      <div className={styles.boxBottom}>
        <div className={styles.time}>
          <div>{time}</div>
          <div>{duration}</div>
        </div>
        <button className={styles.arrowCont}>
          <img className={styles.arrowImg} src={rightArrow} alt="" />
        </button>
      </div>
    </div>
  );
}

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

const Item = ({ title, span, description }) => {
  const splitTitle = title.split(new RegExp(`(${span})`, "i"));

  return (
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
  const [visibleCount, setVisibleCount] = useState(6);
  const [isAnimating, setIsAnimating] = useState(false);
  const [itemsPerRow, setItemsPerRow] = useState(3);
  const gridRef = useRef(null);
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



  useEffect(() => {
    if (gridRef.current) {
      const newHeight = gridRef.current.scrollHeight;
      gridRef.current.style.height = `${newHeight}px`;
      setTimeout(() => {
        gridRef.current.style.height = "auto";
      }, 150);
    }
  }, [visibleCount])
  useEffect(() => {
    if(window.innerWidth <= 600) setItemsPerRow(1);
    else if(window.innerWidth >= 600 && window.innerWidth <= 1024) {
      setItemsPerRow(2);
    }
    else setItemsPerRow(3);
  }, [])
  const rows = Math.ceil(items.length / itemsPerRow);
 
  const handleIncreaseFields = () => {
    const isTabletSize = window.matchMedia("(min-width: 600px) and (max-width: 1024px").matches;
    const incrementValue = isTabletSize ? 2 : 3;
    if (gridRef.current) {
      const currentHeight = gridRef.current.offsetHeight;
      gridRef.current.style.height = `${currentHeight}px`
    }
    setIsAnimating(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + incrementValue, eduFields.length))
      setIsAnimating(false);
    }, 300);
  }

  const handleDecreaseFields = () => {
    if (gridRef.current) {
      const currentHeight = gridRef.current.offsetHeight;
      gridRef.current.style.height = `${currentHeight}px`;
    }
    setIsAnimating(true);
    setTimeout(() => {
      setVisibleCount(6);
      setIsAnimating(false);
    }, 300);
  }

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
              left: 12,
              top: 12,
              fontWeight: "500",
              fontSize: "12px",
              lineHeight: "12px",
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
          <div
            style={{
              position: "absolute",
              inset: "0",
              width: "16px",
              height: "16px",
            }}
          >
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src={cursorIcon}
              alt=""
            />
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
        <div className={styles.button}>
          <Link to="/education" style={{ cursor: "none" }}>
            Kəşf et
          </Link>
        </div>
      </div>

      <div className={styles.eduFields}>
        <div className={styles.heading}>Tədris Sahələri</div>
        <div
          className={`${styles.gridBox} ${
            isAnimating ? styles.opened : styles.closed
          }`}
          ref={gridRef}
        >
          {eduFields.slice(0, visibleCount).map((item, index) => (
            <EduField
              key={index}
              header={item.header}
              description={item.description}
              time={item.time}
              duration={item.duration}
            />
          ))}
        </div>
        <div className={styles.toggleButtonContainer}>
          {visibleCount < eduFields.length ? (
            <button
              className={styles.toggleButton}
              onClick={handleIncreaseFields}
              aria-label="Tədris sahələrini artır"
            >
              {/* Plus işarəsi SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          ) : (
            <button
              className={styles.toggleButton}
              onClick={handleDecreaseFields}
              aria-label="Tədris sahələrini azalt"
            >
              {/* Minus işarəsi SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          )}
        </div>
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
