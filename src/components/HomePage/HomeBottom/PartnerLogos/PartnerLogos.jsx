import React from "react";
import styles from "./PartnerLogos.module.scss";

const PartnerLogos = ({ logos }) => {
  return (
    <div className={styles.partnerLogos}>
      <div className={styles.animateWrapper}>
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className={styles.partnerLogo}
          />
        ))}
      </div>
    </div>
  );
};


export default PartnerLogos; 