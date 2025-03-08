// icons
import editIcon from '../../../../assets/images/admin/Statistics/editIcon.svg';
// styles
import styles from './Description.module.scss';

const Description = ({ setIsEnabled }) => {
  return (
    <div className={styles.descriptionCont}>
      <div className={styles.place}>Ana səhifə və Tədris Sahələri description</div>
      <div className={styles.title}>Description</div>
      <div className={styles.inputCont}>
        <div className={styles.imgCont}>
          <img src={editIcon} alt="" />
        </div>
        <input onChange={() => setIsEnabled(true)} type="text" placeholder="Course description" />
      </div>
    </div>
  );
}

export default Description
