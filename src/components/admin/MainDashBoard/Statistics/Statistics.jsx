import React, { useEffect } from "react";
import styles from "./Statistics.module.scss";
import editIcon from "../../../../assets/images/admin/Statistics/editIcon.svg";

const Statistics = ({setIsEnabled}) => {


  const handleChangeDefaultValue = (e) => {
    setIsEnabled(true);
    //set the value of the input
    // let value = e.target.value;
    // console.log(value);
  }
  

  return (
    <div className={styles.statistics}>
      <div className={styles.title}>Herobody</div>
      <div className={styles.sections}>
        <section>
          <div className={styles.sectionTitle}>Statistika</div>
          <div className={styles.inputCont}>
            <div className={styles.iconCont}>
              <img src={editIcon} alt="" />
            </div>
            <input
              type="number"
              onChange={() => setIsEnabled(true)}
              placeholder="XX+ Məzun sayı"
            />
            <div className={styles.ppCont}>
              <div>
                <img src="https://thispersondoesnotexist.com/" alt="" />
              </div>
              <div>
                <img src="https://thispersondoesnotexist.com/" alt="" />
              </div>
              <div>
                <img src="https://thispersondoesnotexist.com/" alt="" />
              </div>
            </div>
          </div>
          <div className={styles.inputCont}>
            <div className={styles.iconCont}>
              <img src={editIcon} alt="" />
            </div>
            <input
              type="number"
              onChange={() => setIsEnabled(true)}
              placeholder="XX+ Pedaqoji Kollektiv"
            />
            <div className={styles.ppCont}>
              <div>
                <img src="https://thispersondoesnotexist.com/" alt="" />
              </div>
              <div>
                <img src="https://thispersondoesnotexist.com/" alt="" />
              </div>
              <div>
                <img src="https://thispersondoesnotexist.com/" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.sectionTitle}>Sloqan</div>
          <div className={styles.inputCont}>
            <div className={styles.iconCont}>
              <img src={editIcon} alt="" />
            </div>
            <input
              type="text"
              onChange={(e) => handleChangeDefaultValue(e)}
              defaultValue="Gələcəyin bacarıqları bu günün akademiyasında!"
            />
          </div>
        </section>
        <section>
          <div className={styles.sectionTitle}>Təsvir</div>
          <div className={styles.inputCont}>
            <div className={styles.iconCont}>
              <img src={editIcon} alt="" />
            </div>
            <input
              type="text" onChange={() => setIsEnabled(true)}
              defaultValue="Texnologiya ilə uyğunlaşın, bacarıqlarınızı inkişaf etdirin, gələcəyin iş dünyasında uğur qazanmaq üçün lazım olan bilik və təcrübəni bu gün əldə edin."
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Statistics;
