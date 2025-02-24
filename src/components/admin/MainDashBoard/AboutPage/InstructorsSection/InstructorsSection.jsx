// style
import style from "./InstructorsSection.module.scss";
// icons
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
            "Salam",
            "Necesiz?",
            "Sag olun!!!",
        ],
    },
];

const InstructorsSection = ({ setIsEnabled }) => {
    const [editableStudentId, setEditableStudentId] = useState(null);
    const [students, setStudents] = useState(initialStudents);
    const [editingTextId, setEditingTextId] = useState(null);
    const [showStudentText, setShowStudentText] = useState(null);

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

        <div className={style.reviews}>
            <div className={style.header}>Instruktorlar</div>
            <h2>Təsvir</h2>
            <div className={style.inputContainer}>
                <AiOutlineEdit className={style.icon} />
                <h2 className={style.hashtag}>Burada sizə yalnız nəzəri biliklər deyil, həm də real iş mühitində tətbiq olunan praktiki bacarıqlar öyrədilir. Hər bir müəllimimiz texnologiya sahəsindəki yenilikləri yaxından izləyir və öz dərslərində müasir yanaşmaları tətbiq edir.</h2>
            </div>
            <table className={style.customTable}>
                <thead>
                    <tr>
                        <th style={{ paddingLeft: "77px" }}>İnstruktor</th>
                        <th>Vəzifəsi/İş yeri</th>
                        <th style={{ marginLeft: "54px" }}>
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
                                            <MdKeyboardArrowRight
                                                onClick={() => setShowStudentText(student.id)}
                                                className={style.expandBtn}
                                                size={24}
                                                color="#b9b3f9"
                                            />
                                        ) : (
                                            <MdKeyboardArrowDown
                                                size={24}
                                                color="#b9b3f9"
                                                className={style.expandBtn}
                                                onClick={() => setShowStudentText(null)}
                                            />
                                        )}
                                        <button
                                            onClick={() => setEditableStudentId(student.id)}
                                            className={style.editBtn}
                                        >
                                            <img src={editIcon} alt="" />
                                        </button>
                                    </div>
                                    <div className={style.studentCont}>
                                        <div>
                                            <img
                                                src="https://thispersondoesnotexist.com/"
                                                alt="Profile"
                                                className={style.profileImg}
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
                                <td className={style.jobCell}>
                                    <input
                                        disabled={editableStudentId !== student.id}
                                        type="text"
                                        value={student.job}
                                        onChange={(e) =>
                                            handleEditStudentInfo(e, student.id, "job")
                                        }
                                    />
                                </td>
                                <td className={style.btnCell}>
                                    <button className={style.deleteBtn}>
                                        <img src={trashIcon} alt="" />
                                    </button>
                                </td>
                            </tr>
                            {showStudentText === student.id && (
                                <tr className={style.withBorder}>
                                    <td colSpan="3" className={style.textCell}>
                                        {editingTextId === student.id ? (
                                            <textarea
                                                value={student.text.join("\n")}
                                                onChange={(e) => handleEditStudentText(e, student.id)}
                                                onBlur={() => setEditingTextId(null)}
                                                autoFocus
                                            />
                                        ) : (
                                            <div
                                                className={style.descPar}
                                                onClick={() => setEditingTextId(student.id)}
                                            >
                                                {student.text.map((line, index) => (
                                                    <p key={index}>{line}</p>
                                                ))}
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>

    );
};

export default InstructorsSection;
