import React, { useState } from "react";
// import { useGetAllDataQuery } from "../../../redux/services/graduateApi";
import styles from "../GraduatesSection/GraduatesSection.module.scss";
import { useGetAllDataQuery } from "../../../redux/services/apiSlice";

const GraduatesSection = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // API-dən məlumatları alırıq
  const { data, isLoading, isError } = useGetAllDataQuery();

  // Məzunları düzəldirik (düzgün array formatı)
  const graduates = data?.graduatedStudents || [];

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Yalnız ilk 6 məzunu göstəririk
  const visibleGraduates = showAll ? graduates : graduates.slice(0, 6);

  if (isLoading) return <p>Yüklənir...</p>;
  if (isError) return <p>Xəta baş verdi.</p>;

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
                <img
                  src={instructor.profilePhotoUrl || "/path/to/default-image.jpg"}
                  alt={`${instructor.name}'s photo`}
                />
              </div>
              <div
                className={styles.info}
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(instructor.linkedinLink || "https://default-link.com", "_blank");
                }}
              >
                <div className={styles.instName}>{instructor.name}</div>
                <div className={styles.instProf}>
                  {instructor.areaName || "Profession not provided"}
                </div>
              </div>
            </div>
            {expandedId === instructor.id && (
              <div className={styles.hiddenInfo}>
                {instructor.description || "No description available"}
              </div>
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

export default GraduatesSection;
