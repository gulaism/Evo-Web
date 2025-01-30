import React, { useState } from 'react'
// styles
import styles from "./Modal.module.scss";
// images
import cancel from "../../../assets/images/HomePage/Application/Close.svg";

const Modal = ({ setShowModal}) => {
  const [ isCorrectEmail, setIsCorrectEmail ] = useState(null);
  const [ email, setEmail ] = useState("");
  const [ isSubmitted, setIsSubmitted ] = useState(false);



  const validateEmail = (value)  => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    if(!validateEmail(email)) {
      setIsCorrectEmail(false);
    }
    else {
      setIsCorrectEmail(true);
      setIsSubmitted(true);
      setTimeout(() => {
        setShowModal(false);
      }, 1000)
      document.body.style.overflow = 'auto';
    }
  }


  const handleClosing = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
  }
  return (
    <div className={styles.applicationCont}>
      <div className="container">
        <div className={styles.innerCont}>
          <div
           onClick={handleClosing}
           className={styles.cancelCont}>
            <div className={styles.close}>
              <img src={cancel} alt="" />
            </div>
          </div>
          <div className={styles.heading}>Müraciət et</div>
          <form className={`${isSubmitted ? styles.formSubmitted : ""}`} 
          onSubmit={handelSubmit}
          >
            <div className={styles.divCont}>
              <label>Ad, soyad</label>
              <input disabled={isSubmitted} type="text" placeholder="Adınız Soyadınız" />
            </div>
            <div className={styles.divCont}>
              <label>Əlaqə nömrəsi</label>
              <input disabled={isSubmitted} type="tel" placeholder="+994" />
            </div>
            <div className={styles.divCont}>
              <label>Email </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                  const isValid = validateEmail(e.target.value);
                  setIsCorrectEmail(isValid ? true : false);
                }}
                className={`${isCorrectEmail === false && styles.emailErrorInput}`}
                type="email"
                placeholder="yourgmail@gmail.com"
                value={email}
                disabled={isSubmitted}
              />
              {isCorrectEmail === false && (
                <div className={styles.emailErrorText}>
                  Zəhmət olmazsa, düzgün email ünvanını qeyd edin
                </div>
              )}
            </div>
            <div className={styles.divCont}>
              <label>Əlavə sualınız</label>
              <textarea disabled={isSubmitted}></textarea>
            </div>
            <button disabled={isSubmitted} type="submit">{`${isSubmitted ? "Müraciətiniz qeydə alınmışdır " : "Müraciət et"}`}</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal
