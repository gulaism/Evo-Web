// styles
import styles from './EduProg.module.scss';
// icons
import edit from '../../../../assets/images/admin/Statistics/editIcon.svg';

const EduProg = () => {
  return (
    <div className={styles.eduProgCont}>
      <div className={styles.eduTit}>Tədris proqramı</div>
      <div className={styles.crs}>Kurs</div>
      <div className={styles.inpts}>    
        <div className={styles.timeInput}>
          <img className={styles.ic} src={edit} alt="" />
          <input className={styles.inputOne} type="text" placeholder='Saat' />
        </div>
        <div className={styles.timeInput}>
          <img className={styles.ic} src={edit} alt="" />
          <input className={styles.inputOne} type="text" placeholder='Ay' />
        </div>
      </div>
    </div>
  );
}

export default EduProg
