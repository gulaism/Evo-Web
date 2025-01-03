import React from 'react'
// styles
import styles from "./Application.module.scss";
// images
import cancel from "../../../assets/images/HomePage/Application/Close.svg";

const Application = ({ setShowApplication}) => {
  return (
    <div className={styles.applicationCont}>
      <div className="container">
        <div className={styles.innerCont}>
          <div className={styles.cancelCont}>
            <div className={styles.close}>
              <img src={cancel} alt="" />
            </div>
          </div>
          <div className={styles.heading}>Müraciət et</div>
          <form>
            <div className={styles.divCont}>
              <label>Ad, soyad</label>
              <input type="text" placeholder="Adınız Soyadınız" />
            </div>
            <div className={styles.divCont}>
              <label>Əlaqə nömrəsi</label>
              <input type="tel" placeholder="+994" />
            </div>
            <div className={styles.divCont}>
              <label>Email </label>
              <input type="email" placeholder="yourgmail@gmail.com" />
            </div>
            <div className={styles.divCont}>
              <label>Əlavə sualınız</label>
              <textarea></textarea>
            </div>
            <button type="submit">Müraciət et</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Application
