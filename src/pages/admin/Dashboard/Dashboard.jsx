// components
import { useState } from "react";
import Partners from "../../../components/admin/MainDashBoard/Partners/Partners"
import Reviews from "../../../components/admin/MainDashBoard/Reviews/Reviews";
import Statistics from "../../../components/admin/MainDashBoard/Statistics/Statistics"
// style
import styles from "./Dashboard.module.scss";
import OurDifference from "../../../components/admin/MainDashBoard/OurDifference/OurDifference";


const Dashboard = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <div className={styles.dashCont}>
      <div className={styles.firstSection}>
        <div>
          <Statistics />
        </div>
        <div>
          <Partners />
        </div>
      </div>
      <div>
        <Reviews setIsEnabled = {setIsEnabled}/>
      </div>
      <div>
        <OurDifference />
      </div>
      <button className={isEnabled ? `${styles.saveBtn} ${styles.active}` : `${styles.saveBtn}`}>Yadda saxla</button>
    </div>
  );
}

export default Dashboard
