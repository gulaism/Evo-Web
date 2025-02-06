import React, { useState } from "react";
import styles from './InternshipCard.module.scss';
import { IoCloseOutline } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
import { useSendConsultationEmailMutation } from "../../../../redux/services/apiSlice";
// import { useSendConsultationEmailMutation } from "../../../../redux/services/emailApi";

const InternshipCard = ({ icon, title, description, time, mode,arrow }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nameSurname: "",
    phone: "",
    email: "",
    area: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [buttonText, setButtonText] = useState("Müraciət et");
  const [isSubmitted, setIsSubmitted] = useState(false); // Animasiya üçün state

  const [sendConsultationEmail, { isLoading }] = useSendConsultationEmailMutation();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openModal = () => {
    setIsModalOpen(true);
    setErrorMessage("");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ nameSurname: "", phone: "", email: "", area: "" });
    setErrorMessage("");
    setButtonText("Müraciət et");
    setIsSubmitted(false); // Animasiya yazısını gizlət
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const response = await sendConsultationEmail(formData).unwrap();
      
      console.log('Server Response:', response);

      setIsSubmitted(true); // Animasiya üçün state aktiv olur

      setTimeout(() => {
        closeModal();
      }, 5000);

    } catch (error) {
      console.error("Xəta baş verdi:", error);
      setErrorMessage("Xəta baş verdi. Zəhmət olmasa, yenidən cəhd edin.");
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardHeading}>
        {icon && <img src={icon} alt={title} />}
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
      <div className={styles.details}>
        <div className={styles.time}>
          <span>{time}</span>
          <span>{mode}</span>
        </div>
        <div className={styles.arrowWrapper} onClick={openModal}>
          <div className={styles.icon}>
            {arrow && <img src={arrow} alt="arrow" />}
          </div>
          <div className={styles.expandButton}>
            <GoArrowRight className={styles.hoverIcon} />
            <span className={styles.hoverText}>Konsultasiyaya yazıl</span>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <button onClick={closeModal} className={styles.closeButton}>
              <IoCloseOutline style={{ fontSize: "24px", color: "#5848c2" }} />
            </button>
            <h2>Konsultasiyaya yazıl</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Ad, soyad:
                <input type="text" name="nameSurname" placeholder="Adınız Soyadınız" onChange={handleInputChange} required />
              </label>
              <label>
                Əlaqə nömrəsi:
                <input type="text" name="phone" placeholder="+994" onChange={handleInputChange} required />
              </label>
              <label>
                Email:
                <input type="email" name="email" placeholder="yourmail@gmail.com" onChange={handleInputChange} required />
              </label>
              <label>
                Təcrübə keçmək istədiyiniz sahəni seçin:
                <div className={styles.field}>
                  <label>
                    <input type="radio" name="area" value="Frontend" onChange={handleInputChange} required />
                    Front-end Development
                  </label>
                  <label>
                    <input type="radio" name="area" value="Backend" onChange={handleInputChange} required />
                    Back-end Java
                  </label>
                  <label>
                    <input type="radio" name="area" value="UXUI" onChange={handleInputChange} required />
                    UX/UI Dizayn
                  </label>
                  <label>
                    <input type="radio" name="area" value="QA" onChange={handleInputChange} required />
                    Q/A Manual Testing
                  </label>
                </div>
              </label>
              <button 
                type="submit" 
                disabled={isLoading} 
                className={`${styles.applyButton} ${isSubmitted ? styles.successButton : ""}`}
              >
                <span className={isSubmitted ? styles.successText : ""}>
                  {isSubmitted ? "Müraciətiniz qeydə alınmışdır" : "Müraciət et"}
                </span>
              </button>
            </form>

            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default InternshipCard;
