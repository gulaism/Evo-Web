import React, { useState } from 'react'
// styles
import styles from "./ResponsiveNavbar.module.scss"; 
// assets
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { FaLaptopCode } from 'react-icons/fa';
import bottomArrow from "../../../assets/images/Header/bottomArrow.svg"

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

const FieldsComponent = () => {
    const [ showDetailsOfField, setShowDetailsOfField ] = useState(null);

    const handleToggleField = (id) =>
      setShowDetailsOfField((prev) => (prev === id ? null : id));

    return (
      <div className={styles.fieldsdCont}>
        {fields.map((field, index) => (
          <div>
            <div onClick={() => handleToggleField(index)} className={styles.flexEl} key={index}>
              <div className={styles.mainIconCont}>
                <FaLaptopCode size={25} color="#4A3AFF" />
              </div>
              <div>
                <div className={styles.abovePart}>
                  <div>{field.name}</div>
                  {showDetailsOfField === index ? (
                    <BiRightArrowAlt
                      size={20}
                      style={{ transition: "all 0.3s ease-in-out" }}
                    />
                  ) : (
                    <div>
                      <img src={bottomArrow} alt="" />
                    </div>
                  )}
                </div>
                <div className={styles.description}>{field.description}</div>
              </div>
            </div>
            {showDetailsOfField === index && (
              <div className={styles.subTopics}>
                {field.subTopics.map((sbTpc, index) => (
                  <div key={index}>{sbTpc}</div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
}

const ResponsiveNavbar = () => {
  const [ showFields, setShowFields ] = useState(false);
  const handleOpenFields = () => setShowFields(true);
  const handleCloseFields = () => setShowFields(false);
  
  return !showFields ? (
    <div className={styles.respCont}>
      <div>
        <div>Haqqımızda</div>
        <BiRightArrowAlt size={18} color="#170F49" />
      </div>
      <div onClick={handleOpenFields}>
        <div>Tədris Sahələri</div>
        <BiRightArrowAlt size={18} color="#170F49" />
      </div>
      <div>
        <div>Məzunlarımız</div>
        <BiRightArrowAlt size={18} color="#170F49" />
      </div>
      <div>
        <div>Əlaqə</div>
        <BiRightArrowAlt size={18} color="#170F49" />
      </div>
    </div>
  ) : (
    <div className={styles.subCont}>
      <div onClick={handleCloseFields} className={styles.backCont}>
        <BiLeftArrowAlt color='#170F49' size={18} />
        <div>Geri qayıt</div>
      </div>
      <FieldsComponent />
    </div>
  );
}

export default ResponsiveNavbar
