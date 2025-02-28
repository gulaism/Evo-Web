// styles
import styles from "./OurDifference.module.scss";
// icons
import plusIcon from "../../../../assets/images/admin/Partners/plusIcon.svg";
import trashIcon from "../../../../assets/images/admin/Partners/trashIcon.svg";
import editIcon from "../../../../assets/images/admin/Statistics/editIcon.svg";
import vector from "../../../../assets/images/admin/Difference/Vector.svg";
import tick from "../../../../assets/images/admin/Difference/tick.svg";
// react
import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

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

const OurDifference = ({ setIsEnabled }) => {
  const [editableDataId, setEditableDataId] = useState(null);
  const [data, setData] = useState(initialData);
  const [clickedDifWords, setClickedDifWords] = useState({});
  const [expandedRow, setExpandedRow] = useState(null);

  const handleEditDataInfo = (e, id, field) => {
    setIsEnabled(true);
    const updatedValue = e.target.value;
    setData((prevData) =>
      prevData.map((data) =>
        data.id === id ? { ...data, [field]: updatedValue } : data
      )
    );
  };

  const toggleRow = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  // const handleColorDifWord = (index) => {
  //   setClickedDifWord(index);
  // }

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
          {data.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              <tr key={rowIndex}>
                <td className={styles.sloganCell}>
                  <div className={styles.slogCont}>
                    <div className={styles.edit}>
                      <img src={editIcon} alt="" />
                    </div>
                    <input
                      type="text"
                      onChange={() => setIsEnabled(true)}
                      defaultValue={row.slogan}
                    />
                  </div>
                  {/* Toggle Arrow Button */}
                  <div
                    onClick={() => toggleRow(rowIndex)}
                    className={styles.optionCont}
                  >
                    {expandedRow === rowIndex ? (
                      <MdKeyboardArrowDown size={24} color="#7367FF" />
                    ) : (
                      <MdKeyboardArrowRight size={24} color="#7367FF80" />
                    )}
                    <div>Fərqlənəcək bölmələri seçin</div>
                  </div>
                  {/* Show only if row is expanded */}
                  {expandedRow === rowIndex && (
                    <div className={styles.difCont}>
                      {row?.slogan.split(/\s+/).map((word, wordIndex) => {
                        const selectedWords = clickedDifWords[rowIndex] || [];

                        return (
                          <div key={wordIndex} className={styles.difEl}>
                            {selectedWords.includes(wordIndex) ? (
                              <div
                                className={styles.activeCircle}
                                onClick={() =>
                                  setClickedDifWords((prev) => {
                                    const updatedSelection =
                                      prev[rowIndex]?.filter(
                                        (w) => w !== wordIndex
                                      ) || [];
                                    return {
                                      ...prev,
                                      [rowIndex]: updatedSelection,
                                    };
                                  })
                                }
                              >
                                <img src={tick} alt="" />
                              </div>
                            ) : (
                              <div
                                className={styles.circle}
                                onClick={() =>
                                  setClickedDifWords((prev) => {
                                    const updatedSelection = [
                                      ...(prev[rowIndex] || []),
                                      wordIndex,
                                    ];
                                    return {
                                      ...prev,
                                      [rowIndex]: updatedSelection,
                                    };
                                  })
                                }
                              ></div>
                            )}
                            <div className={styles.difWord}>{word}</div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </td>
                <td className={styles.jobCell}>
                  <div className={styles.jobCont}>
                    <div>
                      <img src={editIcon} alt="" />
                    </div>
                    <input
                      type="text"
                      onChange={(e) =>
                        handleEditDataInfo(e, row.id, "description")
                      }
                      value={row.description}
                    />
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
