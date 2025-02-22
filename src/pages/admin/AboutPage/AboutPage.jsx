import React from "react";
import styles from "./AboutPage.module.scss";
import HeroSection from "../../../components/admin/MainDashBoard/AboutPage/HeroSection/HeroSection";
import ScholarshipProgram from "./ScholarshipProgram";
import Instructors from "./Instructors";

const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      <HeroSection />
      <ScholarshipProgram />
      <Instructors />
    </div>
  );
};

export default AboutPage;
