// styles
import styles from "./OurDifference.module.scss";
// icons
import plusIcon from "../../../../assets/images/admin/Partners/plusIcon.svg";
import trashIcon from "../../../../assets/images/admin/Partners/trashIcon.svg";
import editIcon from "../../../../assets/images/admin/Statistics/editIcon.svg";
// react
import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const initialData = [
  {
    id: 1,
    slogan: "From Zero, to Expert",
    description:
      "Təcrübəli müəllim və mentorlarımızla tələbələr real layihələrdə praktiki təcrübə qazanır.",
  },
  {
    id: 2,
    slogan: "From Zero, to Expert",
    description:
      "Təcrübəli müəllim və mentorlarımızla tələbələr real layihələrdə praktiki təcrübə qazanır.",
  },
  {
    id: 3,
    slogan: "From Zero, to Expert",
    description:
      "Təcrübəli müəllim və mentorlarımızla tələbələr real layihələrdə praktiki təcrübə qazanır.",
  },
  {
    id: 4,
    slogan: "From Zero, to Expert",
    description:
      "Təcrübəli müəllim və mentorlarımızla tələbələr real layihələrdə praktiki təcrübə qazanır.",
  },
];

const OurDifference = () => {
  const [editableDataId, setEditableDataId] = useState(null);
  const [data, setData] = useState(initialData);

  const handleEditDataInfo = (e, id, field) => {
    setIsEnabled(true);
    const updatedValue = e.target.value;
    setData((prevData) =>
      prevData.map((data) =>
        data.id === id ? { ...data, [field]: updatedValue } : data
      )
    );
  };
  return (
    <div className={styles.ourDif}>
      <div className={styles.header}>Fərqimiz</div>
      <table className={styles.customTable}>
        <thead>
          <tr>
            <th>Tələbə</th>
            <th>Vəzifəsi/İş yeri</th>
            <th>
              <img src={plusIcon} alt="" />
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) => (
            <React.Fragment key={data.id}>
              <tr key={data.id}>
                <td className={styles.sloganCell}>
                  <div className={styles.slogCont}>
                    <div className={styles.edit}>
                      <img src={editIcon} alt="" />
                    </div>
                    <input type="text" value={data.slogan} />
                  </div>
                  <div className={styles.optionCont}>
                    <MdKeyboardArrowRight size={24} color="#7367FF80" />
                    <div>Fərqlənəcək bölmələri seçin</div>
                  </div>
                </td>
                <td className={styles.jobCell}>
                  <div className={styles.jobCont}>
                    <div>
                      <img src={editIcon} alt="" />
                    </div>
                    <input type="text" value={data.description} />
                  </div>
                </td>
                <td className={styles.btnCell}>
                  <button className={styles.deleteBtn}>
                    <img src={trashIcon} alt="" />
                  </button>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OurDifference;
