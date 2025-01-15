import React, { useState } from 'react'
// styles
import styles from "./ResponsiveNavbar.module.scss"; 
import { BiRightArrowAlt } from 'react-icons/bi';
const ResponsiveNavbar = () => {
  const [ showFields, setShowFields ] = useState(false);
  const handleOpenFields = () => setShowFields(true);

  return !showFields ? (
    <div className={styles.respCont}>
      <div>
        <div>Haqqımızda</div>
        <BiRightArrowAlt size={18} color="#170F49" />
      </div>
      <div onClick={handleOpenFields}>
        <div>Tədris Sahələri</div>
        <BiRightArrowAlt size={18} color="#170F49" />
      </div>
      <div>
        <div>Məzunlarımız</div>
        <BiRightArrowAlt size={18} color="#170F49" />
      </div>
      <div>
        <div>Əlaqə</div>
        <BiRightArrowAlt size={18} color="#170F49" />
      </div>
    </div>
  ) : (
    <div>Salam</div>
  );
}

export default ResponsiveNavbar
