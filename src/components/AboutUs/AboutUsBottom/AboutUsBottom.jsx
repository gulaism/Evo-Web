import React from 'react';
import { useGetAboutQuery } from '../../../redux/userRtk/services/apiSlice';
import PartnerLogos from '../../HomePage/HomeBottom/PartnerLogos/PartnerLogos';
import FaqList from '../../HomePage/HomeBottom/FaqListQuestions/FaqListQuestions';
import InternshipProgram from './InternShipProgram/InternShipProgram';
import styles from './AboutUs.module.scss';

const AboutUsBottom = () => {
  const { data, isLoading, isError } = useGetAboutQuery();

  if (isLoading) {
    return <div>Yüklənir...</div>;
  }

  if (isError) {
    return <div>Xəta baş verdi!</div>;
  }

  const { partners, experienceProgram, faqs } = data;

  return (
    <div className="container">
      {/* PARTNERS SECTION */}
      <section className={styles.partners}>
        <h2>Partnyorlar</h2>
        <PartnerLogos logos={partners.map((partner, index) => ({
          id: index,
          src: partner, // Assuming this is a URL
          alt: `Partnyor ${index + 1}`,
        }))} />
      </section>

      {/* Təcrübə Proqramı */}
      <InternshipProgram programs={experienceProgram} />

      {/* QUESTIONS SECTION */}
      <section className={styles.questions}>
        <FaqList questions={faqs} />
      </section>
    </div>
  );
};

export default AboutUsBottom;
