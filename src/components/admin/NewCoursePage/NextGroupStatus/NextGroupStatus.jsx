// styles
import styles from './NextGroupStatus.module.scss';

const NextGroupStatus = () => {
  return (
    <div className={styles.nextStatCont}>
      <div className={styles.statTit}>Növbəti Qruplar</div>
      <div className={styles.statHead}>Status</div>
      <div className={styles.statBody}>
        <div className={styles.statCircle}></div>
        <input className={styles.input1} type="text" placeholder='Yığılıb'/>
      </div>
      <div className={styles.statBody}>
        <div className={styles.statCircle}></div>
        <input className={styles.input1} type="text" placeholder='Yığılmayıb'/>
      </div>
    </div>
  )
}

export default NextGroupStatus
