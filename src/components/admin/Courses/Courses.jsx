import React from "react";
import styles from "./Courses.module.scss";

const Courses = () => {
  return (
    <div className={styles.courses}>
      <h2>Kurslarımız</h2>
      <div className={styles.courseList}>
        <div className={styles.courseCard}>Frontend Development</div>
        <div className={styles.courseCard}>Backend Development</div>
        <div className={styles.courseCard}>UI/UX Design</div>
      </div>
    </div>
  );
};

export default Courses;
