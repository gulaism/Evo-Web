import React, { useState } from "react";
import styles from "./AlumnisCompanies.module.scss";
import trashIcon from "../../../../assets/images/admin/Partners/trashIcon.svg";
import plusIcon from "../../../../assets/images/admin/Partners/plusIcon.svg";
import editIcon from "../../../../assets/images/admin/Statistics/editIcon.svg";
import company from "../../../../assets/images/admin/Alumnis/companies.svg";

const AlumnisCompanies = () => {
    const [companies, setCompanies] = useState(new Array(8).fill(company));

    const handleAddCompany = () => {
        setCompanies([...companies, company]);
    };

    const handleDeleteCompany = (index) => {
        setCompanies(companies.filter((_, i) => i !== index));
    };

    return (
        <div className={styles.companiesSection}>
            <h3 className={styles.title}>Məzunların işlədiyi şirkətlər</h3>
            <h3>Məzunların İşlədiyi Şirkətlər</h3>
            <div className={styles.companies}>
                {companies.map((logo, index) => (
                    <div key={index} className={styles.companyCard}>
                        <button className={styles.editBtn}>
                            <img src={editIcon} alt="Edit Icon" />
                        </button>
                        <div className={styles.logoWrapper}>
                            <img src={logo} alt="Company Logo" className={styles.companyLogo} />
                        </div>
                        <button className={styles.deleteBtn} onClick={() => handleDeleteCompany(index)}>
                            <img src={trashIcon} alt="Delete Icon" />
                        </button>
                    </div>
                ))}
                <button className={styles.addBtn} onClick={handleAddCompany}>
                    <img src={plusIcon} alt="Add Icon" />
                </button>
            </div>
        </div>
    );
};

export default AlumnisCompanies;
