import React from "react";
import GraduatesHeader from "../../../components/OurGraduates/GraduatesHeader/GraduatesHeader";
import GraduatesSection from "../../../components/OurGraduates/GraduatesSection/GraduatesSection";
import CompaniesSection from "../../../components/OurGraduates/CompaniesSection/CompaniesSection";
import PortfolioSection from "../../../components/OurGraduates/PortfolioSection/PortfolioSection";
import styles from '../OurGraduates/OurGraduates.module.scss'
import graduateProfil from '../../../assets/images/OurGraduates/graduateProfil.svg'
import portfolio from '../../../assets/images/OurGraduates/portfolio.svg'
import image1 from '../../../assets/images/OurGraduates/image1.svg'
import image2 from '../../../assets/images/OurGraduates/image2.svg'
import image3 from '../../../assets/images/OurGraduates/image3.svg'
import image5 from '../../../assets/images/OurGraduates/image5.svg'

const statistics = [
    { id: 1, label: "Pedaqoji Kollektiv", value: 0 },
    { id: 2, label: "Tələbə", value: 0 },
    { id: 3, label: "Məzun", value: 0 },
    { id: 4, label: "Uğur Hekayəsi", value: 0 },
];

const instructors = [
    {
      name: "Michael Brown",
      profession:"Full Stack Developer",
      link: 'https://www.linkedin.com/in/nasiba-hasanova-699055290/',
      photo: graduateProfil,
      id: 1
    },
    {
      name: "Michael Brown",
      profession: "Full Stack Developer",
      link: 'https://www.linkedin.com/in/nasiba-hasanova-699055290/',
      photo: graduateProfil,
      id: 2
    },
    {
      name: "Michael Brown",
      profession: "Full Stack Developer",
      link: 'https://www.linkedin.com/in/nasiba-hasanova-699055290/',
      photo: graduateProfil,
      id: 3
    },
    {
      name: "Michael Brown",
      profession: "Frontend Developer",
      link: 'https://www.linkedin.com/in/nasiba-hasanova-699055290/',
      photo: graduateProfil,
      id: 4
    },
    {
      name: 'Ağasif Abdullayev',
      profession: "Michael Brown",
      link: 'https://www.linkedin.com/in/nasiba-hasanova-699055290/',
      photo: graduateProfil,
      id: 5
    },
    {
      name: 'Mənsurə Ağayeva',
      profession: 'Scrum Master /Agile Coach',
      link: 'https://www.linkedin.com/in/nasiba-hasanova-699055290/',
      photo: graduateProfil,
      id: 6
    },
    {
      name: 'Samir Məmmədov',
      profession: "Michael Brown",
      link: 'https://www.linkedin.com/in/nasiba-hasanova-699055290/',
      photo: graduateProfil,
      id: 7
    },
    {
      name: 'Aynur Seyfullazadə',
      profession: "Michael Brown",
      link: 'https://www.linkedin.com/in/gulay-movlamova-150a0524a/',
      photo: graduateProfil,
      id: 8
    },
    {
      name: "John Doe",
      profession: "Frontend Developer",
      link: 'https://www.linkedin.com/in/nasiba-hasanova-699055290/',
      photo: graduateProfil,
      id: 9
    }
  ]




const companies = Array(5).fill("Dövlət Məşğulluq Agentliyi");

const portfolios = [
    { 
        id: 1, 
        name: "Elizabeth Bennet", 
        field: "Freelance / Qrafik Dizayner", 
        image: portfolio,
        works: [image1, image2, image3, image5]
    },
    { 
        id: 2, 
        name: "Anakin Skywalker", 
        field: "Freelance / Qrafik Dizayner", 
        image: portfolio,
        works: [image1, image2, image3, image5]
    },
    { 
        id: 3, 
        name: "Jane Bennet", 
        field: "Freelance / Qrafik Dizayner", 
        image: portfolio,
        works: [image1, image2, image3, image5]
    }
];


const OurGraduatesPage = () => (
    <main className={styles.ourGraduates}>
        <div className="container">
            <GraduatesHeader statistics={statistics} />
            <div style={{ marginBottom: "150px" }}></div>
            <GraduatesSection graduates={instructors} />
            <div style={{ marginBottom: "150px" }}></div>
            <CompaniesSection companies={companies} />
            <div style={{ marginBottom: "150px" }}></div>
            <PortfolioSection portfolios={portfolios} />
        </div>
    </main>
);

export default OurGraduatesPage;

