import React, { useEffect } from "react";
import styles from "./PartnerLogos.module.scss";

const PartnerLogos = ({ logos }) => {
  useEffect(() => {
    console.log(logos);
  }, [])
  return (
    <div className={styles.partnerLogos}>
      <div className={styles.animateWrapper}>
        {logos?.map((logo, index) => (
          <img
            key={index}
            src={logo.imageUrl}
            // alt={logo.alt}
            className={styles.partnerLogo}
          />
        ))}
      </div>
    </div>
  );
};


export default PartnerLogos; 