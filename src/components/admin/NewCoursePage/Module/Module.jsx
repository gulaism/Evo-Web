// styles
import styles from './Module.module.scss';
// icons 
import { MdKeyboardArrowRight } from "react-icons/md";
import plus from "../../../../assets/images/admin/Partners/plusIcon.svg";
import edit from "../../../../assets/images/admin/Statistics/editIcon.svg";
import trash from '../../../../assets/images/admin/Partners/trashIcon.svg';


const Module = () => {
  return (
    <div className={styles.achieveCont}>
          <div className={styles.tit}>Modul</div>
          <div className={styles.tableDiv}>
            <div className={styles.gridHead}>
              <div className={styles.headData}>Adı</div>
              <div className={styles.headData}>Təsvir</div>
              <div>
                <div>
                  <img src={plus} alt="" />
                </div>
              </div>
            </div>
            <div className={styles.gridBody}>
              <div className={styles.sloganCell}>
                <div className={styles.word}>
                  <img src={edit} alt="" />
                  <input
                    className={styles.input}
                    type="text"
                    placeholder="Modul başlığı"
                  />
                </div>
                {/* <div className={styles.differWord}>
                  <MdKeyboardArrowRight size={24} color="#b4adff" />
                  <div className={styles.sectionText}>
                    Fərqlənəcək bölmələri seçin
                  </div>
                </div> */}
              </div>
              <div className={styles.descCell}>
                <img src={edit} alt="" />
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Bu vaxt ərzində keçiriləcək modulun qısa təsviri"
                />
              </div>
              <div className={styles.lastCell}>
                <div className={styles.iconCell}>
                  <img src={trash} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Module
