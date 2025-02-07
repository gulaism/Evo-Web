import React from "react";
import styles from "./Navbar.module.scss";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.greeting}>Hey Admin, Xoş gəlmisən!</div>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search" className={styles.searchInput} />
        <AiOutlineSearch className={styles.searchIcon} />
      </div>
    </div>
  );
};

export default Navbar;
