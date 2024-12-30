import React, { useState } from "react";
import styles from "./FaqListQuestions.module.scss";

const FaqList = ({ questions }) => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <div className={styles.faqContainer}>
        <div className={styles.faqHeader}>
      <h2>Tez-Tez Verilən Suallar</h2>
      </div>
      <ul className={styles.faqList}>
        {questions.map((question) => (
          <li key={question.id} className={styles.faqItem}>
            <div
              className={styles.faqQuestion}
              onClick={() => toggleQuestion(question.id)}
            >
              <span>{question.title}</span>
              <span
                className={`${styles.icon} ${
                  openQuestion === question.id ? styles.open : ""
                }`}
              >
                {openQuestion === question.id ? "×" : "+"}
              </span>
            </div>
            <div
              className={styles.faqAnswer}
              style={{
                maxHeight: openQuestion === question.id ? "200px" : "0",
                opacity: openQuestion === question.id ? "1" : "0",
                transition: "max-height 0.3s ease, opacity 0.3s ease",
              }}
            >
              {question.answer}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FaqList;
