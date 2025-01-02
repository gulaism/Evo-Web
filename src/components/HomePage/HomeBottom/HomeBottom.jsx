import React from "react";
import styles from "./HomeBottom.module.scss";
import logoPartner from "../../../assets/images/HomePage/Partners/logoPartner.svg";

const HomeBottom = () => {
    // Logoların siyahısını dörd dəfə eyni logo ilə doldururuq
    const logos = Array.from({ length: 4 }, (_, index) => ({
        id: index + 1,
        src: logoPartner,
        alt: `Dövlət Məşğulluq Agentliyi ${index + 1}`,
    }));

    return (
        <div className="container">
            <div className={styles.partners}>
                <h2>Partnyorlar</h2>
                <div className={styles.partnerLogos}>
                    {logos.map((logo) => (
                        <img
                            key={logo.id}
                            src={logo.src}
                            alt={logo.alt}
                            className={styles.partnerLogo}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeBottom;
