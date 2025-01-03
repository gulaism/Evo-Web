import React from "react";
// images
import email from "../../../assets/images/Footer/Message.svg";
import fb from "../../../assets/images/Footer/facebook.svg";
import linkedIn from "../../../assets/images/Footer/linkedin.svg";
import yt from "../../../assets/images/Footer/youtube.svg";
import instagram from "../../../assets/images/Footer/instagram.svg";
import wp from "../../../assets/images/Footer/whatsapp.svg";
import address from "../../../assets/images/Footer/Pin.svg";
import phone from "../../../assets/images/Footer/Phone.svg";
import logo from "../../../assets/images/Footer/EvoCodingLogo.svg";
// styles
import styles from "./Footer.module.scss";

const Footer = () => {
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
                <div>Tədris sahələri</div>
                <div>Təlimçilər</div>
                <div>Partnyorlar</div>
                <div>Təcrübə proqramları</div>
                <div>Təqaüd</div>
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
                  href="mailto:evolearningcenter@gmail.com"
                  className={styles.contactCont}
                >
                  <div className={styles.iconCont}>
                    <img
                      className={styles.iconImg}
                      src={email}
                      alt="evo academy email address"
                    />
                  </div>
                  <div>evolearningcenter@gmail.com</div>
                </a>
                <a href="tel:+994 55 773 34 52" className={styles.contactCont}>
                  <div className={styles.iconCont}>
                    <img
                      className={styles.iconImg}
                      src={phone}
                      alt="evo academy email address"
                    />
                  </div>
                  <div>+994 55 773 34 52</div>
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Evo+Academy"
                  className={styles.contactCont}
                >
                  <div className={styles.iconCont}>
                    <img
                      className={styles.iconImg}
                      src={address}
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
            <div className={styles.iconCont}>
              <img
                className={styles.iconImg}
                src={wp}
                alt="contact with whatsapp"
              />
            </div>
            <div className={styles.iconCont}>
              <img
                className={styles.iconImg}
                src={instagram}
                alt="contact with instagram"
              />
            </div>
            <div className={styles.iconCont}>
              <img className={styles.iconImg} src={yt} alt="youtube channel" />
            </div>
            <div className={styles.iconCont}>
              <img
                className={styles.iconImg}
                src={linkedIn}
                alt="contact with linkedIn"
              />
            </div>
            <div className={styles.iconCont}>
              <img
                className={styles.iconImg}
                src={fb}
                alt="contact with facebook"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
