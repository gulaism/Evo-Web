import React, { useState, useEffect } from "react";
import styles from "./ScholarshipSection.module.scss";
import { AiOutlineEdit } from "react-icons/ai";
import { useGetAboutQuery } from "../../../../../redux/services/adminApiSlice";

const ScholarshipProgram = ({ content, setContent }) => {
    const { data, isLoading } = useGetAboutQuery();

    const [editable, setEditable] = useState({
        name: false,
        paragraphs: []
    });

    // useEffect(() => {
    //     if (data?.scholarships?.length > 0) {
    //         setContent({ scholarships: data.scholarships });
    //         setEditable({
    //             name: false,
    //             paragraphs: new Array(data.scholarships[0].paragraphs.length).fill(false)
    //         });
    //     }
    // }, [data, setContent]);

    const handleEdit = (field, index = null) => {
        if (index !== null) {
            setEditable((prev) => {
                const newParagraphs = [...prev.paragraphs];
                newParagraphs[index] = true;
                return { ...prev, paragraphs: newParagraphs };
            });
        } else {
            setEditable((prev) => ({ ...prev, [field]: true }));
        }
    };

    const handleChange = (field, value, index = null) => {
        if (index !== null) {
            setContent((prev) => {
                const newParagraphs = [...(prev.scholarships?.at(0)?.paragraphs || [])];
                newParagraphs[index] = value;
                return {
                    ...prev,
                    scholarships: [
                        {
                            ...prev.scholarships?.at(0),
                            paragraphs: newParagraphs
                        }
                    ]
                };
            });
        } else {
            setContent((prev) => ({
                ...prev,
                scholarships: [
                    {
                        ...prev.scholarships?.at(0),
                        [field]: value
                    }
                ]
            }));
        }
    };

    // if (isLoading) return <p>Yüklənir...</p>;

    const scholarship = content.scholarships?.at(0);
    // if (!scholarship) return <p>Məlumat tapılmadı.</p>;

    return (
        <section className={styles.scholarshipProgram}>
            <h4 className={styles.subtitle}>Təqaüd Proqramı</h4>

            <h4 className={styles.title}>Sloqan</h4>
            <div className={styles.inputContainer}>
                <AiOutlineEdit className={styles.icon} onClick={() => handleEdit("name")} />
                <input
                    className={styles.input}
                    type="text"
                    value={scholarship?.name || ""}
                    onChange={(e) => handleChange("name", e.target.value)}
                    disabled={!editable.name}
                />
            </div>

            {scholarship?.paragraphs?.map((paragraph, index) => (
                <div key={index}>
                    <h4 className={styles.title}>Təsvir {index + 1}</h4>
                    <div className={styles.textareaContainer}>
                        <AiOutlineEdit className={styles.icon} onClick={() => handleEdit("paragraphs", index)} />
                        <textarea
                            className={styles.textarea}
                            value={paragraph}
                            onChange={(e) => handleChange("paragraphs", e.target.value, index)}
                            disabled={!editable.paragraphs[index]}
                        ></textarea>
                    </div>
                </div>
            ))}

            <p><strong>ID:</strong> {scholarship?.id}</p>
        </section>
    );
};

export default ScholarshipProgram;
