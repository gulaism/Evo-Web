import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "../GraduatesSection/GraduatesSection.module.scss";

const GraduatesSection = ({ graduates }) => {
    const [expandedId, setExpandedId] = useState(null); // Hansi card genişlənib?
    const [showAll, setShowAll] = useState(false);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id); // Açıqsa bağla, bağlıdırsa aç
    };

    const visibleGraduates = showAll ? graduates : graduates.slice(0, 6);

    return (
        <section className={styles.graduates}>
            <h2 className={styles.title}>Gələcəyi quranlar</h2>
            <p className={styles.description}>
                Məzunlarımızın uğurları, bizim davamlı inkişafımızın və təhsil sahəsindəki öndə olmağı məqsədimizin təcəssümüdür. Hər bir məzunumuz, akademiyamızın dəyərini və peşəkar vizyonunu dünyada təmsil edir.
            </p>
            <div className={styles.list}>
                {visibleGraduates.map((graduate) => (
                    <div
                        key={graduate.id}
                        className={`${styles.card} ${expandedId === graduate.id ? styles.expanded : ""}`}
                    >
                        <img
                            onClick={() => toggleExpand(graduate.id)}
                            src={graduate.image}
                            alt={graduate.name}
                            className={styles.image}
                        />
                        <div className={styles.graduateInfo}>
                            <h3
                                className={styles.name}
                                onClick={(e) => {
                                    e.stopPropagation(); // Kart genişlənməsin
                                    window.open(graduate.linkedin, "_blank"); // Yeni tabda aç
                                }}
                            >
                                {graduate.name}
                            </h3>
                            <p
                                className={styles.field}
                                onClick={(e) => {
                                    e.stopPropagation(); // Kart genişlənməsin
                                    window.open(graduate.linkedin, "_blank"); // Yeni tabda aç
                                }}
                            >
                                {graduate.field}
                            </p>
                        </div>
                        {expandedId === graduate.id && (
                            <p className={styles.thoughts}>
                                “Akademiyada aldığım təhsil mənə yüksək səviyyədə texniki bacarıqlar
                                qazandırdı. Kursların strukturlaşdırılması və müasir metodologiyalardan istifadə mənim üçün çox
                                faydalı oldu. Tədrisin keyfiyyəti çox yüksəkdir.”
                            </p>
                        )}
                    </div>
                ))}
            </div>
            {graduates.length > 6 && (
                <div className={styles.toggleButtonContainer}>
                    <button
                        className={styles.toggleButton}
                        onClick={() => setShowAll(!showAll)}
                        aria-label={showAll ? "Tədris sahələrini azalt" : "Tədris sahələrini artır"}
                    >
                        {showAll ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        )}
                    </button>
                </div>
            )}
        </section>
    );
};

GraduatesSection.propTypes = {
    graduates: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            field: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            linkedin: PropTypes.string.isRequired, // LinkedIn profili üçün
        })
    ).isRequired,
};

export default GraduatesSection;
