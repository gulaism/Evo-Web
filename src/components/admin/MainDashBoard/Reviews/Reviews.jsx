// style
import styles from "./Reviews.module.scss";
// icons
import plusIcon from "../../../../assets/images/admin/Partners/plusIcon.svg";
import editIcon from "../../../../assets/images/admin/Statistics/editIcon.svg";
import trashIcon from "../../../../assets/images/admin/Partners/trashIcon.svg";
import { MdKeyboardArrowRight } from "react-icons/md";
import React, { useState } from "react";

const initialStudents = [
  {
    id: 1,
    name: "Paşayev Namiq",
    job: "Codeon / Rəqəmsal marketoloq",
    text: [
      "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque non cursus risus, eu aliquam tellus. Donec ante dui, semper nec placerat ac, vestibulum vel libero. In vulputate hendrerit sagittis. Morbi tincidunt ultricies auctor. Proin pulvinar neque eu tempus imperdiet.",
      "Etiam tincidunt lacinia sem, at finibus arcu fermentum sed. Sed finibus ipsum e",
      "Duis tincidunt dictum ultrices. Pellentesque purus dolor, scelerisque at sodales quis, porta quis lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque tristique luctus bibendum. Duis luctus vehicula condimentum. Cras sed feugiat sem. Nulla tempor congue augue ac consequat.",
    ],
  },
  {
    id: 2,
    name: "Paşayeva Nata",
    job: "Codeon / marketoloq",
    text: [
      "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque non cursus risus, eu aliquam tellus. Donec ante dui, semper nec placerat ac, vestibulum vel libero. In vulputate hendrerit sagittis. Morbi tincidunt ultricies auctor. Proin pulvinar neque eu tempus imperdiet.",
      "Etiam tincidunt lacinia sem, at finibus arcu fermentum sed. Sed finibus ipsum e",
      "Duis tincidunt dictum ultrices. Pellentesque purus dolor, scelerisque at sodales quis, porta quis lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque tristique luctus bibendum. Duis luctus vehicula condimentum. Cras sed feugiat sem. Nulla tempor congue augue ac consequat.",
    ],
  },
];

const Reviews = ({ setIsEnabled }) => {
  const [editableStudentId, setEditableStudentId] = useState(null);
  const [students, setStudents] = useState(initialStudents);
  const [editingTextId, setEditingTextId] = useState(null);

  const handleEditStudentInfo = (e, id, field) => {
    setIsEnabled(true);
    const updatedValue = e.target.value;
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id
          ? { ...student, [field]: updatedValue }
          : student
      )
    );
  };


  const handleEditStudentText = (e, id) => {
    const newTextArray = e.target.value.split("\n");
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, text: newTextArray } : student
      )
    );
  };




  return (
    <div className={styles.reviews}>
      <div className={styles.header}>Tələbə rəyləri</div>
      <h2>Tələbə Rəyləri</h2>
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
          {students.map((student) => (
            <React.Fragment key={student.id}>
              <tr key={student.id}>
                <td className={styles.studentCell}>
                  <div className={styles.iconsCont}>
                    <MdKeyboardArrowRight
                      className={styles.expandBtn}
                      size={24}
                      color="#b9b3f9"
                    />
                    <button
                      onClick={() => setEditableStudentId(student.id)}
                      className={styles.editBtn}
                    >
                      <img src={editIcon} alt="" />
                    </button>
                  </div>
                  <div className={styles.studentCont}>
                    <div>
                      <img
                        src="https://thispersondoesnotexist.com/"
                        alt="Profile"
                        className={styles.profileImg}
                      />
                    </div>
                    <input
                      type="text"
                      disabled={editableStudentId !== student.id}
                      value={student.name}
                      onChange={(e) =>
                        handleEditStudentInfo(e, student.id, "name")
                      }
                    />
                  </div>
                </td>
                <td className={styles.jobCell}>
                  <input
                    disabled={editableStudentId !== student.id}
                    type="text"
                    value={student.job}
                    onChange={(e) =>
                      handleEditStudentInfo(e, student.id, "job")
                    }
                  />
                </td>
                <td className={styles.btnCell}>
                  <button className={styles.deleteBtn}>
                    <img src={trashIcon} alt="" />
                  </button>
                </td>
              </tr>
              <tr className={styles.withBorder}>
                <td colSpan="3" className={styles.textCell}>
                  {editingTextId === student.id ? (
                    <textarea
                      value={student.text.join("\n")}
                      onChange={(e) => handleEditStudentText(e, student.id)}
                      onBlur={() => setEditingTextId(null)}
                      autoFocus
                    />
                  ) : (
                    <div
                      className={styles.descPar}
                      onClick={() => setEditingTextId(student.id)}
                    >
                      {student.text.map((line, index) => (
                        <p key={index}>{line}</p>
                      ))}
                    </div>
                  )}
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reviews;
