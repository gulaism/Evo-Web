import React from "react";
import styles from "./Statistics.module.scss";

const Statistics = () => {
  return (
    <div className={styles.statistics}>
      <h2>Statistikalar</h2>
      <div className={styles.statsCards}>
        <div className={styles.card}>Ümumi Şagirdlər: <span>1,234</span></div>
        <div className={styles.card}>Kurslar: <span>56</span></div>
        <div className={styles.card}>Mezunlar: <span>789</span></div>
      </div>
    </div>
  );
};

export default Statistics;
