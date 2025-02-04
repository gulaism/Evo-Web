// images
import chart from '../../../assets/images/Contact/graph.svg';
import note from '../../../assets/images/Contact/note-2.svg';
import sms from '../../../assets/images/Contact/sms.svg';
// components
import FaqList from '../../../components/HomePage/HomeBottom/FaqListQuestions/FaqListQuestions';
// style
import styles from './Contact.module.scss';


const Contact = () => {
  return (
    <div className="container">
      <h1>Gəl Görüşək!</h1>
      <section className={styles.mainSec}>
        <div className={styles.leftDiv}>
          <div>
            <div className={styles.imgCont}>
              <img src={chart} alt="satış üzrə mütəxəssis" />
            </div>
            <div>
              <div className={styles.title}>Satış üzrə mütəxəssis</div>
              <div className={styles.info}>+994 55 773 34 52 </div>
              <a href="https://wa.me/994507733452" target="_blank"></a>
            </div>
          </div>
          <div>
            <div className={styles.imgCont}>
              <img src={note} alt="tədris hissəsi" />
            </div>
            <div>
              <div className={styles.title}>Tədris hissəsi</div>
              <div className={styles.info}>+994 50 773 34 52 </div>
              <a href="https://wa.me/994507733452" target="_blank"></a>
            </div>
          </div>
          <div>
            <div className={styles.imgCont}>
              <img src={sms} alt="elektron poçt" />
            </div>
            <div>
              <div className={styles.title}>Elektron poçt</div>
              <div className={styles.info}>evolearningcenter@gmail.com</div>
              <a href="mailto:evolearningcenter@gmail.com"></a>
            </div>
          </div>
        </div>
        <div className={styles.rightDiv}>
          <div className={styles.title}>Bizi necə tapa bilərsən?</div>
          <div className={styles.desc}>
            <div>Ülvi Bünyadzadə küç. 2</div>
            <div>
              28 May metrosu “Cəfər Cabbarlı” çıxışından sola 500 metr məsafədə
              (7 dəqiqə)
            </div>
          </div>
          <a
            href="https://www.google.com/maps/place/Evo+Academy/@40.3854169,49.8504736,20z/data=!4m14!1m7!3m6!1s0x49b81c56c0ae8f9:0x41f94f25a93a5726!2sEvo+Academy!8m2!3d40.3945925!4d49.8549596!16s%2Fg%2F11y5vd42hy!3m5!1s0x40307d004b8e51e1:0xc8264ab6db626906!8m2!3d40.3854169!4d49.8507298!16s%2Fg%2F11y6nv9xfy?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
            target="blank"
          ></a>
        </div>
      </section>
      <section>
        <FaqList />
      </section>
    </div>
  );
}

export default Contact
