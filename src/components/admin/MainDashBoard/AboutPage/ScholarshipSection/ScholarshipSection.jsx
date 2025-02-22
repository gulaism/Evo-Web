import React from "react";
import styles from "./ScholarshipSection.module.scss";
import { AiOutlineEdit } from "react-icons/ai";

const ScholarshipProgram = () => {
    return (
        <section className={styles.scholarshipProgram}>
            <h4 className={styles.subtitle}>Təqaüd Proqramı</h4>

            <h2 className={styles.title}>Giriş</h2>
            <div className={styles.inputContainer}>
                <AiOutlineEdit className={styles.icon} />
                <p className={styles.intro}>
                    Burada sizə yalnız nəzəri biliklər deyil, həm də real iş mühitində tətbiq olunan praktik bacarıqlar öyrədilir.
                </p>
            </div>

            <h4 className={styles.title}>Sloqan</h4>
            <div className={styles.inputContainer}>
                <AiOutlineEdit className={styles.icon} />
                <h3 className={styles.slogan}>InnoTech Təqaüd Proqramı</h3>
            </div>

            <h4 className={styles.title}>Təsvir</h4>
            <div className={styles.inputContainer}>
                <AiOutlineEdit className={styles.icon} />
                <p className={styles.description}>
                    Akademiyamızda ödənişsiz Təqaüd proqramına qoşulun və Məntiq, İnformatika, İngilis dili fənlərində nəticələrinizə əsasən endirimlər əldə edin.
                    Bizim missiyamız texnologiya sahəsində gələcəyin peşəkarlarını hazırlamaq və onların iş dünyasına uğurlu inteqrasiyasını təmin etməkdir. 
                    Evo Computer Akademiyası ilə gələcəyinizə investisiya edin!
                </p>
            </div>
        </section>
    );
};

export default ScholarshipProgram;
