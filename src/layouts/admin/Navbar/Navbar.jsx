// styles
import styles from "./Navbar.module.scss";
// icons
import profileCircle from "../../../assets/images/admin/Navbar/profileCircle.svg";
import search from "../../../assets/images/admin/Navbar/search.svg";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
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
    </div>
  );
};

export default Navbar;
