import React from "react";
import styles from "./ScholarshipSection.module.scss";
import { AiOutlineEdit } from "react-icons/ai";

const scholarshipData = [
    { title: "Giriş", content: "Burada sizə yalnız nəzəri biliklər deyil, həm də real iş mühitində tətbiq olunan praktiki bacarıqlar öyrədilir. Hər bir müəllimimiz texnologiya sahəsindəki yenilikləri yaxından izləyir və öz dərslərində müasir yanaşmaları tətbiq edir." },
    { title: "Sloqan", content: "InnoTech Təqaüd Proqramı", isHeading: true },
    {
        title: "Təsvir",
        content: "Akademiyamızda ödənişsiz Təqaüd proqramına qoşulun və Məntiq, İnformatika, İngilis dili fənlərində nəticələrinizə əsasən endirimlər əldə edin. Bizim missiyamız texnologiya sahəsində gələcəyin peşəkarlarını hazırlamaq və onların iş dünyasına uğurlu inteqrasiyasını təmin etməkdir. Evo Computer Akademiyası ilə gələcəyinizə investisiya edin!"
    }
];

const ScholarshipProgram = () => {
    return (
        <section className={styles.scholarshipProgram}>
            <h4 className={styles.subtitle}>Təqaüd Proqramı</h4>

            {scholarshipData.map(({ title, content, isHeading }, index) => (
                <div key={index}>
                    <h4 className={styles.title}>{title}</h4>
                    <div className={styles.inputContainer}>
                        <AiOutlineEdit className={styles.icon} />
                        {isHeading ? (
                            <h3 className={styles.slogan}>{content}</h3>
                        ) : (
                            <p className={styles.description}>{content}</p>
                        )}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default ScholarshipProgram;
