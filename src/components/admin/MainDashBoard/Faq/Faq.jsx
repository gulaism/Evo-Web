// styles
import styles from "./Faq.module.scss";
// icons
import plusIcon from "../../../../assets/images/admin/Partners/plusIcon.svg";
import trashIcon from "../../../../assets/images/admin/Partners/trashIcon.svg";
import editIcon from "../../../../assets/images/admin/Statistics/editIcon.svg";
import { MdKeyboardArrowRight } from "react-icons/md";

const faqQuestions = [
  "Lorem1 ipsum dolor sit amet, consectetur adipiscing elit.",
  "Lorem2 ipsum dolor sit amet, consectetur adipiscing elit.",
  "Lorem3 ipsum dolor sit amet, consectetur adipiscing elit.",
  "Lorem4 ipsum dolor sit amet, consectetur adipiscing elit.",
  "Lorem5 ipsum dolor sit amet, consectetur adipiscing elit.",
  "Lorem6 ipsum dolor sit amet, consectetur adipiscing elit.",
];

const Faq = () => {
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
          <div className={styles.question} key={index}>
            <div>
              <MdKeyboardArrowRight size={24} color="#7367FF80" />
              <div className={styles.inputDiv}>
                <div>
                  <img src={editIcon} alt="" />
                </div>
                <input type="text" value={faq} />
              </div>
            </div>
            <div>
              <img src={trashIcon} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq
