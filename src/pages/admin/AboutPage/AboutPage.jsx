import React, { useState, useEffect } from "react";
import style from "./AboutPage.module.scss";
import { useGetAboutQuery, useCreateOrUpdateAboutMutation } from "../../../redux/services/adminApiSlice";
import HeroSection from "../../../components/admin/About/AboutPage/HeroSection/HeroSection";
import ScholarshipProgram from "../../../components/admin/About/AboutPage/ScholarshipSection/ScholarshipSection";
import InstructorsSection from "../../../components/admin/About/AboutPage/InstructorsSection/InstructorsSection";
import InternShipAdmin from "../../../components/admin/About/AboutPage/InternShipAdmin/InternShipAdmin";

const AboutPage = () => {
  const { data, isLoading } = useGetAboutQuery();
  const [createOrUpdateAbout] = useCreateOrUpdateAboutMutation();
  const [isEnabled, setIsEnabled] = useState(false);

  const [content, setContent] = useState({
    id: null,
    hashtag: "",
    slogan: "",
    description: "",
  });

  useEffect(() => {
    if (data) {
        setContent((prev) => ({
            ...prev, // Mövcud state-i qoruyuruq
            id: data?.id || null,
            hashtag: data?.hashtag || "",
            slogan: data?.title || "",
            description: data?.paragraphs?.join("\n") || "",
            scholarships: data?.scholarships || prev.scholarships || [], // Təqaüd proqramını saxlayırıq
            instructors: data?.instructors || prev.instructors || [], // Təlimçilər
            internships: data?.internships || prev.internships || [], // Təcrübə proqramları
        }));
    }
}, [data]);




  const handleSave = async () => {
    if (!content.hashtag.trim() || !content.slogan.trim() || !content.description.trim()) {
      alert("Zəhmət olmasa bütün sahələri doldurun!");
      return;
    }

    // try {
    //   await createOrUpdateAbout({
    //     id: content.id, // ID lazımdırsa backendə göndəririk
    //     aboutRequest: {
    //       hashtag: content.hashtag,
    //       title: content.slogan,
    //       paragraphs: content.description.split("\n"), // Stringi array-a çeviririk
    //     },
    //   }).unwrap();
    //   alert("Məlumat uğurla yadda saxlandı!");
    // } catch (error) {
    //   console.error("Xəta baş verdi:", error);
    //   alert("Məlumat yadda saxlanmadı!");
    // }
  };

  if (isLoading) return <p>Yüklənir...</p>;

  return (
    <div className={`${style.aboutOutContainer}`}>
      <div className={style.aboutPage}>
        <HeroSection content={content} setContent={setContent} />
        <ScholarshipProgram content={content} setContent={setContent} />
      </div>
      <InstructorsSection content={content} setContent={setContent} setIsEnabled={setIsEnabled} />
      <InternShipAdmin />
      <button
        className={isEnabled ? `${style.saveBtn} ${style.active}` : `${style.saveBtn}`}
        onClick={handleSave}
      >
        Yadda saxla
      </button>
    </div>
  );
};

export default AboutPage;
