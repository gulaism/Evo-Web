import React from "react";
import styles from "./Partners.module.scss";

const Partners = () => {
  return (
    <div className={styles.partners}>
      <h2>Tərəfdaşlarımız</h2>
      <div className={styles.partnerLogos}>
        <img src="/images/partner1.png" alt="Partner 1" />
        <img src="/images/partner2.png" alt="Partner 2" />
        <img src="/images/partner3.png" alt="Partner 3" />
      </div>
    </div>
  );
};

export default Partners;
