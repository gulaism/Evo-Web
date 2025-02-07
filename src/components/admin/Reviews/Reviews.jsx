import React from "react";
import styles from "./Reviews.module.scss";

const Reviews = () => {
  return (
    <div className={styles.reviews}>
      <h2>Tələbə Rəyləri</h2>
      <div className={styles.reviewList}>
        <div className={styles.reviewCard}>
          "Bu kurs mənim karyerama böyük təsir etdi!" - Əli H.
        </div>
        <div className={styles.reviewCard}>
          "Təlimçilər çox peşəkardırlar." - Leyla M.
        </div>
        <div className={styles.reviewCard}>
          "Kursun materialları çox keyfiyyətlidir." - Orxan A.
        </div>
      </div>
    </div>
  );
};

export default Reviews;
