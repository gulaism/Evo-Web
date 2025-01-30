import React from "react";
import styles from '../CompaniesSection/CompaniesSection.module.scss'

const CompaniesSection = ({ companies }) => (
  <section className={styles.companies}>
    <h2 className={styles.title}>Məzunların işlədiyi şirkətlər</h2>
    <div className={styles.list}>
      {companies.map((company, index) => (
        <div key={index} className={styles.item}>
          <img src="company-logo.png" alt="Company Logo" className={styles.logo} />
          <p className={styles.name}>{company}</p>
        </div>
      ))}
    </div>
  </section>
);

export default CompaniesSection;