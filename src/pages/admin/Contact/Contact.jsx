// styles
import Address from '../../../components/admin/ContactPage/Address/Address';
import Number from '../../../components/admin/ContactPage/Number/Number';
import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <div className={styles.contCont}>
      <Address />
      <Number />
    </div>
  )
}

export default Contact
