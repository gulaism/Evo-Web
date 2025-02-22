import React from "react";
import styles from "./AboutPage.module.scss";
import HeroSection from "../../../components/admin/MainDashBoard/AboutPage/HeroSection/HeroSection";
import ScholarshipProgram from "../../../components/admin/MainDashBoard/AboutPage/ScholarshipSection/ScholarshipSection";
import InstructorsSection from "../../../components/admin/MainDashBoard/AboutPage/İnstructorsSection/InstructorsSection";

const AboutPage = () => {
  return (
    <div className="adminContainer">
      <div className={styles.aboutPage}>
        <HeroSection />
        <ScholarshipProgram />
        <InstructorsSection />
      </div>
    </div>
  );
};

export default AboutPage;
