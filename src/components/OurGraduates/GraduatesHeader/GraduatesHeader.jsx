import React, { useState, useEffect } from "react";
import { useGetAllDataQuery } from "../../../redux/services/graduateApi";
import styles from "../GraduatesHeader/GraduatesHeader.module.scss";

const GraduatesHeader = () => {
    const { data, error, isLoading } = useGetAllDataQuery();

    const [animatedStats, setAnimatedStats] = useState([
        { id: 1, label: "Pedaqoji Kollektiv", value: 0 },
        { id: 2, label: "Tələbə", value: 0 },
        { id: 3, label: "Məzun", value: 0 },
        { id: 4, label: "Uğur Hekayəsi", value: 0 },
    ]);

    useEffect(() => {
        if (data) {
            const targetStats = [
                { id: 1, value: data.teacherCount || 0, label: "Pedaqoji Kollektiv" },
                { id: 2, value: data.studentCount || 0, label: "Tələbə" },
                { id: 3, value: data.graduatedCount || 0, label: "Məzun" },
                { id: 4, value: data.successStoryPercent || 0, label: "Uğur Hekayəsi" },
            ];

            targetStats.forEach((target, index) => {
                let startValue = 0; // Burada startValue-i istifadə edirik
                const step = Math.ceil(target.value / 100);

                const interval = setInterval(() => {
                    startValue += step; // startValue-ni artırırıq
                    if (startValue >= target.value) {
                        startValue = target.value; // Dəyəri aşmamaq üçün düzəliş
                        clearInterval(interval); // Animasiya bitəndə dayandırırıq
                    }

                    setAnimatedStats((prevStats) => {
                        const newStats = [...prevStats];
                        newStats[index] = { ...newStats[index], value: startValue };
                        return newStats;
                    });
                }, 60);
            });
        }
    }, [data]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error occurred!</div>;

    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Məzunlarımız</h1>
            <p className={styles.description}>
                Onların hər birinin əldə etdiyi nailiyyətlər, akademiyamızın keyfiyyətli tədris yanaşmasının və peşəkar müəllim heyətimizin bir göstəricisidir.
            </p>
            <div className={styles.stats}>
                {animatedStats.map((stat) => (
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
