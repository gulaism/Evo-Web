// styles
import styles from "./Sidebar.module.scss";
// icons
import bookIcon from "../../../assets/images/admin/Sidebar/bookIcon.svg";
import contactIcon from "../../../assets/images/admin/Sidebar/contactIcon.svg";
import exitIcon from "../../../assets/images/admin/Sidebar/exitIcon.svg";
import fieldsIcon from "../../../assets/images/admin/Sidebar/fieldsIcon.svg";
import graduatesIcon from "../../../assets/images/admin/Sidebar/graduatesIcon.svg";
import logo from "../../../assets/images/admin/Sidebar/logo.svg";
import mainIcon from "../../../assets/images/admin/Sidebar/mainIcon.svg";
import settingsIcon from "../../../assets/images/admin/Sidebar/settingsIcon.svg";


const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.coloredDiv}></div>
      <div className={styles.rightDiv}>
        <ul className={styles.menu}>
          <li className={`${styles.menuItem} ${styles.selected}`}>
            <div>
              <img src={mainIcon} alt="" />
            </div>
            <p>Ana səhifə</p>
          </li>
          <li className={styles.menuItem}>
            <div>
              <img src={bookIcon} alt="" />
            </div>
            <p>Haqqımızda</p>
          </li>
          <li className={styles.menuItem}>
            <div>
              <img src={fieldsIcon} alt="" />
            </div>
            <p>Tədris sahələri</p>
          </li>
          <li className={styles.menuItem}>
            <div>
              <img src={graduatesIcon} alt="" />
            </div>
            <p>Məzunlarımız</p>
          </li>
          <li className={styles.menuItem}>
            <div>
              <img src={contactIcon} alt="" />
            </div>
            <p>Əlaqə</p>
          </li>
        </ul>
        <div>
          <ul>
            <li>
              <div>
                <img src={settingsIcon} alt="" />
              </div>
              <p>Tənzimləmələr</p>
            </li>
            <li>
              <div>
                <img src={exitIcon} alt="" />
              </div>
              <p>Çıxış</p>
            </li>
          </ul>
          <div className={styles.logo}>
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;