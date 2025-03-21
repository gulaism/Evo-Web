// styles
import styles from './Field.module.scss';
//components
import Description from '../../../components/admin/NewCoursePage/Description/Description'
import HeroBody from '../../../components/admin/NewCoursePage/HeroBody/HeroBody'
import Achievements from '../../../components/admin/NewCoursePage/Achievements/Achievements';
import EduProg from '../../../components/admin/NewCoursePage/EduProg/EduProg';
import Tools from '../../../components/admin/NewCoursePage/Tools/Tools';
import Module from '../../../components/admin/NewCoursePage/Module/Module';
import Instructors from '../../../components/admin/NewCoursePage/Instructors/Instructors';
import NextGroupStatus from '../../../components/admin/NewCoursePage/NextGroupStatus/NextGroupStatus';
import NextGroupTime from '../../../components/admin/NewCoursePage/NextGroupTime/NextGroupTime';
import Portfolio from '../../../components/admin/NewCoursePage/Portfolio/Portfolio';
import Faq from '../../../components/admin/MainDashBoard/Faq/Faq';
import { useState } from 'react';


const Field = () => {
  const [isEnabled, setIsEnabled] = useState(false);


  return (
    <div className={styles.addNewCourseCont}>
      <Description />
      <HeroBody />
      <Achievements />
      <div className={styles.flexDiv}>
        <EduProg className={styles.eduProg} />
        <Tools className={styles.tools} />
      </div>
      <Module />
      <Instructors />
      <div className={styles.flexDiv}>
        <NextGroupStatus className={styles.eduProg} />
        <NextGroupTime className={styles.tools} />
      </div>
      <Portfolio />
      <Faq />
      <button
        className={
          isEnabled ? `${styles.saveBtn} ${styles.active}` : `${styles.saveBtn}`
        }
      >
        Yadda saxla
      </button>
    </div>
  );
}

export default Field
