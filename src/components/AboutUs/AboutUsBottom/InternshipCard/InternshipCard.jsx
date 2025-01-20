import React from "react";
import styles from './InternshipCard.module.scss';

const InternshipCard = ({ icon, title, description, time, mode, arrow }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeading}>
        {icon && <img src={icon} alt={title} />}
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
      <div className={styles.details}>
        <div className={styles.time}>
          <span>{time}</span>
          <span>{mode}</span>
        </div>
        {arrow && <img src={arrow} alt="arrow" />}
      </div>
    </div>
  );
};

export default InternshipCard;
