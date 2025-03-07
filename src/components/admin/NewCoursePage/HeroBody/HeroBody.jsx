// styles
import styles from './HeroBody.module.scss';
// icons
import edit from '../../../../assets/images/admin/Statistics/editIcon.svg';
import plus from '../../../../assets/images/admin/Partners/plusIcon.svg';
import trash from '../../../../assets/images/admin/Partners/trashIcon.svg';
import { MdKeyboardArrowRight } from 'react-icons/md';

const HeroBody = () => {
  return (
    <div className={styles.heroCont}>
      <div className={styles.title}>Herobody</div>
      <div className={styles.mainContent}>
        {/* <table className={styles.table}>
          <tr className={styles.headers}>
            <th className={styles.th}>Kurs</th>
            <th className={styles.th}>Kateqoriya</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
        </table> */}
        <div className={styles.gridCont}>
          <div className={styles.heads}>Kurs</div>
          <div className={styles.heads}>Kateqoriya</div>
          <div className={styles.courseName}>
            <img className={styles.editIcon} src={edit} alt="" />
            <input className={styles.inputCont} type="text" placeholder="Kurs adı" />
          </div>
          <div className={styles.chooseCat}>
            <div className={styles.plusIcon}>
              <img src={plus} alt="" />
            </div>
            <div className={styles.catCont}>
              <MdKeyboardArrowRight size={24} color="#b4adff" />
              <div className={styles.selectedCat}>Proqramlaşdırma</div>
            </div>
          </div>
        </div>
        <div className={styles.descCont}>
          <div className={styles.above}>
            <div className={styles.tit}>Təsvir</div>
            <div className={styles.add}>
              <div className={styles.word}>abzas əlavə et</div>
              <div className={styles.addIcon}>
                <img className={styles.addImage} src={plus} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.below}>
            <div className={styles.inputCont}>
              <img className={styles.editIcon} src={edit} alt="" />
              <input className={styles.input} type="text" placeholder="Təsvir" />
            </div>
            <div className={styles.trashIcon}>
              <img className={styles.image} src={trash} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBody
