import React, { useState, useEffect } from "react";
import styles from "../GraduatesHeader/GraduatesHeader.module.scss";

const GraduatesHeader = ({ statistics }) => {
    const [stats, setStats] = useState(statistics);

    useEffect(() => {
        const interval = setInterval(() => {
            setStats((prevStats) =>
                prevStats.map((stat) => {
                    // Statistikaları artırmaq üçün tərtib et
                    if (stat.value < 100) { // Burada maksimum sayı istədiyiniz qədər təyin edə bilərsiniz
                        return { ...stat, value: stat.value + 1 };
                    }
                    return stat;
                })
            );
        }, 50); // Hər 50 ms-də bir statistikanı artır

        return () => clearInterval(interval); // Komponent silindikdə intervalu təmizləyirik
    }, []);

    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Məzunlarımız</h1>
            <p className={styles.description}>
                Onların hər birinin əldə etdiyi nailiyyətlər, akademiyamızın keyfiyyətli tədris yanaşmasının və peşəkar müəllim heyətimizin bir göstəricisidir.
            </p>
            <div className={styles.stats}>
                {stats.map((stat) => (
                    <div key={stat.id} className={styles.stat}>
                        <h2 className={styles.statValue}>{stat.value}</h2>
                        <p className={styles.statLabel}>{stat.label}</p>
                    </div>
                ))}
            </div>
        </header>
    );
};

export default GraduatesHeader;
