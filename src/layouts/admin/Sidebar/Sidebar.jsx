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
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = ({ isAddPageOpen, setIsAddPageOpen }) => {
  const [selectedPage, setSelectedPage] = useState("");
  const [showFields, setShowFields] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (
      isAddPageOpen === true &&
      location.pathname.split("/").pop() === "newcourse"
    ) {
      setSelectedPage("fields");
    }
  }, [isAddPageOpen, setIsAddPageOpen]);

  const handleOpenPage = (pageName) => {
    setIsAddPageOpen(false);
    setSelectedPage(pageName);
    navigate(`/admin/${pageName}`);
  };

  const handleNavigateToTheField = () => {
    navigate("/admin/field");
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.coloredDiv}></div>
      <div className={styles.rightDiv}>
        <ul className={styles.menu}>
          <li
            onClick={() => handleOpenPage("")}
            className={`${styles.menuItem} ${
              selectedPage === "" && styles.selected
            }`}
          >
            <div className={styles.imgCont}>
              <img src={mainIcon} alt="" />
            </div>
            <p className={styles.par}>Ana səhifə</p>
          </li>
          <li
            onClick={() => handleOpenPage("about")}
            className={`${styles.menuItem} ${
              selectedPage === "about" && styles.selected
            }`}
          >
            <div className={styles.imgCont}>
              <img src={bookIcon} alt="" />
            </div>
            <p className={styles.par}>Haqqımızda</p>
          </li>
          <li className={styles.fieldsCont}>
            <div
              onClick={() => handleOpenPage("fields")}
              className={`${styles.fieldsOfStudyAbove} ${
                selectedPage === "fields" && styles.selected
              }`}
            >
              <div className={styles.imgCont}>
                <img src={fieldsIcon} alt="" />
              </div>
              <p className={styles.par}>Tədris sahələri</p>
            </div>
            <div className={styles.categories}>
              <div onClick={() => setShowFields(!showFields)}>
                {showFields ? (
                  <MdKeyboardArrowDown size={16} color="#7367FF80" />
                ) : (
                  <MdKeyboardArrowRight size={16} color="#7367FF80" />
                )}
                <span>Proqramlaşdırma</span>
              </div>
              {showFields && (
                <div
                  className={styles.addedField}
                  onClick={handleNavigateToTheField}
                >
                  Advanced Front-end
                </div>
              )}
              <div>
                <MdKeyboardArrowRight size={16} color="#7367FF80" />
                <span>Dizayn</span>
              </div>
            </div>
          </li>
          <li
            onClick={() => handleOpenPage("graduates")}
            className={`${styles.menuItem} ${
              selectedPage === "graduates" && styles.selected
            }`}
          >
            <div className={styles.imgCont}>
              <img src={graduatesIcon} alt="" />
            </div>
            <p className={styles.par}>Məzunlarımız</p>
          </li>
          <li
            onClick={() => handleOpenPage("contact")}
            className={`${styles.menuItem} ${
              selectedPage === "contact" && styles.selected
            }`}
          >
            <div className={styles.imgCont}>
              <img src={contactIcon} alt="" />
            </div>
            <p className={styles.par}>Əlaqə</p>
          </li>
        </ul>
        <div className={styles.bottomMenu}>
          <ul>
            <li onClick={() => handleOpenPage("settings")}
              className={` ${
                selectedPage === "settings" && styles.selected
              }`}>
              <div>
                <img src={settingsIcon} alt="" />
              </div>
              <p className={styles.par}>Tənzimləmələr</p>
            </li>
            <li>
              <div>
                <img src={exitIcon} alt="" />
              </div>
              <p className={styles.par}>Çıxış</p>
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
