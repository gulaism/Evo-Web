// styles
import styles from './Portfolio.module.scss';
// images
import tick from '../../../../assets/images/admin/NewCourse/tick-circle.svg';

const Portfolio = () => {
  return (
    <div className={styles.portCont}>
      <div className={styles.portTit}>Portfolio</div>
      <div className={styles.portHead}>Status</div>
      <div className={styles.portBot}>
        <div className={styles.portVar}>
          <div className={styles.portCircle}></div>
          <div className={styles.portWord}>Var</div>
        </div>
        <div className={styles.portVar}>
          <div className={styles.tick}>
            <img src={tick} alt="" className={styles.tickImg}/>
          </div>
          <div className={styles.portWord}>Yoxdur</div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio
