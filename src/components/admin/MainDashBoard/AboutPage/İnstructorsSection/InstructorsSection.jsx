import React from "react";
import styles from "./InstructorsSection.module.scss";

const InstructorsSection = () => {
    return (
        <section className={styles.instructors}>
            <h4 className={styles.subtitle}>İnstruktorlar</h4>
            <h4 className={styles.title}>Təsvir</h4>
            <p className={styles.description}>
                Burada sizə yalnız nəzəri biliklər deyil, həm də real iş mühitində tətbiq olunan praktiki bacarıqlar öyrədilir. Hər bir müəllimimiz texnologiya sahəsindəki yenilikləri yaxından izləyir və öz dərslərində müasir yanaşmaları tətbiq edir.
            </p>
            <button className={styles.saveButton}>Yadda saxla</button>
        </section>
    );
};

export default InstructorsSection;