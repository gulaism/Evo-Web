import React, { useState } from "react";
import styles from "./FutureBuilders.module.scss";
import trashIcon from "../../../../assets/images/admin/Partners/trashIcon.svg";
import plusIcon from "../../../../assets/images/admin/Partners/plusIcon.svg";
import editIcon from "../../../../assets/images/admin/Statistics/editIcon.svg";
import futureLogo from "../../../../assets/images/admin/Alumnis/futureLogo.svg"

const FutureBuilders = () => {
  const [description, setDescription] = useState(
    "Məzunlarımızın uğurları, bizim davamlı inkişafımızın və təhsil sahəsindəki öndə olmağı məqsədimizin bir hissəsidir. Hər bir məzunumuz, akademiyamızın dəyərini və peşəkar vizyonunu dünyada təmsil edir."
  );

  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Ağasif Abdullayev",
      field: "Advanced - Front end",
      link: "https://www.linkedin.com",
      image: futureLogo,
    },
  ]);

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Gələcəyi Quranlar</h3>
      <h3 className={styles.subtitle}>Təsvir</h3>
      <textarea
        className={styles.description}
        value={description}
        onChange={handleDescriptionChange}
      />

      <div className={styles.header}>
        <span style={{marginLeft:"37px"} }> Tələbə </span>
        <span style={{marginRight:"600px"}}> Oxuduğu sahə </span>
        <img src={plusIcon} alt="add" className={styles.plusIcon} />
      </div>

      {students.map((student) => (
        <div key={student.id} className={styles.studentRow}>
          <div className={styles.studentInfo}>
            <img src={editIcon} alt="edit" className={styles.editIcon} />
            <img src={student.image} alt={student.name} className={styles.studentImage} />
            <input type="text" defaultValue={student.name} className={styles.studentInput} />
          </div>
          <input type="text" defaultValue={student.field} className={styles.studentInput} />
          <input type="text" defaultValue={student.link} className={styles.studentInput} />
          <img src={trashIcon} alt="delete" className={styles.trashIcon} />
        </div>
      ))}
    </div>
  );
};

export default FutureBuilders;
