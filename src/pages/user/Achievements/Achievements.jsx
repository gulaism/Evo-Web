import React from 'react';
import styles from './Achievements.module.scss'; // Üslubları idarə etmək üçün ayrıca CSS faylı əlavə edə bilərsiniz
import icon from '../../../assets/images/Achievements/logo1.png';
import icon2 from '../../../assets/images/Achievements/logo2.png';

const Achievements = () => {
  // Loqolar massivini yaradın
  const logos = [icon, icon2];

  // Loqoları 8 dəfə göstərmək üçün 8 elementlik massiv yaradın
  const displayedLogos = [...Array(8)].map((_, index) => logos[index % logos.length]);

  return (
    <div className={styles.container}>
      {/* Nailiyyətlərimiz bölməsi */}
      <section className={styles.achievements}>
        <h2>Nəailiyyətlərimiz</h2>
        <div className={styles.stats}>
          <div>
            <h3>XXX</h3>
            <p>Pedaqoji Kollektiv</p>
          </div>
          <div>
            <h3>XXX</h3>
            <p>Tələbə</p>
          </div>
          <div>
            <h3>XXX</h3>
            <p>Mezun</p>
          </div>
          <div>
            <h3>XX%</h3>
            <p>Uğur Hekayəsi</p>
          </div>
        </div>
      </section>

      {/* Mezunlarımızın işlədiyi şirkətlər bölməsi */}
      <section className={styles.companies}>
        <h2>Mezunlarımızın işlədiyi şirkətlər</h2>
        <div className={styles.companyLogos}>
          {displayedLogos.map((logo, index) => (
            <div key={index} className={styles.logo}>
              <img src={logo} alt={`Şirkət Logo ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Tələbələrin işləri bölməsi */}
      <section className={styles.studentWorks}>
        <h2>Tələbələrin işləri</h2>
        <div className={styles.worksHeader}>
          <select className={styles.filter}>
            <option value="all">Qrafik dizayn</option>
            {/* Əlavə kateqoriyalar əlavə edə bilərsiniz */}
          </select>
        </div>
        <div className={styles.worksGrid}>
          {[...Array(6)].map((_, index) => (
            <div key={index} className={styles.workCard}>
              <div className={styles.studentInfo}>
                <h4>Paşayev Namiq</h4>
                <p>Coder | Rəqəmsal marketoloq</p>
              </div>
              <div className={styles.workThumbnail}>
                {/* İşə aid şəkil */}
                <img src="/path-to-thumbnail.png" alt="İş Thumbnail" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Achievements;
