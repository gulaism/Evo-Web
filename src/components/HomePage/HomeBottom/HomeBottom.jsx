import React, { useState } from "react";
import styles from "./HomeBottom.module.scss";
import PartnerLogos from "./PartnerLogos/PartnerLogos";
import FaqList from "./FaqListQuestions/FaqListQuestions";
import TopPersonCard from "./TopPersonCard/TopPersonCard";
import { useGetAboutQuery, useGetTopPerformanceQuery } from "../../../redux/services/apiSlice";
// import { useGetAboutQuery } from "../../../redux/services/aboutApi";
// import { useGetTopPerformanceQuery } from "../../../redux/services/topPerformanceApi";

const HomeBottom = (id) => {
  const { data: aboutData, isLoading: aboutLoading, isError: aboutError } = useGetAboutQuery();
  const { data: topPerformanceData, isLoading: topPerformanceLoading, isError: topPerformanceError } =
  useGetTopPerformanceQuery(id); // Əgər id tərif edilməyibsə, default dəyər təyin olunur


  const [showAll, setShowAll] = useState(false);

  // Yüklənir və ya xəta baş verəndə göstəriləcək mesajlar
  if (aboutLoading || topPerformanceLoading) return <div>Yüklənir...</div>;
  if (aboutError || topPerformanceError) return <div>Xəta baş verdi!</div>;

  // Əgər backend-dən məlumat uğurla gəlibsə:
  const { partners, faqs } = aboutData;
  const topPersons = topPerformanceData ? [topPerformanceData] : [];// Backend-dən gələn zirvəyə qalxanlar

  // Göstəriləcək şəxslər
  const displayedPersons = showAll ? topPersons : topPersons.slice(0, 4);

  return (
    <div className="container">
      {/* PARTNYORLAR */}
      <section className={styles.partners}>
        <h2>Partnyorlar</h2>
        <PartnerLogos
          logos={partners.map((partner, index) => ({
            id: index,
            src: partner,
            alt: `Partnyor ${index + 1}`,
          }))}
        />
      </section>

      {/* ZİRVƏYƏ QALXANLAR */}
      <section className={styles.topPerson}>
        <div className={styles.partners}>
          <h2>Zirvəyə Qalxanlar</h2>
        </div>
        <div className={styles.topPersonContainer}>
          {displayedPersons.map((person) => (
            <TopPersonCard
              key={person.pinnancleId} // Backend-dən gələn ID
              name={person.pinnancleName}
              role={person.fieldOfStudy}
              img={person.pinnancleImage}
              description={person.pinnancleDescription}
            />
          ))}
        </div>

        {/* GÖSTƏR / GİZLƏT DÜYMƏSİ */}
        {topPersons.length > 4 && (
          <div className={styles.toggleButtonContainer}>
            <button className={styles.toggleButton} onClick={() => setShowAll(!showAll)}>
              {showAll ? "Gizlət" : "Hamısını Göstər"}
            </button>
          </div>
        )}
      </section>

      {/* SUALLAR */}
      <section className={styles.questions}>
        <FaqList
          questions={faqs.map((faq) => ({
            id: faq.id,
            question: faq.question,
            answer: faq.answer,
          }))}
        />
      </section>
    </div>
  );
};

export default HomeBottom;
