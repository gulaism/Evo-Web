import React from "react";
import GraduatesHeader from "../../../components/OurGraduates/GraduatesHeader/GraduatesHeader";
import GraduatesSection from "../../../components/OurGraduates/GraduatesSection/GraduatesSection";
import CompaniesSection from "../../../components/OurGraduates/CompaniesSection/CompaniesSection";
import PortfolioSection from "../../../components/OurGraduates/PortfolioSection/PortfolioSection";
import styles from '../OurGraduates/OurGraduates.module.scss'
import graduateProfil from '../../../assets/images/OurGraduates/graduateProfil.svg'

const statistics = [
    { id: 1, label: "Pedaqoji Kollektiv", value: 0 },
    { id: 2, label: "Tələbə", value: 0 },
    { id: 3, label: "Məzun", value: 0 },
    { id: 4, label: "Uğur Hekayəsi", value: 0 },
];

const graduates = [
    { id: 1, image: graduateProfil, name: "Jacelyn Workman", field: "Qrafik / Motion Dizayn" },
    { id: 2, image: graduateProfil, name: "Angel Schleifer", field: "Qrafik / Motion Dizayn" },
    { id: 3, image: graduateProfil, name: "Jaylon Press", field: "Front-end" },
    { id: 4, image: graduateProfil, name: "Paltiyn Schleifer", field: "Qrafik / Motion Dizayn" },
    { id: 5, image: graduateProfil, name: "Alfonso Rosser", field: "Qrafik / Motion Dizayn" },
    { id: 6, image: graduateProfil, name: "Makenna Septimus", field: "Qrafik / Motion Dizayn" },
    { id: 7, image: graduateProfil, name: "Brandon George", field: "Advanced Front-end" },
    { id: 8, image: graduateProfil, name: "Jocelyn Bothman", field: "Advanced Front-end" },
    { id: 9, image: graduateProfil, name: "Jaydan Aminoff", field: "Advanced Front-end" },
    { id: 10, image: graduateProfil, name: "Erin Rosser", field: "Advanced Front-end" },
    { id: 11, image: graduateProfil, name: "Chance Franci", field: "Advanced Front-end" },
    { id: 12, image: graduateProfil, name: "Rayna Mango", field: "Advanced Front-end" },
];


const companies = Array(5).fill("Dövlət Məşğulluq Agentliyi");

const portfolios = [
    { id: 1, name: "Elizabeth Bennet", image: "portfolio1.png" },
    { id: 2, name: "Anakin Skywalker", image: "portfolio2.png" },
    { id: 3, name: "Jane Bennet", image: "portfolio3.png" },
    { id: 4, name: "Leia Organa", image: "portfolio4.png" },
    { id: 5, name: "Han Solo", image: "portfolio5.png" },
];

const OurGraduatesPage = () => (
    <main className={styles.ourGraduates}>
        <div className="container">
            <GraduatesHeader statistics={statistics} />
            <div style={{ marginBottom: "150px" }}></div>
            <GraduatesSection graduates={graduates} />
            <div style={{ marginBottom: "150px" }}></div>
            <CompaniesSection companies={companies} />
            <div style={{ marginBottom: "150px" }}></div>
            <PortfolioSection portfolios={portfolios} />
        </div>
    </main>
);

export default OurGraduatesPage;

