import React, { useState } from 'react'
// images
import logo from '../../../assets/images/Header/EvoCodingLogo.svg'
// styles
import styles from "./Header.module.scss"
import { Link } from 'react-router-dom';
import { BiRightArrow, BiRightArrowAlt } from 'react-icons/bi';
import { FaLaptopCode } from 'react-icons/fa';
import { RiShieldKeyholeFill } from 'react-icons/ri';
import { MdDesignServices } from 'react-icons/md';

const Header = ({  showApplication, setShowApplication }) => {
  const [ isHovered, setIsHovered ] = useState(false);



  const handleOpenModal = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
    document.body.style.overflow = 'hidden';
    // document.body.style.pointerEvents = 'none';
    console.log(showApplication);
    setShowApplication(true);
    console.log(showApplication);
  }



  const handleShowingHoveredCont = () => setIsHovered(true);


  const handleClosingHoveredCont = () => setIsHovered(false);

  return (
    <div className="container">
      <div className={styles.headerCont}>
        <Link to={"/"} className={styles.logoCont}>
          <img className={styles.logoImg} src={logo} alt="Evo Academy Logo" />
        </Link>
        <div className={styles.navCont}>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={"/about"}
          >
            Haqqımızda
          </Link>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            onMouseEnter={handleShowingHoveredCont}
            onMouseLeave={handleClosingHoveredCont}
          >
            Tədris sahələri
          </Link>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={"/students"}
          >
            Məzunlarımız
          </Link>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={"/contact"}
          >
            Əlaqə
          </Link>
        </div>
        <button onClick={handleOpenModal}>Müraciət et</button>
      </div>
      <div
        className={styles.hoverCont}
        style={{ display: isHovered ? "flex" : "none" }}
        onMouseEnter={handleShowingHoveredCont}
        onMouseLeave={handleClosingHoveredCont}
      >
        <div className={styles.flexEl}>
          <div className={styles.mainIconCont}>
            <FaLaptopCode size={40} color="#4A3AFF" />
          </div>
          <div>
            <div className={styles.abovePart}>
              <div>Proqramlaşdırma</div>
              <BiRightArrowAlt size={20} color="#170F49" />
            </div>
            <div className={styles.description}>
              Front-end və Back-end proqramlaşdırma
            </div>
          </div>
        </div>
        <div className={styles.flexEl}>
          <div className={styles.mainIconCont}>
            <RiShieldKeyholeFill size={40} color="#4A3AFF" />
          </div>
          <div>
            <div className={styles.abovePart}>
              <div>Ethical Hacking</div>
              <BiRightArrowAlt size={20} color="#170F49" />
            </div>
            <div className={styles.description}>Ethical Hacking</div>
          </div>
        </div>
        <div className={styles.flexEl}>
          <div className={styles.mainIconCont}>
            <MdDesignServices size={40} color="#4A3AFF" />
          </div>
          <div>
            <div className={styles.abovePart}>
              <div>Dizayn</div>
              <BiRightArrowAlt size={20} color="#170F49" />
            </div>
            <div className={styles.description}>
              Qrafik/Motion, UX/UI, İnteryer Dizayn
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header
