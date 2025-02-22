import React from 'react';
import PartnerLogos from '../../HomePage/HomeBottom/PartnerLogos/PartnerLogos';
import FaqList from '../../HomePage/HomeBottom/FaqListQuestions/FaqListQuestions';
import styles from './AboutUs.module.scss';
import InternshipProgram from './InternshipProgram/InternshipProgram';
import { useGetAboutQuery } from '../../../redux/services/apiSlice';

const AboutUsBottom = () => {
  const { data, isLoading, isError } = useGetAboutQuery();

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
          src: partner.imageUrl,
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
