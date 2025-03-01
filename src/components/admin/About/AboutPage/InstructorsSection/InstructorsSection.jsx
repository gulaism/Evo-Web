import style from "./InstructorsSection.module.scss";
import plusIcon from "../../../../../assets/images/admin/Partners/plusIcon.svg";
import editIcon from "../../../../../assets/images/admin/Statistics/editIcon.svg";
import trashIcon from "../../../../../assets/images/admin/Partners/trashIcon.svg";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import React, { useEffect, useState } from "react";

const InstructorsSection = ({ setIsEnabled, content, setContent }) => {
    const [editableInstructorId, setEditableInstructorId] = useState(null);
    const [instructors, setInstructors] = useState([]);
    const [editingTextId, setEditingTextId] = useState(null);
    const [showInstructorText, setShowInstructorText] = useState(null);
    const [description, setDescription] = useState("Burada sizə yalnız nəzəri biliklər deyil...");
    const [isEditingDesc, setIsEditingDesc] = useState(false);

    // Backend-dən gələn instructors məlumatını state-ə yazırıq
    useEffect(() => {
        if (content?.instructors) {
            setInstructors(content.instructors);
        }
    }, [content]);

    const handleEditInstructorInfo = (e, id, field) => {
        setIsEnabled(true);
        const updatedValue = e.target.value;
        setInstructors(prevInstructors =>
            prevInstructors.map(instructor =>
                instructor.id === id ? { ...instructor, [field]: updatedValue } : instructor
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
                    {instructors.map((instructor) => (
                        <React.Fragment key={instructor.id}>
                            <tr>
                                <td className={style.studentCell}>
                                    <div className={style.iconsCont}>
                                        {showInstructorText !== instructor.id ? (
                                            <MdKeyboardArrowRight onClick={() => setShowInstructorText(instructor.id)} className={style.expandBtn} size={24} color="#b9b3f9" />
                                        ) : (
                                            <MdKeyboardArrowDown size={24} color="#b9b3f9" className={style.expandBtn} onClick={() => setShowInstructorText(null)} />
                                        )}
                                        <button onClick={() => setEditableInstructorId(instructor.id)} className={style.editBtn}>
                                            <img src={editIcon} alt="" />
                                        </button>
                                    </div>
                                    <div className={style.studentCont}>
                                        <div>
                                            <img src={instructor.profilePicture} alt="Profile" className={style.profileImg} />
                                        </div>
                                        <input type="text" disabled={editableInstructorId !== instructor.id} value={instructor.name} onChange={(e) => handleEditInstructorInfo(e, instructor.id, "name")} />
                                    </div>
                                </td>
                                <td className={style.jobCell}>
                                    <input disabled={editableInstructorId !== instructor.id} type="text" value={instructor.job} onChange={(e) => handleEditInstructorInfo(e, instructor.id, "job")} />
                                </td>
                                <td className={style.linkedinCell}>
                                    <input disabled={editableInstructorId !== instructor.id} type="text" value={instructor.linkedinLink} onChange={(e) => handleEditInstructorInfo(e, instructor.id, "linkedinLink")} />
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
