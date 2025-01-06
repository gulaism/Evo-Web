import React from 'react';
import styles from './FieldsOfStudy.module.scss'; // SCSS faylını daxil edin

const FieldsOfStudy = () => {
    return (
        <div className="container">
            <div className={styles.fieldsOfStudy}>
                <h1 className={styles.fieldsTitle}>Tədris sahələri</h1>
                <p className={styles.fieldsDescription}>
                    Texnologiya ilə uyğunlaşın, bacarıqlarınızı inkişaf etdirin, gələcəyin iş dünyasında uğur qazanmaq üçün
                    lazım olan bilik və təcrübəni bu gün əldə edin.
                </p>
                <div className={styles.fieldsDropdown}>
                    <select>
                        <option className={styles.placeholder} value="">Kurslara bax</option>
                        <option value="programming">Proqramlaşdırma</option>
                        <option value="ethical_hacking">Ethical Hacking</option>
                        <option value="design">Dizayn</option>
                        <option value="data_analytics">Data Analitika</option>
                        <option value="qa_testing">Q/A Manual Testing</option>
                        <option value="digital_marketing">Rəqəmsal Marketinq</option>
                        <option value="agile">Agile</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default FieldsOfStudy;
