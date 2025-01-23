import React, { useState } from "react";
import styles from './InternshipCard.module.scss';
import { GoArrowRight } from "react-icons/go";
import { IoCloseOutline } from "react-icons/io5";

const InternshipCard = ({ icon, title, description, time, mode, arrow }) => {
  // Modal üçün state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Modalı açıb-bağlama funksiyaları
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
        {/* Arrow hover funksionallığı */}
        <div
          className={styles.arrowWrapper}
          onClick={openModal}
        >
          <div className={styles.icon}>
          {arrow   && <img src={arrow} alt="arrow" />}
          </div>
          <div className={styles.expandButton}>
            <GoArrowRight className={styles.hoverIcon} /> {/* Hover ox */}
            <span className={styles.hoverText}>Konsultasiyaya yazıl</span>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <button onClick={closeModal} className={styles.closeButton}>
            <IoCloseOutline style={{fontSize: "24px",color: "#5848c2"}} />
            </button>
            <h2>Konsultasiyaya yazıl</h2>
            <form>
              <label>
                Ad, soyad:
                <input type="text" placeholder="Adınız Soyadınız" />
              </label>
              <label>
                Əlaqə nömrəsi:
                <input type="text" placeholder="+994" />
              </label>
              <label>
                Email:
                <input type="email" placeholder="yourmail@gmail.com" />
              </label>
              <label>
                Təcrübə keçmək istədiyiniz sahəni seçin:
                <div className={styles.field}>
                  <label>
                    <input type="radio" name="field" value="Frontend" />
                   Front-end Development
                  </label>
                  <label>
                    <input type="radio" name="field" value="Backend" />
                    Back-end Java
                  </label>
                  <label>
                    <input type="radio" name="field" value="UXUI" />
                    UX/UI Dizayn
                  </label>
                  <label>
                    <input type="radio" name="field" value="QA" />
                    Q/A Manual Testing
                  </label>
                </div>
              </label>
              <button type="submit">Müraciət et</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default InternshipCard;