import React from 'react'
// images
import logo from '../../../assets/images/Header/EvoCodingLogo.svg'
// styles
import styles from "./Header.module.scss"
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={`container ${styles.headerCont}`}>
      <Link to={"/"} className={styles.logoCont}>
        <img className={styles.logoImg} src={logo} alt="Evo Academy Logo" />
      </Link>
      <div className={styles.navCont}>
        <Link style={{textDecoration: "none", color: "inherit"}} to={"/about"}>Haqqımızda</Link>
        <Link style={{textDecoration: "none", color: "inherit"}} to={"/education"}>Tədris sahələri</Link>
        <Link style={{textDecoration: "none", color: "inherit"}} to={"/students"}>Məzunlarımız</Link>
        <Link style={{textDecoration: "none", color: "inherit"}} to={"/contact"}>Əlaqə</Link>
      </div>
      <button>Müraciət et</button>
    </div>
  );
}

export default Header
