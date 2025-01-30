import React, { useState } from 'react'
// styles
import styles from "./ResponsiveNavbar.module.scss"; 
// assets
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { FaLaptopCode } from 'react-icons/fa';
import bottomArrow from "../../../assets/images/Header/bottomArrow.svg"
import { Link, useNavigate } from 'react-router-dom';

const fields = [
    {
      name: "Proqramlaşdırma",
      description: "Front-end  və Back-end proqramlaşdırma",
      subTopics: [
        "Advanced Front-end",
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

const FieldsComponent = ({ setShowResponsiveNavbar }) => {
    const [ showDetailsOfField, setShowDetailsOfField ] = useState(null);
    const navigate = useNavigate();

    const handleToggleField = (id) =>
      setShowDetailsOfField((prev) => (prev === id ? null : id));

    const goToTheField = (nameOfField) => {
      navigate("/field", {state: {field: nameOfField}});
      setShowResponsiveNavbar(false);
    }

    return (
      <div className={styles.fieldsdCont}>
        {fields.map((field, index) => (
          <div key={index}>
            <div onClick={() => handleToggleField(index)} className={styles.flexEl} key={index}>
              <div className={styles.mainIconCont}>
                <FaLaptopCode size={25} color="#4A3AFF" />
              </div>
              <div>
                <div className={styles.abovePart}>
                  <div>{field.name}</div>
                  {showDetailsOfField !== index ? (
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
                  <div onClick={() => goToTheField(sbTpc)} key={index}>{sbTpc}</div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
}

const ResponsiveNavbar = ({ setShowResponsiveNavbar }) => {
  const [ showFields, setShowFields ] = useState(false);
  const handleOpenFields = () => {
    setShowFields(true)
    console.log('isledi');
    
  };
  const handleCloseFields = () => setShowFields(false);
  
  const closeNavBar = () => setShowResponsiveNavbar(false);

  return !showFields ? (
    <div className={styles.respCont}>
      <div style={{position: "relative"}}>
        <Link style={{position: "absolute", inset: "0"}} onClick={closeNavBar} to={"/about"}></Link>
        <div>Haqqımızda</div>
        <BiRightArrowAlt size={18} color="#170F49" />
      </div>
      <div>
        <Link
          to={"/education"}
          onClick={() => setShowResponsiveNavbar(false)}
          style={{ whiteSpace: "nowrap" }}
        >
          Tədris Sahələri
        </Link>
        <BiRightArrowAlt size={18} color="#170F49" />
        <div
          onClick={handleOpenFields}
          style={{
            width: "100%",
            height: "24px",
            backgroundColor: "transparent",
          }}
        ></div>
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
        <BiLeftArrowAlt color="#170F49" size={18} />
        <div>Geri qayıt</div>
      </div>
      <FieldsComponent setShowResponsiveNavbar={setShowResponsiveNavbar}/>
    </div>
  );
}

export default ResponsiveNavbar
