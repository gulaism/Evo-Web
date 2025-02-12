// style
import styles from "./Partners.module.scss";
// icons
import editIcon from "../../../../assets/images/admin/Statistics/editIcon.svg";
import partnerIcon from "../../../../assets/images/admin/Partners/partnerIcon.svg";
import trashIcon from "../../../../assets/images/admin/Partners/trashIcon.svg";
import plusIcon from "../../../../assets/images/admin/Partners/plusIcon.svg";


const Partners = () => {
  return (
    <div className={styles.partners}>
      <h2>Partnyorlar</h2>
      <div className={styles.title}>Partnyorlar</div>
      <div className={styles.partnerList}>
        <div>
          <div className={styles.editIcon}>
            <img src={editIcon} alt="" />
          </div>
          <div className={styles.partnerIcon}>
            <img src={partnerIcon} alt="" />
          </div>
          <div className={styles.trashIcon}>
            <img src={trashIcon} alt="" />
          </div>
        </div>
        <div>
          <div className={styles.editIcon}>
            <img src={editIcon} alt="" />
          </div>
          <div className={styles.partnerIcon}>
            <img src={partnerIcon} alt="" />
          </div>
          <div className={styles.trashIcon}>
            <img src={trashIcon} alt="" />
          </div>
        </div>
        <div>
          <div className={styles.editIcon}>
            <img src={editIcon} alt="" />
          </div>
          <div className={styles.partnerIcon}>
            <img src={partnerIcon} alt="" />
          </div>
          <div className={styles.trashIcon}>
            <img src={trashIcon} alt="" />
          </div>
        </div>
        <div>
          <div className={styles.editIcon}>
            <img src={editIcon} alt="" />
          </div>
          <div className={styles.partnerIcon}>
            <img src={partnerIcon} alt="" />
          </div>
          <div className={styles.trashIcon}>
            <img src={trashIcon} alt="" />
          </div>
        </div>
        <div>
          <div className={styles.editIcon}>
            <img src={editIcon} alt="" />
          </div>
          <div className={styles.partnerIcon}>
            <img src={partnerIcon} alt="" />
          </div>
          <div className={styles.trashIcon}>
            <img src={trashIcon} alt="" />
          </div>
        </div>
        <div>
          <div className={styles.editIcon}>
            <img src={editIcon} alt="" />
          </div>
          <div className={styles.partnerIcon}>
            <img src={partnerIcon} alt="" />
          </div>
          <div className={styles.trashIcon}>
            <img src={trashIcon} alt="" />
          </div>
        </div>
      </div>
      <div>
        <div>
          <img src={plusIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
