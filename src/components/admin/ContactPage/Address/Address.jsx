// styles
import styles from './Address.module.scss';
// icons
import plus from '../../../../assets/images/admin/Partners/plusIcon.svg';
import trash from '../../../../assets/images/admin/Partners/trashIcon.svg';
import edit from '../../../../assets/images/admin/Statistics/editIcon.svg';

const Address = () => {
  return (
    <div className={styles.addressCont}>
      <div className={styles.addressTit}>Bizi necə tapa bilərsən?</div>
      <div className={styles.addressHead}>
        <div className={styles.headWordBold}>Adreslər</div>
        <div className={styles.headIc}>
          <img src={plus} alt="" />
        </div>
      </div>
      <div className={styles.addressBody}>
        <div className={styles.bodyCont}>
          <div className={styles.bodyTits}>Başlığı</div>
          <div className={styles.bodyInputs}>
            <div className={styles.inputIc}>
              <img src={edit} alt="" />
            </div>
            <input
              className={styles.bodInp}
              type="text"
              placeholder="Ülvi Bünyadzadə küç. 2"
            />
          </div>
          <div className={styles.bodyTits}>Təsviri</div>
          <div className={styles.bodyInputs}>
            <div className={styles.inputIc}>
              <img src={edit} alt="" />
            </div>
            <input
              className={styles.bodInp}
              type="text"
              placeholder="28 May metrosu “Cəfər Cabbarlı” çıxışından sola 500 metr məsafədə (7 dəqiqə)"
            />
          </div>
          <div className={styles.bodyTits}>Link</div>
          <div className={styles.bodyInputs}>
            <div className={styles.inputIc}>
              <img src={edit} alt="" />
            </div>
            <input
              className={styles.bodInp}
              type="text"
              placeholder="https://maps.app.goo.gl/ffVEShrduihV6bHR6"
            />
          </div>
          <div className={styles.lastLine}>
            <div className={styles.lastIcon}>
              <img src={trash} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.bodyCont}>
          <div className={styles.bodyTits}>Başlığı</div>
          <div className={styles.bodyInputs}>
            <div className={styles.inputIc}>
              <img src={edit} alt="" />
            </div>
            <input
              className={styles.bodInp}
              type="text"
              placeholder="Ülvi Bünyadzadə küç. 2"
            />
          </div>
          <div className={styles.bodyTits}>Təsviri</div>
          <div className={styles.bodyInputs}>
            <div className={styles.inputIc}>
              <img src={edit} alt="" />
            </div>
            <input
              className={styles.bodInp}
              type="text"
              placeholder="28 May metrosu “Cəfər Cabbarlı” çıxışından sola 500 metr məsafədə (7 dəqiqə)"
            />
          </div>
          <div className={styles.bodyTits}>Link</div>
          <div className={styles.bodyInputs}>
            <div className={styles.inputIc}>
              <img src={edit} alt="" />
            </div>
            <input
              className={styles.bodInp}
              type="text"
              placeholder="https://maps.app.goo.gl/ffVEShrduihV6bHR6"
            />
          </div>
          <div className={styles.lastLine}>
            <div className={styles.lastIcon}>
              <img src={trash} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address
