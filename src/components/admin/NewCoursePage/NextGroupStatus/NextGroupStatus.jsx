// styles
import styles from "./NextGroupStatus.module.scss";
import tick from "../../../../assets/images/admin/NewCourse/tick-circle.svg";
import { useState } from "react";

const NextGroupStatus = () => {
  const [isTicked, setIsTicked] = useState([]);

  return (
    <div className={styles.nextStatCont}>
      <div className={styles.statTit}>Növbəti Qruplar</div>
      <div className={styles.statHead}>Status</div>
      <div onClick={() => setIsTicked(1)} className={styles.statBody}>
        {isTicked === 1 ? (
          <div className={styles.statCircle}>
            <img src={tick} alt="" />
          </div>
        ) : (
          <div className={styles.statCircle}></div>
        )}
        <input readOnly className={styles.input1} type="text" placeholder="Yığılıb" />
      </div>
      <div onClick={() => setIsTicked(2)} className={styles.statBody}>
        {isTicked === 2 ? (
          <div className={styles.statCircle}>
            <img src={tick} alt="" />
          </div>
        ) : (
          <div className={styles.statCircle}></div>
        )}
        <input className={styles.input1} type="text" placeholder="Yığılmayıb" />
      </div>
    </div>
  );
};

export default NextGroupStatus;
