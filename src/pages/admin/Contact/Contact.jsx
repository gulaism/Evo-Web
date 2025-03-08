// styles
import { useState } from 'react';
import Address from '../../../components/admin/ContactPage/Address/Address';
import Number from '../../../components/admin/ContactPage/Number/Number';
import styles from './Contact.module.scss';

const Contact = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <div className={styles.contCont}>
      <Address />
      <Number />
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

export default Contact
