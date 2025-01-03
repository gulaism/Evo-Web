import React, { useState } from "react";
import styles from "./HomeBottom.module.scss";
import logoPartner from "../../../../assets/images/HomeBottom/Partners/logoPartner.svg";
import topPerson from "../../../../assets/images/HomeBottom/TopPerson/topPersonImg.svg";
import PartnerLogos from "./PartnerLogos/PartnerLogos";
import TopPersonCard from "./TopPersoncard/TopPersonCard";
import FaqList from "./FaqListQuestions/FaqListQuestions";



const HomeBottom = () => {
  const faqData = [
    { id: 1, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.e vestibulum  e vestibulum ", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.e vestibulum e vestibulum" },
    { id: 2, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { id: 3, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", answer: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { id: 4, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", answer: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt." },
  ];
  // Logoların siyahısı
  const partnerLogos = Array.from({ length: 4 }, (_, index) => ({
    id: index + 1,
    src: logoPartner,
    alt: `Dövlət Məşğulluq Agentliyi ${index + 1}`,
  }));

  // "Zirvəyə Qalxanlar" üçün məlumatlar
  const [topPersons] = useState([
    {
      id: 1,
      name: "Paşayev Namiq",
      role: "Codeon / Rəqəmsal marketoloq",
      img: topPerson,
      description: "Mən - Paşayev Namiq, Rəqəmsal Marketinq kursuna qatılmaq həyatda dönüş nöqtəsi oldu. Təlimçimizin keçdiyi hər dərs, hər tapşırıq mənə yeni bir dünyanı açdı və bu bilikləri praktikaya tətbiq etməyim sayəsində CodeOn-da işə başlamaq kimi böyük bir uğur qazandım.Evo Academy isə sadəcə bir təhsil ocağı deyildi; orada mən bir marketoloq olaraq formalaşdım, öz bacarıqlarımı kəşf etdim və inkişaf etdirdim. Əgər karyeranızda sürətli bir sıçrayış etmək istəyirsinizsə, bu kurs sizin üçün mükəmməl seçimdir! nkişaf etdirdi"
    },
    {
      id: 2,
      name: "Əliyeva Aygün",
      role: "UI/UX Dizayner",
      img: topPerson,
      description: "Mən - Paşayev Namiq, Rəqəmsal Marketinq kursuna qatılmaq həyatımda dönüş nöqtəsi oldu. Təlimçimizin keçdiyi hər dərs, hər tapşırıq mənə yeni bir dünyanı açdı və bu bilikləri praktikaya tətbiq etməyim sayəsində CodeOn-da işə başlamaq kimi böyük bir uğur qazandım.Evo Academy isə sadəcə bir təhsil ocağı deyildi; orada mən bir marketoloq olaraq formalaşdım, öz bacarıqlarımı kəşf etdim və inkişaf etdirdim. Əgər karyeranızda sürətli bir sıçrayış etmək istəyirsinizsə, bu kurs sizin üçün mükəmməl seçimdir! nkişaf etdirdi"
    },
    {
      id: 3,
      name: "Məmmədov Elçin",
      role: "Full Stack Developer",
      img: topPerson,
      description: "Mən - Paşayev Namiq, Rəqəmsal Marketinq kursuna qatılmaq həyatımda dönüş nöqtəsi oldu. Təlimçimizin keçdiyi hər dərs, hər tapşırıq mənə yeni bir dünyanı açdı və bu bilikləri praktikaya tətbiq etməyim sayəsində CodeOn-da işə başlamaq kimi böyük bir uğur qazandım.Evo Academy isə sadəcə bir təhsil ocağı deyildi; orada mən bir marketoloq olaraq formalaşdım, öz bacarıqlarımı kəşf etdim və inkişaf etdirdim. Əgər karyeranızda sürətli bir sıçrayış etmək istəyirsinizsə, bu kurs sizin üçün mükəmməl seçimdir!",
    },
    {
      id: 4,
      name: "Hüseynova Günay",
      role: "Backend Developer",
      img: topPerson,
      description: "Mən - Paşayev Namiq, Rəqəmsal Marketinq kursuna qatılmaq həyatımda dönüş nöqtəsi oldu. Təlimçimizin keçdiyi hər dərs, hər tapşırıq mənə yeni bir dünyanı açdı və bu bilikləri praktikaya tətbiq etməyim sayəsində CodeOn-da işə başlamaq kimi böyük bir uğur qazandım.Evo Academy isə sadəcə bir təhsil ocağı deyildi; orada mən bir marketoloq olaraq formalaşdım, öz bacarıqlarımı kəşf etdim və inkişaf etdirdim. Əgər karyeranızda sürətli bir sıçrayış etmək istəyirsinizsə, bu kurs sizin üçün mükəmməl seçimdir!"
    },
    {
      id: 5,
      name: "Rzayev Vüqar",
      role: "DevOps Engineer",
      img: topPerson,
      description: "Mən - Paşayev Namiq, Rəqəmsal Marketinq kursuna qatılmaq həyatımda dönüş nöqtəsi oldu. Təlimçimizin keçdiyi hər dərs, hər tapşırıq mənə yeni bir dünyanı açdı və bu bilikləri praktikaya tətbiq etməyim sayəsində CodeOn-da işə başlamaq kimi böyük bir uğur qazandım.Evo Academy isə sadəcə bir təhsil ocağı deyildi; orada mən bir marketoloq olaraq formalaşdım, öz bacarıqlarımı kəşf etdim və inkişaf etdirdim. Əgər karyeranızda sürətli bir sıçrayış etmək istəyirsinizsə, bu kurs sizin üçün mükəmməl seçimdir!",
    },
  ]);

  // Kartların göstərilmə idarəsi
  const [showAll, setShowAll] = useState(false);

  // Göstəriləcək kartlar
  const displayedPersons = showAll ? topPersons : topPersons.slice(0, 4);

  return (
    <div className="container">
      {/* PARTNERS SECTION */}
      <section className={styles.partners}>
        <h2>Partnyorlar</h2>
        <PartnerLogos logos={partnerLogos} />
      </section>

      {/* TOP-PERSON SECTION */}
      <section className={styles.topPerson}>
        <div className={styles.partners}>
        <h2>Zirvəyə Qalxanlar</h2>
        </div>
        <div className={styles.topPersonContainer}>
          {displayedPersons.map((person) => (
            <TopPersonCard
              key={person.id}
              name={person.name}
              role={person.role}
              img={person.img}
              description={person.description}
            />
          ))}
        </div>
        {/* SHOW MORE / LESS BUTTON */}
        {topPersons.length > 4 && (
          <div className={styles.toggleButtonContainer}>
          <button
            className={styles.toggleButton}
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "−" : "+"}
          </button>
          </div>
        )}
      </section>


      {/* QUESTIONS SECTION */}
      <section className={styles.questions}>
        <FaqList questions={faqData} />
      </section>
    </div>
  );
};

export default HomeBottom;
