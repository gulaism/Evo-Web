import React from "react";
import styles from "./HeroSection.module.scss";
import { AiOutlineEdit } from "react-icons/ai";

const HeroSection = () => {
    return (
      <section className={styles.heroSection}>
        <h4 className={styles.subtitle}>Herobody</h4>
        <h4 className={styles.title}>Hashtag</h4>
        <div className={styles.inputContainer}>
          <AiOutlineEdit className={styles.icon} />
          <h2 className={styles.hashtag}>#hədəflərinizləfərqlənin</h2>
        </div>
        <h4 className={styles.title}>Sloqan</h4>
        <div className={styles.inputContainer}>
          <AiOutlineEdit className={styles.icon} />
          <p className={styles.slogan}>Öyrətmək bizdən, kariyeranı qurmaq səndən!</p>
        </div>
        <div className={styles.description}>
          <h4>Təsvir</h4>
          <p>
            Evo Computer Akademiyası 2018-ci ildən etibarən texnologiya sahəsində peşəkar təhsil verən qabaqcıl tədris mərkəzidir. Akademiya müasir dövrün tələblərini nəzərə alaraq, müxtəlif texnoloji istiqamətlər üzrə keyfiyyətli təhsil proqramları təqdim edir.
            Bizim missiyamız texnologiya sahəsində gələcəyin peşəkarlarını hazırlamaq və onların iş dünyasına uğurlu inteqrasiyasını təmin etməkdir. Evo Computer Akademiyası ilə gələcəyinizə investisiya edin!
          </p>
        </div>
      </section>
    );
};

export default HeroSection;
