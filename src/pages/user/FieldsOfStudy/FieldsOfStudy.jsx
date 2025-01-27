import React, { useState, useEffect, useRef } from "react";
import styles from "./FieldsOfStudy.module.scss"; // SCSS faylını daxil edin
import rightArrow from "../../../assets/images/HomePage/Expand_right.svg";
import { FaChevronDown } from "react-icons/fa";
import { useGetCategoriesQuery, useGetTabletsByCategoryQuery } from "../../../redux/services/fieldsOfApi"; // API hook-ları

const FieldsOfStudy = () => {
  const [selectedCategory, setSelectedCategory] = useState("Programing");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Dropdown-a referans əlavə olunur

  // API çağırışı
  const { data: categories, isLoading: isLoadingCategories } = useGetCategoriesQuery();
  const { data: tablets, isLoading: isLoadingTablets } = useGetTabletsByCategoryQuery(selectedCategory);

console.log("Selected Category:", selectedCategory); // Yoxlamaq üçün

  

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

  if (isLoadingCategories || isLoadingTablets) {
    return <p>Yüklənir...</p>;
  }

  return (
    <div className="container">
      <div className={styles.fieldsOfStudy}>
        <div className={styles.fieldsLine}>
          <h1 className={styles.fieldsTitle}>Tədris sahələri</h1>
          <p className={styles.fieldsDescription}>
            Texnologiya ilə uyğunlaşın, bacarıqlarınızı inkişaf etdirin, gələcəyin iş dünyasında uğur qazanmaq üçün lazım olan bilik və təcrübəni bu gün əldə edin.
          </p>
        </div>

        {/* Custom Dropdown */}
        <div className={styles.fieldsDropdown} ref={dropdownRef}>
          <div
            className={styles.dropdownHeader}
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          >
            {selectedCategory}
            <FaChevronDown />
          </div>
          {isDropdownOpen && (
            <div className={styles.dropdownMenu}>
              {categories && categories.map((category) => (
                <div
                  key={category.id}
                  className={styles.dropdownItem}
                  onClick={() => handleCategoryChange(category.category)}
                >
                  {category.category}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* GridBox */}
        <div className={styles.gridBox}>
          {tablets && tablets.map((tablet) => (
            <div key={tablet.lessonProgramId} className={styles.gridItem}>
              <h3 className={styles.itemHeader}>{tablet.lessonName}</h3>
              <p className={styles.itemDescription}>{tablet.lessonDescription}</p>
              <div className={styles.boxBottom}>
                <div className={styles.time}>
                  {tablet.lessonMonth && <div>{tablet.lessonMonth} ay</div>}
                  {tablet.lessonHour && <div>{tablet.lessonHour} saat</div>}
                </div>
                <button className={styles.arrowCont}>
                  <img className={styles.arrowImg} src={rightArrow} alt="expand" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FieldsOfStudy;
