import React from "react";
import styles from "./TopPersonCard.module.scss";

const TopPersonCard = ({ name, role, description, img, badge }) => {
  return (
    <div className={styles.card}>
      {badge && <div className={styles.badge}>{badge}</div>}
      <div className={styles.cardHeader}>
        <img src={img} alt={name} className={styles.avatar} />
        <div className={styles.info}>
          <h3>{name}</h3>
          <p>{role}</p>
        </div>
      </div>
      <div className={styles.cardBody}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TopPersonCard;
