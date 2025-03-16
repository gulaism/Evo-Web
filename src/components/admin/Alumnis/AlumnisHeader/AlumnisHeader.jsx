import React, { useState } from "react";
import styles from "./AlumnisHeader.module.scss";
import editIcon from "../../../../assets/images/admin/Statistics/editIcon.svg";
// import trashIcon from "../../../../assets/images/admin/Partners/trashIcon.svg";
// import plusIcon from "../../../../assets/images/admin/Partners/plusIcon.svg";




const AlumnisHeader = () => {
    const [introText, setIntroText] = useState(
        "Onların hər birinin əldə etdiyi nailiyyətlər, akademiyamızın keyfiyyətli tədris yanaşmasının və peşəkar müəllim heyətimizin bir göstəricisidir."
    );

    const [stats, setStats] = useState([
        { label: "İntruktorlar", value: 85 },
        { label: "Tələbə", value: 85 },
        { label: "Məzun", value: 85 },
        { label: "Uğur Hekayəsi", value: 85 },
    ]);
    const handleStatChange = (index, newValue) => {
        const updatedStats = [...stats];
        updatedStats[index].value = newValue;
        setStats(updatedStats);
    };

    return (
        <div className={styles.heroSection}>
            <div className={styles.heroBody}>
            <h2 className={styles.heroTitle}>Herobody</h2>
                <h2>Giriş</h2>
                <textarea
                    value={introText}
                    onChange={(e) => setIntroText(e.target.value)}
                    className={styles.introInput}
                />
            </div>

            <div className={styles.statTitle}>

                <h2>Statistika</h2>
                <div className={styles.stats}>
                    {stats.map((stat, index) => (
                        <div key={index} className={styles.statItem}>
                            <div className={styles.actions}>
                                <button className={styles.editBtn}>
                                    <img src={editIcon} alt="Edit Icon" />
                                </button>
                                <span>{stat.label}</span>
                            </div>

                            <div className={styles.actionsInput}>
                                <button className={styles.editBtn}>
                                    <img src={editIcon} alt="Edit Icon" />
                                </button>
                                <input
                                    className={styles.statInput}
                                    type="number"
                                    value={stat.value}
                                    onChange={(e) => handleStatChange(index, e.target.value)}
                                />
                            </div>
                        </div>

                    ))}
                </div>
            </div>

        </div>
    );
};
export default AlumnisHeader;