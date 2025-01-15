import React, { useRef, useState } from 'react'
// images
import logo from '../../../assets/images/Header/EvoCodingLogo.svg'
// styles
import styles from "./Header.module.scss"
import { Link } from 'react-router-dom';
import { BiRightArrowAlt } from 'react-icons/bi';
import { FaLaptopCode } from 'react-icons/fa';
import { RiShieldKeyholeFill } from 'react-icons/ri';
import { MdDesignServices } from 'react-icons/md';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import cancel from "../../../assets/images/HomePage/Application/Close.svg";
import ResponsiveNavbar from './ResponsiveNavbar';

const fields = [
  {
    name: "Proqramlaşdırma",
    description: "Front-end  və Back-end proqramlaşdırma",
    subTopics: [
      "Andvanced Front-end",
      "Back-end Java",
    ],
  },
  {
    name: "Ethical Hacking",
    description: "Ethical Hacking",
    subTopics: [
      "Ethical Hacking",
    ],
  },
  {
    name: "Dizayn",
    description: "Qrafik/Motion, UX/UI, İnteryer Dizayn",
    subTopics: [
      "Qrafik/Motion dizayn",
      "İnteryer dizayn",
      "UX/UI dizayn",
    ],
  },
  {
    name: "Data analitika",
    description: "Data analitika",
    subTopics: [
      "Data analitika",
    ],
  },
  {
    name: "Q/A Manual Testing",
    description: "Q/A Manual Testing",
    subTopics: [
      "Q/A Manual Testing",
    ],
  },
  {
    name: "Rəqəmsal Marketinq",
    description: "Rəqəmsal Marketinq",
    subTopics: [
      "Rəqəmsal Marketinq",
    ],
  },
  {
    name: "Agile",
    description: "Agile",
    subTopics: [
      "Agile",
    ],
  },
]

const HoveredSubCont = ({ subTopics }) => {
  return (
    <div className={styles.hoveredSubCont}>
      {subTopics.map((subTopic, index) => (
        <div key={index}>{subTopic}</div>
      ))}
    </div>
  )
}

const Header = ({  showApplication, setShowApplication }) => {
  const [ isHovered, setIsHovered ] = useState(false);
  const [ isSubHovered, setIsSubHovered ] = useState(null);
  const [ showResponsiveNavbar, setShowResponsiveNavbar ] = useState(false);
  const timeoutId = useRef(null);



  const handleOpenModal = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
    document.body.style.overflow = 'hidden';
    // document.body.style.pointerEvents = 'none';
    console.log(showApplication);
    setShowApplication(true);
    console.log(showApplication);
  }



  const handleShowingHoveredCont = () => {
    if(timeoutId.current) {
      clearTimeout(timeoutId.current);
      timeoutId.current = null;
    }  
    setIsHovered(true)
  };


  const handleClosingHoveredCont = () =>{
     timeoutId.current =setTimeout(() => {
    setIsHovered(false)
  }, 200);
  setIsSubHovered(null);
};


  const handleShowingHoveredSubCont = (index) => {
    if(timeoutId.current) {
      clearTimeout(timeoutId.current);
      timeoutId.current = null;
    }
    setIsSubHovered(index);
  }

  const handleClosingHoveredSubCont = (index) => {
    timeoutId.current = setTimeout(() => {
      setIsSubHovered(index);
    }, 200);
  }

  const handleToggleNavbarBtn = () => setShowResponsiveNavbar(!showResponsiveNavbar);

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
        <div className={styles.tabletCont}>
          <button onClick={handleOpenModal}>Müraciət et</button>
          {showResponsiveNavbar ? (
            <HiX
              onClick={handleToggleNavbarBtn}
              className={styles.tabletMenuBar}
              style={{ cursor: "pointer", color: "#0D0B26" }}
              size={44}
            />
          ) : (
            <HiMenuAlt4
              onClick={handleToggleNavbarBtn}
              className={styles.tabletMenuBar}
              style={{ cursor: "pointer", color: "#0D0B26" }}
              size={44}
            />
          )}
        </div>
      </div>
      <div
        className={styles.hoverCont}
        style={{ display: isHovered ? "flex" : "none" }}
        onMouseEnter={handleShowingHoveredCont}
        onMouseLeave={handleClosingHoveredCont}
      >
        {fields.map((field, index) => (
          <div
            key={index}
            className={styles.flexEl}
            onMouseEnter={() => handleShowingHoveredSubCont(index)}
            onMouseLeave={() => handleClosingHoveredSubCont(index)}
          >
            <div className={styles.mainIconCont}>
              <FaLaptopCode size={40} color="#4A3AFF" />
            </div>
            <div>
              <div className={styles.abovePart}>
                <div>{field.name}</div>
                <BiRightArrowAlt
                  size={20}
                  style={{ transition: "all 0.3s ease-in-out" }}
                  color={`${isSubHovered === index ? "#4A3AFF" : "#170F49"}`}
                />
              </div>
              <div className={styles.description}>{field.description}</div>
            </div>
            {isSubHovered === index && (
              <HoveredSubCont subTopics={field.subTopics} />
            )}
          </div>
        ))}
      </div>
      {showResponsiveNavbar && <ResponsiveNavbar />}
    </div>
  );
}

export default Header
