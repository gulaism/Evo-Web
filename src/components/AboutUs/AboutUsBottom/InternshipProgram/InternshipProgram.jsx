import React from "react";
import styles from "./InternshipProgram.module.scss";
// import circleIcon from "../../../../assets/images/AboutUs/internship icons.svg";
// import cardIcon2 from "../../../../assets/images/AboutUs/cardIcon2.svg";
// import cardArrow from "../../../../assets/images/AboutUs/cardArrow.svg";
import InternshipCard from "../InternshipCard/InternshipCard";



const InternshipProgram = ({ programs }) => {
  return (
    <div className={styles.internShipContainer}>
      <h1 className={styles.internTitle}>Təcrübə Proqramı</h1>
      <p className={styles.internDescription}>
        Təcrübə proqramı sizə real layihələr üzərində işləmək, komanda
        bacarıqlarınızı inkişaf etdirmək üçün geniş imkanlar təqdim edir.
      </p>
      <div className={styles.cardContainer}>
        {programs.map((program, index) => (
          <InternshipCard
            key={index}
            title={program.header}
            description={program.description}
            time={program.features?.[0] || ''}
            mode={program.features?.[1] || ''}
            icon={program.imageString} // Assuming imageString is the icon URL
          />
        ))}
      </div>
    </div>
  );
};


export default InternshipProgram;
