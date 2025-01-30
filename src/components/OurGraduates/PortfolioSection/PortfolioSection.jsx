import React, { useState } from "react";
import styles from "./PortfolioSection.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";

const PortfolioSection = ({ portfolios }) => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    // <div className="container">
    <section className={styles.portfolio}>
      <h2 className={styles.title}>Tədrisdən Yaradıcılığa</h2>
      <p className={styles.description}>
        Məzunlarımızın uğurları, bizim davamlı inkişafımızın və təhsil sahəsindəki öndə olmağı məqsədimizin təcəssümüdür.
      </p>

      <div className={styles.grid}>
        <Swiper
          slidesPerView={2.5}
          spaceBetween={20}
          freeMode={true}
          modules={[FreeMode]}
          className={styles.swiper}
        >
          {portfolios.map((portfolio) => (
            <SwiperSlide className={styles.swiperSlide} key={portfolio.id}>
              <div
                className={`${styles.card} ${hoveredId === portfolio.id ? styles.hovered : ""}`}
                onMouseEnter={() => setHoveredId(portfolio.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className={styles.profile}>
                  <img src={portfolio.image} alt={portfolio.name} className={styles.avatar} />
                  <div style={{ textAlign: "left" }}>
                    <h3 className={styles.name}>{portfolio.name}</h3>
                    <p className={styles.field}>{portfolio.field}</p>
                  </div>
                </div>
                <p className={styles.review}>
                  "Evo, biliklə yanaşı ilham verən, müəllimləri isə hər dərsdə dəstək və motivasiya mənbəyi olan bir ailədir!"
                </p>
                <div className={styles.images}>
                  {portfolio.works.map((work, index) => (
                    <img
                      key={index}
                      src={work}
                      alt={`work-${index}`}
                      className={`${styles.workImage} ${hoveredId === index ? styles.hovered : ""}`}
                      onMouseEnter={() => setHoveredId(index)}
                      onMouseLeave={() => setHoveredId(null)}
                    />
                  ))}
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    // </div>
  );
};

export default PortfolioSection;
