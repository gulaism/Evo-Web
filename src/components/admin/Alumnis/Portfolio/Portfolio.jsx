import React, { useState } from "react";
import styles from "./Portfolio.module.scss";
import editIcon from "../../../../assets/images/admin/Statistics/editIcon.svg";
import plusIcon from "../../../../assets/images/admin/Partners/plusIcon.svg";
import trashIcon from "../../../../assets/images/admin/Partners/trashIcon.svg";
import futureLogo from "../../../../assets/images/admin/Alumnis/futureLogo.svg";
import portfolio from "../../../../assets/images/admin/Portfolio/portfolio.svg";  

const Portfolio = () => {
  const [description, setDescription] = useState(
    "Burada sizə yalnız nəzəri biliklər deyil, həm də real iş mühitində tətbiq olunan praktiki bacarıqlar öyrədilir. Hər bir müəllimimiz texnologiya sahəsindəki yenilikləri yaxından izləyir və öz dərslərində müasir yanaşmaları tətbiq edir."
  );

  const [student, setStudent] = useState({
    name: "Ağasif Abdullayev",
    position: "Product Designer / QA Engineer",
    behance: "https://www.behance.net/search/proj",
    feedback:
      '"Evo, biliklə yanaşı ilham verən, müəllimləri isə hər dərsdə dəstək və motivasiya mənbəyi olan bir ailədir!"',
    image: futureLogo,
  });

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Portfolio</h3>
      <h3 className={styles.subtitle}>Təsvir</h3>
      <div className={styles.descriptionWrapper}>
        <img src={editIcon} alt="edit" className={styles.icon} />
        <textarea
          className={styles.description}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <img src={plusIcon} alt="add" className={styles.plusIcon} />
     
      <div className={styles.portfolioFlex}>

      <div className={styles.studentWrapper}>
        <h4 className={styles.studentTitle}>Tələbə</h4>
        <div className={styles.studentInfo}>
          <img src={editIcon} alt="edit" className={styles.icon} />
          <img src={student.image} alt={student.name} className={styles.studentImage} />
          <input type="text" value={student.name} className={styles.studentInput} />
        </div>
        <label>Vəzifəsi/İş yeri</label>
        <input type="text" value={student.position} className={styles.studentInput} />
        <label style={{ margin: "10px" }}>Behance Link</label>
        <input type="text" value={student.behance} className={styles.studentInput} />
      </div>

      <div className={styles.portfolioWrapper}>

      <div className={styles.feedbackWrapper}>
        <h4>Positive Feedback</h4>
        <div className={styles.feedback}>
          <img src={editIcon} alt="edit" className={styles.icon} />
          <textarea className={styles.feedbackText} value={student.feedback} />
        </div>
      </div>

      <div className={styles.portfolioWrapper}>
        <h4>Portfolio</h4>
        <div className={styles.portfolioItems}>
          <img src={portfolio} alt="portfolio" className={styles.portfolioIcon} />
          <img src={portfolio} alt="portfolio" className={styles.portfolioIcon} />
          <img src={portfolio} alt="portfolio" className={styles.portfolioIcon} />
          <img src={portfolio} alt="portfolio" className={styles.portfolioIcon} />
          <img src={portfolio} alt="portfolio" className={styles.portfolioIcon} />
        
        
        </div>
        <img src={trashIcon} alt="delete" className={styles.trashIcon} />
        
      
      </div>

      </div>

      </div>

     
    </div>
  );
};

export default Portfolio;
