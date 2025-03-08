// styles
import styles from './NextGroupTime.module.scss';
// icons
import edit from "../../../../assets/images/admin/Statistics/editIcon.svg";
import tick from '../../../../assets/images/admin/NewCourse/tick-circle.svg';
import { useState } from 'react';

const NextGroupTime = () => {
  const [isTicked, setIsTicked] = useState([]);

  return (
    <div className={styles.nextGroupTimeCont}>
      <div className={styles.ngtTit}>Növbəti Qruplar</div>
      <div className={styles.ngtBody}>
        <div className={styles.ngtWeekly}>
          <div className={styles.weeklyTop}>
            <div className={styles.topLeft}>Həftəiçi</div>
            <div onClick={() => setIsTicked(1)} className={styles.topRight}>
              <div className={styles.rightWord}>var</div>
              {isTicked === 1 ? (
                <div className={styles.rightCircle}>
                  <img src={tick} alt="" />
                </div>
              ) : (
                <div className={styles.rightCircle}></div>
              )}
            </div>
          </div>
          <div className={styles.weeklyBot}>
            <div className={styles.botIc}>
              <img src={edit} alt="" />
            </div>
            <input
              className={styles.botInput}
              type="text"
              placeholder="Tarix"
            />
          </div>
          <div className={styles.weeklyBotBottom}>
            <div className={styles.weeklyBot}>
              <div className={styles.botIc}>
                <img src={edit} alt="" />
              </div>
              <input
                className={styles.botInput}
                type="text"
                placeholder="Saat"
              />
            </div>
            <div className={styles.weeklyBot}>
              <div className={styles.botIc}>
                <img src={edit} alt="" />
              </div>
              <input
                className={styles.botInput}
                type="text"
                placeholder="Saat"
              />
            </div>
          </div>
        </div>
        <div className={styles.ngtWeekly}>
          <div className={styles.weeklyTop}>
            <div className={styles.topLeft}>Həftəsonu</div>
            <div onClick={() => setIsTicked(2)} className={styles.topRight}>
              <div className={styles.rightWord}>var</div>
              {isTicked === 2 ? (
                <div className={styles.rightCircle}>
                  <img src={tick} alt="" />
                </div>
              ) : (
                <div className={styles.rightCircle}></div>
              )}
            </div>
          </div>
          <div className={styles.weeklyBot}>
            <div className={styles.botIc}>
              <img src={edit} alt="" />
            </div>
            <input
              className={styles.botInput}
              type="text"
              placeholder="Tarix"
            />
          </div>
          <div className={styles.weeklyBotBottom}>
            <div className={styles.weeklyBot}>
              <div className={styles.botIc}>
                <img src={edit} alt="" />
              </div>
              <input
                className={styles.botInput}
                type="text"
                placeholder="Saat"
              />
            </div>
            <div className={styles.weeklyBot}>
              <div className={styles.botIc}>
                <img src={edit} alt="" />
              </div>
              <input
                className={styles.botInput}
                type="text"
                placeholder="Saat"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NextGroupTime
