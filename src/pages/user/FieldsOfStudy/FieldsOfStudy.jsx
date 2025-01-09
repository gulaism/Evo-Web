import React, { useState, useEffect, useRef } from "react";
import styles from "./FieldsOfStudy.module.scss"; // SCSS faylını daxil edin
import rightArrow from "../../../assets/images/HomePage/Expand_right.svg";
import { FaChevronDown } from "react-icons/fa";

const eduFields = [
  { id: 1, category: "programming", header: "Advanced Front-end", description: "Front-end dünyasında ilk addımları bizimlə at.", time: "4 ay", duration: "52 saat" },
  { id: 2, category: "programming", header: "Back-end Java", description: "Back-end dünyasında ilk addımları bizimlə at.", time: "4 ay", duration: "52 saat" },
  { id: 3, category: "ethical_hacking", header: "Ethical Hacking", description: "Kibertəhlükəsizlik dünyasında ilk addımları bizimlə at.", time: "4 ay", duration: "52 saat" },
  { id: 4, category: "design", header: "Qrafik/Motion Dizayn", description: "Dizayn dünyasında ilk addımları bizimlə at.", time: "4 ay", duration: "52 saat" },
  { id: 5, category: "design", header: "UX/UI Dizayn", description: "Dizayn dünyasında ilk addımları bizimlə at.", time: "4 ay", duration: "52 saat" },
  { id: 6, category: "data_analytics", header: "Data Analitika", description: "Data analitika dünyasında ilk addımları bizimlə at.", time: "4 ay", duration: "52 saat" },
  { id: 7, category: "qa_testing", header: "QA Manual Testing", description: "QA Testing dünyasında ilk addımları bizimlə at.", time: "4 ay", duration: "52 saat" },
  { id: 8, category: "digital_marketing", header: "Rəqəmsal Marketinq", description: "Marketinq dünyasında ilk addımları bizimlə at.", time: "4 ay", duration: "52 saat" },
  { id: 9, category: "agile", header: "Agile", description: "Agile dünyasında ilk addımları bizimlə at.", time: "4 ay", duration: "52 saat" },
];

const FieldsOfStudy = () => {
  const [selectedCategory, setSelectedCategory] = useState("programming");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Dropdown-a referans əlavə olunur

  const filteredFields = eduFields.filter((field) => field.category === selectedCategory);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setDropdownOpen(false);
  };

  // Kənarda klikləri dinləmək üçün useEffect
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside); // Hadisəni əlavə et
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Təmizləmə
    };
  }, []);

  return (
    <div className="container">
      <div className={styles.fieldsOfStudy}>
        <h1 className={styles.fieldsTitle}>Tədris sahələri</h1>
        <p className={styles.fieldsDescription}>
          Texnologiya ilə uyğunlaşın, bacarıqlarınızı inkişaf etdirin, gələcəyin iş dünyasında uğur qazanmaq üçün lazım olan bilik və təcrübəni bu gün əldə edin.
        </p>

        {/* Custom Dropdown */}
        <div className={styles.fieldsDropdown} ref={dropdownRef}>
          <div
            className={styles.dropdownHeader}
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          >
            {selectedCategory === "programming" && "Proqramlaşdırma"}
            {selectedCategory === "ethical_hacking" && "Ethical Hacking"}
            {selectedCategory === "design" && "Dizayn"}
            {selectedCategory === "data_analytics" && "Data Analitika"}
            {selectedCategory === "qa_testing" && "Q/A Manual Testing"}
            {selectedCategory === "digital_marketing" && "Rəqəmsal Marketinq"}
            {selectedCategory === "agile" && "Agile"}
            <FaChevronDown />
          </div>
          {isDropdownOpen && (
            <div className={styles.dropdownMenu}>
              <div
                className={styles.dropdownItem}
                onClick={() => handleCategoryChange("programming")}
              >
                Proqramlaşdırma
              </div>
              <div
                className={styles.dropdownItem}
                onClick={() => handleCategoryChange("ethical_hacking")}
              >
                Ethical Hacking
              </div>
              <div
                className={styles.dropdownItem}
                onClick={() => handleCategoryChange("design")}
              >
                Dizayn
              </div>
              <div
                className={styles.dropdownItem}
                onClick={() => handleCategoryChange("data_analytics")}
              >
                Data Analitika
              </div>
              <div
                className={styles.dropdownItem}
                onClick={() => handleCategoryChange("qa_testing")}
              >
                Q/A Manual Testing
              </div>
              <div
                className={styles.dropdownItem}
                onClick={() => handleCategoryChange("digital_marketing")}
              >
                Rəqəmsal Marketinq
              </div>
              <div
                className={styles.dropdownItem}
                onClick={() => handleCategoryChange("agile")}
              >
                Agile
              </div>
            </div>
          )}
        </div>

        {/* GridBox */}
        <div className={styles.gridBox}>
          {filteredFields.map((field) => (
            <div key={field.id} className={styles.gridItem}>
              <h3 className={styles.itemHeader}>{field.header}</h3>
              <p className={styles.itemDescription}>{field.description}</p>
              <div className={styles.boxBottom}>
                <div className={styles.time}>
                  {field.time && <div>{field.time}</div>}
                  {field.duration && <div>{field.duration}</div>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FieldsOfStudy;
