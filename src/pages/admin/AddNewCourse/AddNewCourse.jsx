// styles
import styles from './AddNewCourse.module.scss';
//components
import Description from '../../../components/admin/NewCoursePage/Description/Description'
import HeroBody from '../../../components/admin/NewCoursePage/HeroBody/HeroBody'
import Achievements from '../../../components/admin/NewCoursePage/Achievements/Achievements';
import EduProg from '../../../components/admin/NewCoursePage/EduProg/EduProg';
import Tools from '../../../components/admin/NewCoursePage/Tools/Tools';
import Module from '../../../components/admin/NewCoursePage/Module/Module';
import Instructors from '../../../components/admin/NewCoursePage/Instructors/Instructors';


const AddNewCourse = () => {
  return (
    <div className={styles.addNewCourseCont}>
      <Description />
      <HeroBody />
      <Achievements />
      <div className={styles.flexDiv}>
        <EduProg className={styles.eduProg}/>
        <Tools className={styles.tools}/>
      </div>
      <Module />
      <Instructors />
    </div>
  )
}

export default AddNewCourse
