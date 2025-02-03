import React from 'react';
import GraduatesHeader from "../../../components/OurGraduates/GraduatesHeader/GraduatesHeader";
import GraduatesSection from "../../../components/OurGraduates/GraduatesSection/GraduatesSection";
import CompaniesSection from "../../../components/OurGraduates/CompaniesSection/CompaniesSection";
import PortfolioSection from "../../../components/OurGraduates/PortfolioSection/PortfolioSection";
import styles from '../OurGraduates/OurGraduates.module.scss';

const OurGraduatesPage = () => {
    return (
        <main className={styles.ourGraduates}>
            <div className={styles.container}>
                <GraduatesHeader />
                <GraduatesSection />
                <CompaniesSection />
                <PortfolioSection />
            </div>
           
        </main>
    );
};

export default OurGraduatesPage;
