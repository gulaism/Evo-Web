// styles
import styles from './Number.module.scss';
// icons
import plus from '../../../../assets/images/admin/Partners/plusIcon.svg';
import trash from '../../../../assets/images/admin/Partners/trashIcon.svg';
import edit from '../../../../assets/images/admin/Statistics/editIcon.svg';

const Number = () => {
  return (
    <div className={styles.numberCont}>
      <div className={styles.numberTit}>Əlaqə məlumatları</div>
      <div className={styles.numHead}>
        <div className={styles.headLeft}>Əlaqə</div>
        <div className={styles.headRight}>
          <img className={styles.rightIc} src={plus} alt="" />
        </div>
      </div>
      <div className={styles.numBody}>
        <div className={styles.bodyPart}>
          <div className={styles.partTop}>
            <div className={styles.topLeft}>
              <img src={edit} alt="" />
            </div>
            <div className={styles.topRight}>Satış üzrə mütəxəssis</div>
          </div>
          <div className={styles.partBot}>
            <div className={styles.headRight}>
              <img src={plus} alt="" />
            </div>
            <div className={styles.botMid}>
              <div className={styles.midIc}>
                <img src={edit} alt="" />
              </div>
              <input className={styles.midInput} type="tel" placeholder="+994" />
            </div>
            <div className={styles.endIc}>
              <img src={trash} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.bodyPart}>
          <div className={styles.partTop}>
            <div className={styles.topLeft}>
              <img src={edit} alt="" />
            </div>
            <div className={styles.topRight}>Tədris hissəsi</div>
          </div>
          <div className={styles.partBot}>
            <div className={styles.headRight}>
              <img src={plus} alt="" />
            </div>
            <div className={styles.botMid}>
              <div className={styles.midIc}>
                <img src={edit} alt="" />
              </div>
              <input className={styles.midInput} type="tel" placeholder="+994" />
            </div>
            <div className={styles.endIc}>
              <img src={trash} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.bodyPart}>
          <div className={styles.partTop}>
            <div className={styles.topLeft}>
              <img src={edit} alt="" />
            </div>
            <div className={styles.topRight}>Elektron Poçt</div>
          </div>
          <div className={styles.partBot}>
            <div className={styles.headRight}>
              <img src={plus} alt="" />
            </div>
            <div className={styles.botMid}>
              <div className={styles.midIc}>
                <img src={edit} alt="" />
              </div>
              <input className={styles.midInput} type="email" placeholder="yourmail@gmail.com" />
            </div>
            <div className={styles.endIc}>
              <img src={trash} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Number
