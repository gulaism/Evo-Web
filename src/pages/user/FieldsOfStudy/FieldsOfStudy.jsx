import React, { useState } from "react";
import styles from "./FieldsOfStudy.module.scss"; // SCSS faylını daxil edin
import rightArrow from "../../../assets/images/HomePage/Expand_right.svg";
import { FaChevronDown } from "react-icons/fa";

const eduFields = [
    { id: 1, category: "programming", header: "Advanced Front-end", description: "Front-end dünyasında ilk addımları bizimlə at.", time: "4 ay", duration: "52 saat" },
    { id: 2, category: "programming", header: "Back-end Java", description: "Back-end dünyasında ilk addımları bizimlə at.", time: "4 ay", duration: "52 saat" },
    { id: 3, category: "ethical_hacking", header: "Ethical Hacking", description: "Kibertəhlükəsizlik dünyasında ilk addımları bizimlə at.", time: "4 ay", duration: "52 saat" },
    { id: 4, category: "design", header: "Qrafik/Motion Dizayn", description: "Dizayn dünyasında ilk addımları bizimlə at.", time: "4 ay", duration: "52 saat" },
    { id: 5, category: "design", header: "UX/UI Dizayn", description: "Dizayn dünyasında ilk addımları bizimlə at.", time: "4 ay", duration: "52 saat" },
    { id: 6, category: "data_analytics", header: "Data Analitika", description: "Data analitika dünyasında ilk addımları bizimlə at.", time: "4 ay", duration: "52 saat" },
    { id: 7, category: "qa_testing", header: "QA Manual Testing", description: "QA Testing dünyasında ilk addımları bizimlə at.", time: "4 ay", duration: "52 saat" },
    { id: 8, category: "digital_marketing", header: "Rəqəmsal Marketinq", description: "Marketinq dünyasında ilk addımları bizimlə at.", time: "4 ay", duration: "52 saat" },
    { id: 9, category: "agile", header: "Agile", description: "Agile dünyasında ilk addımları bizimlə at.", time: "4 ay", duration: "52 saat" },
];

const FieldsOfStudy = () => {
    const [selectedCategory, setSelectedCategory] = useState("programming");

    const filteredFields = eduFields.filter((field) => field.category === selectedCategory);

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    return (
        <div className="container">
            <div className={styles.fieldsOfStudy}>
                <h1 className={styles.fieldsTitle}>Tədris sahələri</h1>
                <p className={styles.fieldsDescription}>
                    Texnologiya ilə uyğunlaşın, bacarıqlarınızı inkişaf etdirin, gələcəyin iş dünyasında uğur qazanmaq üçün lazım olan bilik və təcrübəni bu gün əldə edin.
                </p>

                {/* Dropdown */}
                <div className={styles.fieldsDropdown}>
                    <select value={selectedCategory} onChange={handleCategoryChange}>
                        <option value="programming">Proqramlaşdırma</option>
                        <option value="ethical_hacking">Ethical Hacking</option>
                        <option value="design">Dizayn</option>
                        <option value="data_analytics">Data Analitika</option>
                        <option value="qa_testing">Q/A Manual Testing</option>
                        <option value="digital_marketing">Rəqəmsal Marketinq</option>
                        <option value="agile">Agile</option>
                    </select>
                    <span className={styles.iconWrapper}>
                        <FaChevronDown style={{ fontSize: "14px" }} />
                    </span>
                </div>

                {/* GridBox */}
                <div className={styles.gridBox}>
                    {filteredFields.map((field) => (
                        <div key={field.id} className={styles.gridItem}>
                            <h3 className={styles.itemHeader}>{field.header}</h3>
                            <p className={styles.itemDescription}>{field.description}</p>
                            <div className={styles.boxBottom}>
                                <div className={styles.time}>
                                    {field.time && <div>{field.time}</div>}
                                    {field.duration && <div>{field.duration}</div>}
                                </div>
                                <button className={styles.arrowCont}>
                                    <img className={styles.arrowImg} src={rightArrow} alt="" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FieldsOfStudy;
