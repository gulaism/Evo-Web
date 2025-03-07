// styles
import styles from './AddNewCourse.module.scss';
//components
import Description from '../../../components/admin/NewCoursePage/Description/Description'
import HeroBody from '../../../components/admin/NewCoursePage/HeroBody/HeroBody'
import Achievements from '../../../components/admin/NewCoursePage/Achievements/Achievements';


const AddNewCourse = () => {
  return (
    <div className={styles.addNewCourseCont}>
      <Description />
      <HeroBody />
      <Achievements />
    </div>
  )
}

export default AddNewCourse
