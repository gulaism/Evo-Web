// icons
import plus from '../../../../assets/images/admin/Partners/plusIcon.svg';
import trash from '../../../../assets/images/admin/Partners/trashIcon.svg';
// styles
import styles from './Tools.module.scss';

const Tools = () => {
  return (
    <div className={styles.toolsSec}>
      <div className={styles.toolTit}>Tədris proqramı</div>
      <div className={styles.toolHead}>
        <div>Hansı alətlərlə işləyəcəksən?</div>
        <div className={styles.headIc}>
          <img src={plus} alt="" />
        </div>
      </div>
      <div className={styles.toolsGrid}>
        <div className={styles.oneTool}>
          <div className={styles.toolLeft}>
            <div className={styles.toolIcOne}>
              <img src={plus} alt="" />
            </div>
            <input className={styles.toolInput} type="text" placeholder="Alət" />
          </div>
          <div className={styles.toolIcTwo}>
            <img src={trash} alt="" />
          </div>
        </div>
        <div className={styles.oneTool}>
          <div className={styles.toolLeft}>
            <div className={styles.toolIcOne}>
              <img src={plus} alt="" />
            </div>
            <input className={styles.toolInput} type="text" placeholder="Alət" />
          </div>
          <div className={styles.toolIcTwo}>
            <img src={trash} alt="" />
          </div>
        </div>
        <div className={styles.oneTool}>
          <div className={styles.toolLeft}>
            <div className={styles.toolIcOne}>
              <img src={plus} alt="" />
            </div>
            <input className={styles.toolInput} type="text" placeholder="Alət" />
          </div>
          <div className={styles.toolIcTwo}>
            <img src={trash} alt="" />
          </div>
        </div>
        <div className={styles.oneTool}>
          <div className={styles.toolLeft}>
            <div className={styles.toolIcOne}>
              <img src={plus} alt="" />
            </div>
            <input className={styles.toolInput} type="text" placeholder="Alət" />
          </div>
          <div className={styles.toolIcTwo}>
            <img src={trash} alt="" />
          </div>
        </div>
        <div className={styles.oneTool}>
          <div className={styles.toolLeft}>
            <div className={styles.toolIcOne}>
              <img src={plus} alt="" />
            </div>
            <input className={styles.toolInput} type="text" placeholder="Alət" />
          </div>
          <div className={styles.toolIcTwo}>
            <img src={trash} alt="" />
          </div>
        </div>
        <div className={styles.oneTool}>
          <div className={styles.toolLeft}>
            <div className={styles.toolIcOne}>
              <img src={plus} alt="" />
            </div>
            <input className={styles.toolInput} type="text" placeholder="Alət" />
          </div>
          <div className={styles.toolIcTwo}>
            <img src={trash} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tools
