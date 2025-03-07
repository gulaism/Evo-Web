import React from "react";
import styles from "./EducationFields.module.scss";
import plusIcon from "../../../assets/images/admin/Partners/plusIcon.svg";
import editIcon from "../../../assets/images/admin/Statistics/editIcon.svg";
import trashIcon from "../../../assets/images/admin/Partners/trashIcon.svg";

const data = [
    {
        title: "Tədris Sahələri Dropdown",
        subtitle: "Başlıq/Kateqoriya",
        items: ["Proqramlaşdırma", "Dizayn", "Data Analitika", "Rəqəmsal Marketinq"],
    },
    {
        title: "Tədris Sahələri",
        subtitle: "Kurslar",
        items: ["Advanced Front-end", "Back-end Java", "Qrafik/Motion Dizayn", "Data Analitika", "Rəqəmsal Marketinq"],
    },
];

const EducationFields = () => {
    return (
        <div className={styles.container}>
            <div className={styles.heroBody}>
                <h4 className={styles.heroTitle}>Herobody</h4>
                <h2 className={styles.heroHeading}>Giriş</h2>
                <div className={styles.inputBox}>
                    <button className={styles.editBtn}>
                        <img src={editIcon} alt="Edit" />
                    </button>
                    <p className={styles.text}>
                        Texnologiya ilə uyğunlaşın, bacarıqlarınızı inkişaf etdirin, gələcəyin iş dünyasında uğur qazanmaq üçün lazım olan bilik və təcrübəni bu gün əldə edin.
                    </p>
                </div>
            </div>

            <div className={styles.sections}>
                {data.map((section, index) => (
                    <div key={index} className={styles.box}>
                        <h4 className={styles.sectionTitle}>{section.title}</h4>
                        <div className={styles.titleAdd}>
                            <h3 className={styles.subTitle}>{section.subtitle}</h3>
                            <button className={styles.addBtn}>
                                <img src={plusIcon} alt="Add" />
                            </button>
                        </div>

                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th></th>
                                    {/* <th>{section.subtitle}</th> */}
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {section.items.map((item, idx) => (
                                    <tr key={idx} className={styles.row}>
                                        <td>
                                            <button className={styles.addBtn}>
                                                <img src={plusIcon} alt="Add" />
                                            </button>
                                        </td>
                                        <td>
                                            <button className={styles.editBtn}>
                                                <img src={editIcon} alt="Edit" />
                                            </button>
                                        </td>
                                        <td>
                                            <input type="text" className={styles.input} value={item} readOnly />
                                        </td>
                                        <td>
                                            <button className={styles.deleteBtn}>
                                                <img src={trashIcon} alt="Delete" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EducationFields;
