import React, { useState, useEffect } from "react";
import style from "./AboutPage.module.scss";
import { useGetAboutQuery, useCreateOrUpdateAboutMutation } from "../../../redux/services/adminApiSlice";
import HeroSection from "../../../components/admin/About/AboutPage/HeroSection/HeroSection";
import ScholarshipProgram from "../../../components/admin/About/AboutPage/ScholarshipSection/ScholarshipSection";
import InstructorsSection from "../../../components/admin/About/AboutPage/InstructorsSection/InstructorsSection";
import InternShipAdmin from "../../../components/admin/About/AboutPage/InternShipAdmin/InternShipAdmin";

const AboutPage = () => {
  const { data, isLoading } = useGetAboutQuery();
  const [createOrUpdateAbout, { isLoading: isSaving }] = useCreateOrUpdateAboutMutation();
  const [initialData, setInitialData] = useState(null);
  const [isEnabled, setIsEnabled] = useState(false);

  const [content, setContent] = useState({
    id: null,
    hashtag: "",
    slogan: "",
    description: "",
    scholarships: [],
    instructors: [],
    internships: [],
  });

  useEffect(() => {
    if (data) {
      const formattedData = {
        id: data?.id || null,
        hashtag: data?.hashtag || "",
        slogan: data?.title || "",
        description: data?.paragraphs?.join("\n") || "",
        scholarships: data?.scholarships || [],
        instructors: data?.instructors || [],
        internships: data?.internships || [],
      };
      setContent(formattedData);
      setInitialData(formattedData);
    }
  }, [data]);

  useEffect(() => {
    if (initialData) {
      setIsEnabled(JSON.stringify(content) !== JSON.stringify(initialData));
    }
  }, [content, initialData]);

  const handleSave = async () => {
    if (!content.hashtag.trim() || !content.slogan.trim() || !content.description.trim()) {
      alert("Zəhmət olmasa bütün sahələri doldurun!");
      return;
    }

    try {
      await createOrUpdateAbout(content).unwrap();
      alert("Məlumat uğurla yadda saxlandı!");
      setInitialData(content);
      setIsEnabled(false);
    } catch (error) {
      alert("Xəta baş verdi, yenidən cəhd edin.");
      console.error("Saving Error:", error);
    }
  };

  if (isLoading) return <p>Yüklənir...</p>;

  return (
    <div className={`${style.aboutOutContainer}`}>
      <div className={style.aboutPage}>
        <HeroSection content={content} setContent={setContent} setIsEnabled={setIsEnabled} />
        <ScholarshipProgram content={content} setContent={setContent} setIsEnabled={setIsEnabled} />
      </div>
      <InstructorsSection content={content} setContent={setContent} setIsEnabled={setIsEnabled} />
      <InternShipAdmin content={content} setContent={setContent} setIsEnabled={setIsEnabled} />
      
      <button
        className={isEnabled ? `${style.saveBtn} ${style.active}` : style.saveBtn}
        onClick={handleSave}
        disabled={!isEnabled || isSaving}
      >
        {isSaving ? "Yadda saxlanır..." : "Yadda saxla"}
      </button>
    </div>
  );
};

export default AboutPage;
