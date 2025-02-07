import React, { useEffect, useState } from 'react'
// styles
import styles from "./Application.module.scss";
// images
import cancel from "../../../assets/images/HomePage/Application/Close.svg";
import { useSendAppealMutation } from '../../../redux/services/apiSlice';

const Application = ({ setShowApplication}) => {
  const [ isCorrectEmail, setIsCorrectEmail ] = useState(null);
  const [ email, setEmail ] = useState("");
  const [ isSubmitted, setIsSubmitted ] = useState(false);
  const [sendAppeal, { data, error, isLoading }] = useSendAppealMutation();
  const [ formData, setFormData ] = useState({
    email: "",
    nameSurname: "",
    phone: "",
    additionalQuestion: "",
  });

  const validateEmail = (value)  => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  }

  const handelSubmit = async (e) => {
    e.preventDefault();
    if(!validateEmail(email)) {
      setIsCorrectEmail(false);
    }
    else {
      setIsCorrectEmail(true);

      try {
        const response = await sendAppeal(formData);
        console.log("Response Data:", response.data);
        setIsSubmitted(true);
      } catch (err) {
        console.log("Mutation Error:", err);
      }
      setTimeout(() => {
        setShowApplication(false);
      }, 1500)
      document.body.style.overflow = 'auto';
    }
  }


  const handleClosing = () => {
    setShowApplication(false);
    document.body.style.overflow = 'auto';
  }
  return (
    <div className={styles.applicationCont}>
      <div className="container">
        <div className={styles.innerCont}>
          <div onClick={handleClosing} className={styles.cancelCont}>
            <div className={styles.close}>
              <img src={cancel} alt="" />
            </div>
          </div>
          <div className={styles.heading}>Müraciət et</div>
          <form className={`${isSubmitted ? styles.formSubmitted : ""}`} onSubmit={handelSubmit}>
            <div className={styles.divCont}>
              <label>Ad, soyad</label>
              <input disabled={isSubmitted} onChange={(e) => setFormData({...formData, nameSurname: e.target.value.toString()})} type="text" placeholder="Adınız Soyadınız" />
            </div>
            <div className={styles.divCont}>
              <label>Əlaqə nömrəsi</label>
              <input disabled={isSubmitted} onChange={(e) => setFormData({...formData, phone: e.target.value.toString()})} type="tel" placeholder="+994" />
            </div>
            <div className={styles.divCont}>
              <label>Email </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                  const isValid = validateEmail(e.target.value);
                  setIsCorrectEmail(isValid ? true : false);
                  setFormData({...formData, email: e.target.value.toString()})
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
              <textarea disabled={isSubmitted} onChange={(e) => setFormData({...formData, additionalQuestion: e.target.value.toString()})}></textarea>
            </div>
            <button disabled={isSubmitted} type="submit">{`${isSubmitted ? "Müraciətiniz qeydə alınmışdır " : "Müraciət et"}`}</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Application
