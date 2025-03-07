// styles
import styles from "./Navbar.module.scss";
// icons
import profileCircle from "../../../assets/images/admin/Navbar/profileCircle.svg";
import { FiX } from "react-icons/fi";

const Navbar = ({ isAddPageOpen }) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.greeting}>
        <div>
          <img src={profileCircle} alt="" />
        </div>
        <div>
          <p className={styles.heyCont}>Hey Admin,</p>
          <p className={styles.welCont}>Xoş gəlmisən!</p>
        </div>
      </div>
      {isAddPageOpen && (
        <div className={styles.closeBtn}>
          <FiX
            color="#4A3AFF"
            size={20}
            style={{
              backgroundColor: "#e2deff",
              padding: "5px",
              borderRadius: "50%",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
