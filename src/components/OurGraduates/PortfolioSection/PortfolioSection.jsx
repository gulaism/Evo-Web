import React from "react";
import styles from '../PortfolioSection/PortfolioSection.module.scss'

const PortfolioSection = ({ portfolios }) => (
    <section className={styles.portfolio}>
      <h2 className={styles.title}>Tədrisdən Yaradıcılığa</h2>
      <div className={styles.list}>
        {portfolios.map((portfolio) => (
          <div key={portfolio.id} className={styles.card}>
            <img src={portfolio.image} alt={portfolio.name} className={styles.image} />
            <h3 className={styles.name}>{portfolio.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default PortfolioSection;