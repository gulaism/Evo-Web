// styles
import styles from './AddNewCourse.module.scss';
//components
import Description from '../../../components/admin/NewCoursePage/Description/Description'
import HeroBody from '../../../components/admin/NewCoursePage/HeroBody/HeroBody'


const AddNewCourse = () => {
  return (
    <div className={styles.addNewCourseCont}>
      <Description />
      <HeroBody />
    </div>
  )
}

export default AddNewCourse
