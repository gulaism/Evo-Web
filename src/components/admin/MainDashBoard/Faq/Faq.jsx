// styles
import styles from "./Faq.module.scss";
// icons
import plusIcon from "../../../../assets/images/admin/Partners/plusIcon.svg";
import trashIcon from "../../../../assets/images/admin/Partners/trashIcon.svg";
import editIcon from "../../../../assets/images/admin/Statistics/editIcon.svg";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import React, { useState } from "react";

const initialFaqQuestions = [
  {
    question: "Lorem1 ipsum dolor sit amet, consectetur adipiscing elit.",
    answer: "Answer1 to question1",
  },
  {
    question: "Lorem2 ipsum dolor sit amet, consectetur adipiscing elit.",
    answer: "Answer2 to question2",
  },
  {
    question: "Lorem3 ipsum dolor sit amet, consectetur adipiscing elit.",
    answer: "Answer3 to question3",
  },
];

const Faq = ({setIsEnabled}) => {
  const [ showAnswerWithId , setShowAnswerWithId ] = useState(null);
  const [ focusedQuestion , setFocusedQuestion ] = useState(null);
  const [ faqQuestions , setFaqQuestions ] = useState(initialFaqQuestions);

  const handleChangeAnswer = (e, index) => {
    const updatedFaqQuestion = e.target.value;
    setFaqQuestions((prevFaqQuestions) => 
      prevFaqQuestions.map((faq, i) =>
        i === index ? {...faq, answer: updatedFaqQuestion} : faq 
      )
    );
    setIsEnabled(true);
  };

  const handleChangeQuestion = (e, index) => {
    const updatedFaqQuestion = e.target.value;
    setFaqQuestions((prevFaqQuestions) => 
      prevFaqQuestions.map((faq, i) =>
        i === index ? {...faq, question: updatedFaqQuestion} : faq 
      )
    );
    setIsEnabled(true);
  }


  return (
    <div className={styles.faqCont}>
      <div className={styles.faqHead}>Tez-tez verilən suallar</div>
      <div className={styles.faqHeader}>
        <div>Tez-tez verilən suallar</div>
        <div>
          <img src={plusIcon} alt="" />
        </div>
      </div>
      <div className={styles.faqs}>
        {faqQuestions.map((faq, index) => (
          <React.Fragment key={index}>
            <div
              className={`${styles.question} ${
                showAnswerWithId !== index ? styles.withBorder : ""
              }`}
            >
              <div>
                {showAnswerWithId !== index ? (
                  <MdKeyboardArrowRight
                    size={24}
                    color="#7367FF80"
                    onClick={() => setShowAnswerWithId(index)}
                    style={{ cursor: "pointer" }}
                  />
                ) : (
                  <MdKeyboardArrowDown
                    size={24}
                    color="#7367FF80"
                    onClick={() => setShowAnswerWithId(null)}
                    style={{ cursor: "pointer" }}
                  />
                )}
                <div className={styles.inputDiv}>
                  <div onClick={() => setFocusedQuestion(index)}>
                    <img src={editIcon} alt="" />
                  </div>
                  <input
                    onChange={(e) => handleChangeQuestion(e, index)}
                    type="text"
                    defaultValue={faq.question}
                  />
                </div>
              </div>
              <div>
                <img src={trashIcon} alt="" />
              </div>
            </div>
            {showAnswerWithId === index && (
              <div className={`${styles.withBorder} ${styles.answerCont}`}>
                <input
                  onChange={(e) => handleChangeAnswer(e, index)}
                  defaultValue={faq.answer}
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Faq
