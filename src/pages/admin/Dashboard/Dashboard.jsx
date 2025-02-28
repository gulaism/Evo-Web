// components
import { useEffect, useState } from "react";
import Partners from "../../../components/admin/MainDashBoard/Partners/Partners"
import Reviews from "../../../components/admin/MainDashBoard/Reviews/Reviews";
import Statistics from "../../../components/admin/MainDashBoard/Statistics/Statistics"
// style
import styles from "./Dashboard.module.scss";
import OurDifference from "../../../components/admin/MainDashBoard/OurDifference/OurDifference";
import Faq from "../../../components/admin/MainDashBoard/Faq/Faq";



const Dashboard = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [token, setToken] = useState(null);


  useEffect(() => {
    setToken(localStorage.getItem("token"));
    console.log(token);
  }, [token]);

  return (
    <div className={styles.dashCont}>
      <div className={styles.firstSection}>
        <div>
          <Statistics setIsEnabled = {setIsEnabled} />
        </div>
        <div>
          <Partners />
        </div>
      </div>
      <div>
        <Reviews setIsEnabled = {setIsEnabled}/>
      </div>
      <div>
        <OurDifference setIsEnabled = {setIsEnabled}/>
      </div>
      <div>
      <Faq setIsEnabled = {setIsEnabled} />
      </div>
      <button className={isEnabled ? `${styles.saveBtn} ${styles.active}` : `${styles.saveBtn}`}>Yadda saxla</button>
    </div>
  );
}

export default Dashboard
