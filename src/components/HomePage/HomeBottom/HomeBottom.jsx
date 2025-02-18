import React, { useState } from "react";
import styles from "./HomeBottom.module.scss";
import PartnerLogos from "./PartnerLogos/PartnerLogos";
import FaqList from "./FaqListQuestions/FaqListQuestions";
import TopPersonCard from "./TopPersonCard/TopPersonCard";
import { useGetHomeQuery } from "../../../redux/services/apiSlice";

const HomeBottom = () => {
  const { data, isLoading, isError } = useGetHomeQuery();
  const [showAll, setShowAll] = useState(false);

  if (isLoading) return <div>Yüklənir...</div>;
  if (isError) return <div>Xəta baş verdi!</div>;

  const { partnerList, climberList, faqs } = data;
  const displayedPersons = showAll ? climberList : climberList.slice(0, 4);

  return (
    <div className="container">
      {/* PARTNYORLAR */}
      <section className={styles.partners}>
        <h2>Partnyorlar</h2>
        <PartnerLogos logos={partnerList.map((partner) => ({
          id: partner.id,
          src: partner.imageUrl,
          alt: partner.name,
        }))} />
      </section>

      {/* ZİRVƏYƏ QALXANLAR */}
      <section className={styles.topPerson}>
        <div className={styles.partners}>
          <h2>Zirvəyə Qalxanlar</h2>
        </div>
        <div className={styles.topPersonContainer}>
          {displayedPersons.map((person, index) => (
            <TopPersonCard
              key={index}
              name={person.name}
              role={person.company}
              img={person.profilePicture}
              description={person.description.join(" ")}
            />
          ))}
        </div>

        {climberList.length > 4 && (
          <div className={styles.toggleButtonContainer}>
            <button className={styles.toggleButton} onClick={() => setShowAll(!showAll)}>
              {showAll ? "Gizlət" : "Hamısını Göstər"}
            </button>
          </div>
        )}
      </section>

      {/* SUALLAR */}
      <section className={styles.questions}>
        <FaqList questions={faqs} />
      </section>
    </div>
  );
};

export default HomeBottom;
