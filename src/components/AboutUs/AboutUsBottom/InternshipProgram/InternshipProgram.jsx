import React from "react";

import styles from "./InternshipProgram.module.scss";
import circleIcon from "../../../../assets/images/AboutUs/internship icons.svg";
import cardIcon2 from "../../../../assets/images/AboutUs/cardIcon2.svg";
import cardArrow from "../../../../assets/images/AboutUs/cardArrow.svg";
import InternshipCard from "../InternshipCard/InternshipCard";



const InternshipProgram = () => {
  const cards = [
    {
      icon: circleIcon,
      title: "Üstünlüklər",
      description:
        "Bu müddət ərzində real layihələrdə işləyərək, senior mütəxəssislərdən məsləhət alma imkanı əldə edəcək, karyeranız üçün portfolio yaradacaq, layihənin sonunda “Layihə sertifikatı” ilə təltif olunacaqsınız.",
      time: "3 ay",
      mode: "Hibrid",
      arrow: cardArrow,
    },
    {
      icon: cardIcon2,
      title: "Kimlər müraciət edə bilər?",
      description:
        "Front-end, Back-end, UX/UI və QA sahələrində müxtəlif üsullarla (onlayn və ya əyani təlimlər, self-study) təhsil almış şəxslərə bacarıqlarını real layihələr əsasında praktiki olaraq tətbiq etmək imkanı təklif edirik.",
      time: "3 ay",
      mode: "Hibrid",
      arrow: cardArrow,
    },
    {
      title: "Agile təliminə yiyələn",
      description:
        "Layihələrin daha sürətli, çevik və effektiv idarə olunmasını təmin edən üsullar, Scrum və Kanban kimi metodologiyalar, komanda əməkdaşlığını, iterativ prosesləri və müştəri mərkəzli yanaşmanı öyrənəcəksən.",
      time: "2 ay",
      mode: "Campus",
      arrow: cardArrow,
    },
    {
      title: "Jira ilə layihələri idarə et",
      description:
        "Təcrübə proqramı sizə real layihələr üzərində işləmək, komanda bacarıqlarınızı inkişaf etdirmək, CV və müsahibə hazırlığı, mentor dəstəyi, kariyera yönləndirilməsi və networking qurmaq üçün geniş imkanlar təqdim edir.",
      time: "3 ay",
      mode: "Hibrid",
      arrow: cardArrow,
    },
  ];

  return (
    <div className={styles.internShipContainer}>
      <h1 className={styles.internTitle}>Təcrübə Proqramı</h1>
      <p className={styles.internDescription}>
        Təcrübə proqramı sizə real layihələr üzərində işləmək, komanda
        bacarıqlarınızı inkişaf etdirmək, CV və müsahibə hazırlığı, mentor
        dəstəyi, kariyera yönləndirilməsi və networking qurmaq üçün geniş
        imkanlar təqdim edir.
      </p>
      <div className={styles.cardContainer}>
        {cards.map((card, index) => (
          <InternshipCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default InternshipProgram;
