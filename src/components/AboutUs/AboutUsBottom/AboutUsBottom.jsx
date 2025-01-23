import React from 'react';
import { useGetAboutQuery } from '../../../redux/userRtk/services/apiSlice';
import PartnerLogos from '../../HomePage/HomeBottom/PartnerLogos/PartnerLogos';
import FaqList from '../../HomePage/HomeBottom/FaqListQuestions/FaqListQuestions';
import InternshipProgram from './InternShipProgram/InternShipProgram';
import styles from './AboutUs.module.scss';

const AboutUsBottom = () => {
  const { data = {}, isLoading, isError } = useGetAboutQuery();

  console.log('Backend-dən gələn data:', data);

  if (isLoading) {
    return <div>Yüklənir...</div>;
  }

  if (isError) {
    return <div>Xəta baş verdi!</div>;
  }

  if (!data?.partners || !data?.experienceProgram || !data?.faqs) {
    return <div>Məlumat yoxdur.</div>;
  }

  const { partners, experienceProgram, faqs } = data;

  return (
    <div style={{marginBlock: "150px"}} className="container">
      {/* PARTNERS SECTION */}
      <section className={styles.partners}>
        <h2>Partnyorlar</h2>
        <PartnerLogos logos={partners.map((partner, index) => ({
          id: index,
          src: partner,
          alt: `Partnyor ${index + 1}`,
        }))} />
      </section>

      <InternshipProgram programs={experienceProgram} />

      <section className={styles.questions}>
        <FaqList questions={faqs.map((faq) => ({
          id: faq.id,
          question: faq.question, // Düzgün məlumat ötürülür
          answer: faq.answer,
        }))} />
      </section>
    </div>
  );
};

export default AboutUsBottom;
