import React, { useEffect, useState } from "react";
// import { useGetAllDataQuery } from "../../../redux/services/graduateApi";
import styles from '../CompaniesSection/CompaniesSection.module.scss';
import { useGetAllDataQuery } from "../../../redux/services/apiSlice";

const CompaniesSection = () => {
    const { data, error, isLoading } = useGetAllDataQuery();  // API-dən məlumatı çəkmək
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        if (data) {
            setCompanies(data.companyPhotos);  // API-dən gələn şəkilləri təyin edirik
        }
    }, [data]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error occurred!</div>;

    return (

            <section className={styles.companies}>
                <h2 className={styles.title}>Məzunların işlədiyi şirkətlər</h2>

                <div className={styles.list}>
                    <div className={styles.animateWrapper}>
                        {companies.map((company, index) => (
                            <div key={index} className={styles.item}>
                                <img src={company} alt={`Company ${index + 1}`} className={styles.logo} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
    );
};

export default CompaniesSection;
