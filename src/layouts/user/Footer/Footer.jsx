import React, { useState } from "react";
// images
import email from "../../../assets/images/Footer/Message.svg";
import lightEmail from "../../../assets/images/Footer/lightMessage.svg";
import fb from "../../../assets/images/Footer/facebook.svg";
import lightFb from "../../../assets/images/Footer/lightFb.svg";
import linkedIn from "../../../assets/images/Footer/linkedin.svg";
import lightLinkedin from "../../../assets/images/Footer/lightLinkedin.svg";
import yt from "../../../assets/images/Footer/youtube.svg";
import lightYt from "../../../assets/images/Footer/lightYt.svg";
import lightIg from "../../../assets/images/Footer/lightIg.svg";
import instagram from "../../../assets/images/Footer/instagram.svg";
import wp from "../../../assets/images/Footer/whatsapp.svg";
import lightWp from "../../../assets/images/Footer/lightWp.svg";
import address from "../../../assets/images/Footer/Pin.svg";
import lightAddress from "../../../assets/images/Footer/lightPin.svg";
import phone from "../../../assets/images/Footer/Phone.svg";
import lightPhone from "../../../assets/images/Footer/lightPhone.svg";
import logo from "../../../assets/images/Footer/EvoCodingLogo.svg";
// styles
import styles from "./Footer.module.scss";

const Footer = () => {
const [ hoveredElement, setHoveredElement ] = useState(null);
  const handleHovering = (id) => setHoveredElement(id);
  const handleMouseLeave = () => setHoveredElement(null);

  return (
    <div className={styles.footerCont}>
      <div className="container">
        <div className={styles.aboveCont}>
          <div className={styles.logoCont}>
            <img src={logo} alt="" />
          </div>
          <div className={styles.aboveInfo}>
            <div>
              <div className={styles.heading}>Haqqımızda</div>
              <div className={styles.subHeadingCont}>
                <div>Akademiya haqqında</div>
                <div>Instruktorlar</div>
                <div>Təqaüd proqramı</div>
                <div>Partnyorlar</div>
                <div>Təcrübə proqramları</div>
              </div>
            </div>
            <div>
              <div className={styles.heading}>Tədris sahələri</div>
              <div className={styles.subHeadingCont}>
                <div>Proqramlaşdırma</div>
                <div>IT/Kibertəhlükəsizlik</div>
                <div>Dizayn</div>
                <div>Data Analitika</div>
                <div>Q/A Manual Testing</div>
                <div>Rəqəmsal Marketing</div>
                <div>Agile</div>
              </div>
            </div>
            <div>
              <div className={styles.heading}>Məzunlarımız</div>
              <div className={styles.subHeadingCont}>
                <div>Nəaliyyətlərimiz</div>
                <div>Məzunlarımızın işlədiyi şirkətlər</div>
                <div>Tələbələrin işləri</div>
              </div>
            </div>
            <div>
              <div className={styles.heading}>Əlaqə</div>
              <div className={styles.subHeadingCont}>
                <a
                  onMouseEnter={() => handleHovering("email")}
                  onMouseLeave={handleMouseLeave}
                  href="mailto:evolearningcenter@gmail.com"
                  className={styles.contactCont}
                >
                  <div className={styles.iconCont}>
                    <img
                      className={styles.iconImg}
                      src={hoveredElement === "email" ? lightEmail : email}
                      alt="evo academy email address"
                    />
                  </div>
                  <div>evolearningcenter@gmail.com</div>
                </a>
                <a
                  onMouseEnter={() => handleHovering("phone")}
                  onMouseLeave={handleMouseLeave}
                  href="tel:+994 55 773 34 52"
                  className={styles.contactCont}
                >
                  <div className={styles.iconCont}>
                    <img
                      className={styles.iconImg}
                      src={hoveredElement === "phone" ? lightPhone : phone}
                      alt="evo academy email address"
                    />
                  </div>
                  <div>+994 55 773 34 52</div>
                </a>
                <a
                  onMouseEnter={() => handleHovering("address")}
                  onMouseLeave={handleMouseLeave}
                  href="https://www.google.com/maps/search/?api=1&query=Evo+Academy"
                  className={styles.contactCont}
                >
                  <div className={styles.iconCont}>
                    <img
                      className={styles.iconImg}
                      src={
                        hoveredElement === "address" ? lightAddress : address
                      }
                      alt="evo academy email address"
                    />
                  </div>
                  <div>Ülvi Bünyadzadə k. 2</div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.belowCont}>
          <div>Ⓒ 2024 Evo Coding Academy.</div>
          <div className={styles.socialCont}>
            <a
              href="https://api.whatsapp.com/send/?phone=994557733452&text&type=phone_number&app_absent=0"
              onMouseEnter={() => handleHovering("wp")}
              onMouseLeave={handleMouseLeave}
              className={styles.iconCont}
            >
              <img
                className={styles.iconImg}
                src={hoveredElement === "wp" ? lightWp : wp}
                alt="contact with whatsapp"
              />
            </a>
            <a
              href="https://www.instagram.com/evoacademy.az/?hl=en"
              onMouseEnter={() => handleHovering("ig")}
              onMouseLeave={handleMouseLeave}
              className={styles.iconCont}
            >
              <img
                className={styles.iconImg}
                src={hoveredElement === "ig" ? lightIg : instagram}
                alt="contact with instagram"
              />
            </a>
            <a
              href="https://www.youtube.com/@evoacademy-az"
              onMouseEnter={() => handleHovering("yt")}
              onMouseLeave={handleMouseLeave}
              className={styles.iconCont}
            >
              <img
                className={styles.iconImg}
                src={hoveredElement === "yt" ? lightYt : yt}
                alt="youtube channel"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/evoacademy/posts/?feedView=all"
              onMouseEnter={() => handleHovering("li")}
              onMouseLeave={handleMouseLeave}
              className={styles.iconCont}
            >
              <img
                className={styles.iconImg}
                src={hoveredElement === "li" ? lightLinkedin : linkedIn}
                alt="contact with linkedIn"
              />
            </a>
            <a
              href="https://www.facebook.com/evoacademy.az/"
              onMouseEnter={() => handleHovering("fb")}
              onMouseLeave={handleMouseLeave}
              className={styles.iconCont}
            >
              <img
                className={styles.iconImg}
                src={hoveredElement === "fb" ? lightFb : fb}
                alt="contact with facebook"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
