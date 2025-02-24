import React from "react";
import style from "./AboutPage.module.scss";
import HeroSection from "../../../components/admin/MainDashBoard/AboutPage/HeroSection/HeroSection";
import ScholarshipProgram from "../../../components/admin/MainDashBoard/AboutPage/ScholarshipSection/ScholarshipSection";
import InstructorsSection from "../../../components/admin/MainDashBoard/AboutPage/InstructorsSection/InstructorsSection";
import { useState } from "react";
import InternShipAdmin from "../../../components/admin/MainDashBoard/AboutPage/InternShipAdmin/InternShipAdmin";



const AboutPage = () => {
    const [isEnabled, setIsEnabled] = useState(false);
  return (
    <div className="adminContainer">
      <div className={style.aboutPage}>
        <HeroSection />
        <ScholarshipProgram />
      </div>
      <InstructorsSection setIsEnabled = {setIsEnabled}/>
      <button className={isEnabled ? `${style.saveBtn} ${style.active}` : `${style.saveBtn}`}>Yadda saxla</button>
      <InternShipAdmin />


    </div>
  );
};

export default AboutPage;
