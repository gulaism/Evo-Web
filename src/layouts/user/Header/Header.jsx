import React, { useState } from 'react'
// images
import logo from '../../../assets/images/Header/EvoCodingLogo.svg'
// styles
import styles from "./Header.module.scss"
import { Link } from 'react-router-dom';

const Header = ({  showApplication, setShowApplication }) => {


  const handleOpenModal = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
    document.body.style.overflow = 'hidden';
    // document.body.style.pointerEvents = 'none';
    console.log(showApplication);
    setShowApplication(true);
    console.log(showApplication);
  }

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
      <button onClick={handleOpenModal}>Müraciət et</button>
    </div>
  );
}

export default Header
