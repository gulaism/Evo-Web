import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "../GraduatesSection/GraduatesSection.module.scss";

const GraduatesSection = ({ graduates }) => {
    const [expandedId, setExpandedId] = useState(null);
    const [showAll, setShowAll] = useState(false);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    // Yalnız 6 məzunu göstərmək üçün `visibleGraduates` yaradılır
    const visibleGraduates = showAll ? graduates : graduates.slice(0, 6);

    return (
        <section className={styles.graduates}>
            <h2 className={styles.title}>Gələcəyi quranlar</h2>
            <p className={styles.description}>
                Məzunlarımızın uğurları, bizim davamlı inkişafımızın və təhsil sahəsindəki öndə olmağı məqsədimizin təcəssümüdür.
            </p>

            <div className={styles.gridCont}>
                {visibleGraduates.map((instructor) => (
                    <div
                        onClick={() => toggleExpand(instructor.id)}
                        className={`${styles.insCont} ${expandedId === instructor.id ? styles.clicked : ""}`}
                        key={instructor.id}
                        style={expandedId === instructor.id ? { border: "1px solid #7E8D9C5E" } : {}}
                    >
                        <div className={styles.instructor}>
                            <div className={styles.photoCont}>
                                <img src={instructor.photo} alt={`${instructor.name}'s photo`} />
                            </div>
                            <div
                                className={styles.info}
                                onClick={(e) => {
                                    e.stopPropagation(); // Parent div-in klik eventinin işə düşməsinin qarşısını alır
                                    window.open(instructor.link, "_blank"); // LinkedIn linkini yeni tab-da açır
                                }}
                            >
                                <div className={styles.instName}>{instructor.name}</div>
                                <div className={styles.instProf}>{instructor.profession}</div>
                            </div>

                        </div>
                        {expandedId === instructor.id && (
                            <div className={styles.hiddenInfo}>
                                “Akademiyada aldığım təhsil mənə yüksək səviyyədə texniki bacarıqlar qazandırdı. Kursların strukturlaşdırılması və müasir metodologiyalardan istifadə mənim üçün çox faydalı oldu. Tədrisin keyfiyyəti çox yüksəkdir.”
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Əgər məzun sayı 6-dan çoxdursa, toggle button göstərilir */}
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
            profession: PropTypes.string.isRequired,
            photo: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default GraduatesSection;
