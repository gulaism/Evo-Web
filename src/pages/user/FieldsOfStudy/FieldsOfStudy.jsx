import React, { useState, useEffect, useRef } from "react";
import styles from "./FieldsOfStudy.module.scss";
import { FaChevronDown } from "react-icons/fa";
// import { useGetCategoriesQuery, useGetTabletsByCategoryQuery } from "../../../redux/services/fieldsOfApi";  
import rightArrow from "../../../assets/images/HomePage/Expand_right.svg";
import { useGetCategoriesQuery, useGetTabletsByCategoryQuery } from "../../../redux/services/apiSlice";

const FieldsOfStudy = () => {
  const [selectedCategory, setSelectedCategory] = useState("");  // Başlangıçda heç bir kateqoriya seçilməyib
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Get Categories (You can use this in your dropdown)
  const { data: categories, isLoading: isLoadingCategories } = useGetCategoriesQuery();
  const { data: tablets, isLoading: isLoadingTablets } = useGetTabletsByCategoryQuery(selectedCategory, {
    skip: !selectedCategory, // Boş dəyər göndərməmək üçün
  });

  // Kategoriyalar yükləndəndə default olaraq "Programming" seçilsin
  useEffect(() => {
    if (categories && categories.length > 0 && !selectedCategory) {
      const defaultCategory = categories.find((category) => category.id === 1);
      if (defaultCategory) {
        setSelectedCategory(defaultCategory.category); // İlk olaraq "Programming" seçilsin
      }
      console.log(categories);
    }
  }, [categories, selectedCategory]); // categories dəyişdikdə yenidən işləyəcək

  const handleCategoryChange = (category) => {
    setSelectedCategory(category.trim());
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (isLoadingCategories) return <p>Kateqoriyalar yüklənir...</p>;
  if (isLoadingTablets) return <p>Kurslar yüklənir...</p>;

  return (
    <div className="container">
      <div className={styles.fieldsOfStudy}>
        <h1 className={styles.fieldsTitle}>Tədris sahələri</h1>
        <div className={styles.fieldsDropdown} ref={dropdownRef}>
          <div className={styles.dropdownHeader} onClick={() => setDropdownOpen(!isDropdownOpen)}>
            {selectedCategory || "Kateqoriya seçin"}
            <FaChevronDown />
          </div>
          {isDropdownOpen && (
            <div className={styles.dropdownMenu}>
              {categories?.map((category) => (
                <div key={category.id} className={styles.dropdownItem} onClick={() => handleCategoryChange(category.category)}>
                  {category.category}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* GridBox */}
        <div className={styles.gridBox}>
          {tablets?.map((tablet) => (
            <div key={tablet.order} className={styles.gridItem}>
              <h3 className={styles.itemHeader}>{tablet.areaName}</h3>
              <p className={styles.itemDescription}>{tablet.courseDescription}</p>
              <div className={styles.boxBottom}>
                <div className={styles.time}>
                  {tablet.courseHour && <div>{tablet.courseHour} saat</div>}
                  {tablet.courseDuration && <div>{tablet.courseDuration} ay</div>}
                </div>
                <button className={styles.arrowCont}>
                  <img src={rightArrow} alt="Right Arrow" />
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
