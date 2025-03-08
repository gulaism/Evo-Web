import React, { useState, useEffect } from "react";
import styles from "./HeroSection.module.scss";
import { AiOutlineEdit } from "react-icons/ai";
import { useGetAboutQuery } from "../../../../../redux/services/adminApiSlice";

const HeroSection = ({ content, setContent }) => {
  // const { data, isLoading } = useGetAboutQuery();

  const [editable, setEditable] = useState({
    hashtag: false,
    slogan: false,
    description: false,
  });

  // useEffect(() => {
  //   if (data) {
  //     setContent({
  //       id: data?.id || null, // ID varsa saxlayırıq
  //       hashtag: data?.hashtag || "",
  //       slogan: data?.title || "",
  //       description: data?.paragraphs?.join("\n") || "", // Array isə birləşdiririk
  //     });
  //   }
  // }, [data, setContent]);

  const handleEdit = (field) => {
    setEditable((prev) => ({ ...prev, [field]: true }));
  };

  const handleChange = (field, value) => {
    setContent((prev) => ({ ...prev, [field]: value }));
  };

  // if (isLoading) return <p>Yüklənir...</p>;

  return (
    <section className={styles.heroSection}>
      <h4 className={styles.subtitle}>Herobody</h4>

      <h4 className={styles.title}>Hashtag</h4>
      <div className={styles.inputContainer}>
        <AiOutlineEdit className={styles.icon} onClick={() => handleEdit("hashtag")} />
        <input
          className={styles.input}
          type="text"
          value={content.hashtag}
          onChange={(e) => handleChange("hashtag", e.target.value)}
          disabled={!editable.hashtag}
        />
      </div>

      <h4 className={styles.title}>Sloqan</h4>
      <div className={styles.inputContainer}>
        <AiOutlineEdit className={styles.icon} onClick={() => handleEdit("slogan")} />
        <input
          className={styles.input}
          type="text"
          value={content.slogan}
          onChange={(e) => handleChange("slogan", e.target.value)}
          disabled={!editable.slogan}
        />
      </div>

      <h4>Təsvir</h4>
      <div className={styles.inputContainer}>
        <AiOutlineEdit className={styles.icon} onClick={() => handleEdit("description")} />
        <textarea
          className={styles.textarea}
          value={content.description}
          onChange={(e) => handleChange("description", e.target.value)}
          disabled={!editable.description}
        />
      </div>
    </section>
  );
};

export default HeroSection;
