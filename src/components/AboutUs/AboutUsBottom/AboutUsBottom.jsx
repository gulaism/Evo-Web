import React from 'react'
import PartnerLogos from '../../HomePage/HomeBottom/PartnerLogos/PartnerLogos'
import logoPartner from '../../../assets/images/HomePage/HomeBottom/Partners/logoPartner.svg'
import FaqList from '../../HomePage/HomeBottom/FaqListQuestions/FaqListQuestions'
import styles from './AboutUs.module.scss'
import InternshipProgram from './InternShipProgram/InternShipProgram'



const AboutUsBottom = () => {
  // Logoların siyahısı
  const partnerLogos = Array.from({ length: 4 }, (_, index) => ({
    id: index + 1,
    src: logoPartner,
    alt: `Dövlət Məşğulluq Agentliyi ${index + 1}`,
  }));

  //Sual və cavabların siyahısı
  const faqData = [
    { id: 1, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.e vestibulum  e vestibulum ", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.e vestibulum e vestibulum" },
    { id: 2, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { id: 3, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", answer: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { id: 4, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", answer: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt." },
  ];
  return (
    <div style={{marginBlock: "150px"}} className="container">
      {/* PARTNERS SECTION */}
      <section className={styles.partners}>
        <h2>Partnyorlar</h2>
        <PartnerLogos logos={partnerLogos} />
      </section>

      {/* Tecrube programi*/}
     <InternshipProgram/>




      {/* QUESTIONS SECTION */}
      < section className={styles.questions} >
        <FaqList questions={faqData} />
      </section >
    </div>
  )
}

export default AboutUsBottom
