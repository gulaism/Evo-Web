// icons
import { MdKeyboardArrowRight } from "react-icons/md";
import plus from "../../../../assets/images/admin/Partners/plusIcon.svg";
import edit from "../../../../assets/images/admin/Statistics/editIcon.svg";
import trash from '../../../../assets/images/admin/Partners/trashIcon.svg';
// styles
import styles from './Achievements.module.scss';

const Achievements = () => {
  return (
    <div className={styles.achieveCont}>
      <div className={styles.tit}>Nələri Bacaracaqsan?</div>
      <div className={styles.tableDiv}>
        {/* <table className={styles.table}>
          <tr className={styles.tableHead}>
            <th className={styles.headData}>Sloqan</th>
            <th>Təsvir</th>
            <th>
              <div>
                <img src={plus} alt="" />
              </div>
            </th>
          </tr>
          <tr>
            <td>
              <div>
                <div>
                  <img src={edit} alt="" />
                  <input type="text" placeholder="Bacarıqların sözlə ifadəsi" />
                </div>
                <div>
                  <MdKeyboardArrowRight size={24} color="#b4adff" />
                  <div>Fərqlənəcək bölmələri seçin</div>
                </div>
              </div>
            </td>
            <td>
              <div>
                <img src={edit} alt="" />
                <input
                  type="text"
                  placeholder="Vəd edilmiş bacarıqların 1 və ya 2 cümlə ilə sadə, lokanik izahı."
                />
              </div>
            </td>
            <td>
              <div>
                <img src={trash} alt="" />
              </div>
            </td>
          </tr>
        </table> */}
        <div className={styles.gridHead}>
          <div className={styles.headData}>Sloqan</div>
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
                placeholder="Bacarıqların sözlə ifadəsi"
              />
            </div>
            <div className={styles.differWord}>
              <MdKeyboardArrowRight size={24} color="#b4adff" />
              <div className={styles.sectionText}>
                Fərqlənəcək bölmələri seçin
              </div>
            </div>
          </div>
          <div className={styles.descCell}>
            <img src={edit} alt="" />
            <input
              className={styles.input}
              type="text"
              placeholder="Vəd edilmiş bacarıqların 1 və ya 2 cümlə ilə sadə, lokanik izahı."
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
  );
};

export default Achievements;
