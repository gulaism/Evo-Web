import style from "./InstructorsSection.module.scss";
import plusIcon from "../../../../../assets/images/admin/Partners/plusIcon.svg";
import editIcon from "../../../../../assets/images/admin/Statistics/editIcon.svg";
import trashIcon from "../../../../../assets/images/admin/Partners/trashIcon.svg";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import React, { useState } from "react";

const initialStudents = [
    {
        id: 1,
        name: "Paşayev Namiq",
        job: "Codeon / Rəqəmsal marketoloq",
        linkedin: "https://www.linkedin.com/in/namiq",
        text: [
            "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            "Etiam tincidunt lacinia sem, at finibus arcu fermentum sed. Sed finibus ipsum e",
            "Duis tincidunt dictum ultrices. Pellentesque purus dolor, scelerisque at sodales quis."
        ],
    },
    {
        id: 2,
        name: "Paşayeva Nata",
        job: "Codeon / marketoloq",
        linkedin: "https://www.linkedin.com/in/nata",
        text: ["Salam", "Necesiz?", "Sag olun!!!"],
    },
];

const InstructorsSection = ({ setIsEnabled }) => {
    const [editableStudentId, setEditableStudentId] = useState(null);
    const [students, setStudents] = useState(initialStudents);
    const [editingTextId, setEditingTextId] = useState(null);
    const [showStudentText, setShowStudentText] = useState(null);
    const [description, setDescription] = useState("Burada sizə yalnız nəzəri biliklər deyil...");
    const [isEditingDesc, setIsEditingDesc] = useState(false);

    const handleEditStudentInfo = (e, id, field) => {
        setIsEnabled(true);
        const updatedValue = e.target.value;
        setStudents(prevStudents =>
            prevStudents.map(student =>
                student.id === id ? { ...student, [field]: updatedValue } : student
            )
        );
    };

    return (
        <div className={style.reviews}>
            <div className={style.header}>Instruktorlar</div>
            <h2>Təsvir</h2>
            <div className={style.inputContainer}>
                <AiOutlineEdit className={style.icon} onClick={() => setIsEditingDesc(true)} />
                {isEditingDesc ? (
                    <textarea className={style.textarea} value={description} onChange={(e) => setDescription(e.target.value)} onBlur={() => setIsEditingDesc(false)} autoFocus />
                ) : (
                    <p>{description}</p>
                )}
            </div>
            <table className={style.customTable}>
                <thead>
                    <tr>
                        <th style={{ paddingLeft: "77px" }}>İnstruktor</th>
                        <th>Vəzifəsi/İş yeri</th>
                        <th>LinkedIn</th>
                        <th>
                            <img src={plusIcon} alt="" />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <React.Fragment key={student.id}>
                            <tr key={student.id}>
                                <td className={style.studentCell}>
                                    <div className={style.iconsCont}>
                                        {showStudentText !== student.id ? (
                                            <MdKeyboardArrowRight onClick={() => setShowStudentText(student.id)} className={style.expandBtn} size={24} color="#b9b3f9" />
                                        ) : (
                                            <MdKeyboardArrowDown size={24} color="#b9b3f9" className={style.expandBtn} onClick={() => setShowStudentText(null)} />
                                        )}
                                        <button onClick={() => setEditableStudentId(student.id)} className={style.editBtn}>
                                            <img src={editIcon} alt="" />
                                        </button>
                                    </div>
                                    <div className={style.studentCont}>
                                        <div>
                                            <img src="https://thispersondoesnotexist.com/" alt="Profile" className={style.profileImg} />
                                        </div>
                                        <input type="text" disabled={editableStudentId !== student.id} value={student.name} onChange={(e) => handleEditStudentInfo(e, student.id, "name")} />
                                    </div>
                                </td>
                                <td className={style.jobCell}>
                                    <input disabled={editableStudentId !== student.id} type="text" value={student.job} onChange={(e) => handleEditStudentInfo(e, student.id, "job")} />
                                </td>
                                <td className={style.linkedinCell}>
                                    <input disabled={editableStudentId !== student.id} type="text" value={student.linkedin} onChange={(e) => handleEditStudentInfo(e, student.id, "linkedin")} />
                                </td>
                                <td className={style.btnCell}>
                                    <button className={style.deleteBtn}>
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

export default InstructorsSection;
