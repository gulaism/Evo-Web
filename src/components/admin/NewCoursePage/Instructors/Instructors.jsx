// styles
import styles from './Instructors.module.scss';
// icons
import edit from '../../../../assets/images/admin/Statistics/editIcon.svg';
import plus from '../../../../assets/images/admin/Partners/plusIcon.svg';
import trash from '../../../../assets/images/admin/Partners/trashIcon.svg';
import { MdKeyboardArrowRight } from 'react-icons/md';


const Instructors = () => {
  return (
    <div className={styles.insCont}>
      <div className={styles.insTit}>İnstruktorlar</div>
      <div className={styles.instHead}>Təsvir</div>
      <div className={styles.textBoxCont}>
        <div className={styles.tbIc}>
          <img src={edit} alt="" />
        </div>
        {/* this textbox cannot be resized */}
        <textarea
          className={styles.taCont}
          placeholder="Burada sizə yalnız nəzəri biliklər deyil, həm də real iş mühitində tətbiq olunan praktiki bacarıqlar öyrədilir. Hər bir müəllimimiz texnologiya sahəsindəki yenilikləri yaxından izləyir və öz dərslərində müasir yanaşmaları tətbiq edir."
        ></textarea>
      </div>
      <div className={styles.insGridHeader}>
        <div>İnstruktor</div>
        <div>Vəzifəsi/İş yeri</div>
        <div>Link</div>
        <div className={styles.icPlus}>
          <img src={plus} alt="" />
        </div>
      </div>
      <div className={styles.insFlexBody}>
        {/* <div className={styles.flexBodyLeft}> */}
          <div className={styles.cellOne}>
            <div className={styles.cellOneLeft}>
              <MdKeyboardArrowRight size={24} color="b9b2ff" />
              <div className={styles.insEditIc}>
                <img src={edit} alt="" />
              </div>
            </div>
            <div className={styles.cellOneRight}>
              <div className={styles.insPp}>
                <img className={styles.ppImg} src="https://thispersondoesnotexist.com/" alt="" />
              </div>
              <input className={styles.insInput} type="text" placeholder="Ağasif Abdullayev" />
            </div>
          </div>
          <div>
            <input className={`${styles.insInput} ${styles.specialityInput}`} type="text" placeholder="Product Designer / QA Engineer" />
          </div>
          <div>
            <input className={styles.insInput} type="text" placeholder="https://www.linkedin.com/in/a%" />
          </div>
        {/* </div> */}
        <div>
          <img src={trash} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Instructors
