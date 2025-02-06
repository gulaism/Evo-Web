import React, { useEffect, useState } from "react";
// import { useGetAllDataQuery } from "../../../redux/services/graduateApi";
import styles from "./PortfolioSection.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { useGetAllDataQuery } from "../../../redux/services/apiSlice";

const PortfolioSection = () => {
    const { data, error, isLoading } = useGetAllDataQuery();
    const [portfolios, setPortfolios] = useState([]);

    useEffect(() => {
        if (data) {
            setPortfolios(data.studentWorks || []);  // API-dən gələn portfelləri yoxlayırıq
        }
    }, [data]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error occurred!</div>;

    return (
        <section className={styles.portfolio}>
            <h2 className={styles.title}>Tədrisdən Yaradıcılığa</h2>
            <p className={styles.description}>
                Məzunlarımızın uğurları, bizim davamlı inkişafımızın və təhsil sahəsindəki öndə olmağı məqsədimizin təcəssümüdür.
            </p>

            <div className={styles.grid}>
                <Swiper
                    slidesPerView={2.5}
                    spaceBetween={20}
                    freeMode={true}  // Əllə sürüşdürmə
                    modules={[FreeMode]}  // FreeMode modulunu aktiv edirik
                    className={styles.swiper}
                    loop={false}  // Avtomatik dövr etməməsi üçün loop-u deaktiv edirik
                    autoplay={false}  // Avtomatik keçişi deaktiv edirik
                >
                    {portfolios.map((portfolio) => (
                        <SwiperSlide key={portfolio.id} className={styles.swiperSlide}>
                            <div className={styles.card}>
                                <div className={styles.profile}>
                                    <img src={portfolio.studentProfilePhoto} alt={portfolio.name} className={styles.avatar} />
                                    <div>
                                        <h3 className={styles.name}>{portfolio.name}</h3>
                                        <p className={styles.field}>{portfolio.work}</p>
                                    </div>
                                </div>
                                <p className={styles.review}>{portfolio.review}</p>
                                <div className={styles.images}>
                                    {portfolio.worksPhotos.slice(0, 4).map((work, index) => (
                                        <div key={index} className={styles.cardİmg}>
                                            <img src={work} alt={`Work ${index}`} className={styles.workImage} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default PortfolioSection;

