import React from "react";
import styles from "./InternshipProgram.module.scss";
import cardArrow from "../../../../assets/images/AboutUs/cardArrow.svg";
import InternshipCard from "../InternshipCard/InternshipCard";

const InternshipProgram = ({ programs }) => {
  if (!programs || programs.length === 0) {
    return <p>Məlumat yoxdur.</p>; // Əgər backend boş data qaytarsa
  }

  return (
    <div className={styles.internShipContainer}>
      <h1 className={styles.internTitle}>Təcrübə Proqramı</h1>
      <p className={styles.internDescription}>
        Təcrübə proqramı sizə real layihələr üzərində işləmək, komanda
        bacarıqlarınızı inkişaf etdirmək üçün geniş imkanlar təqdim edir.
      </p>
      <div className={styles.cardContainer}>
        {programs.map((program) => (
          <InternshipCard
            key={program.id}
            title={program.header}
            description={program.description}
            time={program.features?.[0] || ""}
            mode={program.features?.[1] || ""}
            icon={program.imageString}
            arrow={cardArrow}
          />
        ))}
      </div>
    </div>
  );
};

export default InternshipProgram;
