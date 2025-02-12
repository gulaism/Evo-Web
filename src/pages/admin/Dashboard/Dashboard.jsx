// components
import Partners from "../../../components/admin/MainDashBoard/Partners/Partners"
import Statistics from "../../../components/admin/MainDashBoard/Statistics/Statistics"
// style
import styles from "./Dashboard.module.scss";


const Dashboard = () => {
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
    </div>
  );
}

export default Dashboard
