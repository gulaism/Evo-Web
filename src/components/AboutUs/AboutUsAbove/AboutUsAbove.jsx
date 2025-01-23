// styles
import { FaLinkedin } from "react-icons/fa";
import styles from "./AboutUsAbove.module.scss";
import { useState } from "react";

const instructors = [
  {
    name: 'Ağasif Abdullayev',
    profession: 'Product Designer / QA Engineer',
    link: 'https://www.linkedin.com/in/gulay-movlamova-150a0524a/',
    photo: 'https://thispersondoesnotexist.com/',
    id: 1
  },
  {
    name: 'Mənsurə Ağayeva',
    profession: 'Scrum Master /Agile Coach',
    link: 'https://www.linkedin.com/in/gulay-movlamova-150a0524a/',
    photo: 'https://thispersondoesnotexist.com/',
    id: 2
  },
  {
    name: 'Samir Məmmədov',
    profession: 'Product Designer / QA Engineer',
    link: 'https://www.linkedin.com/in/gulay-movlamova-150a0524a/',
    photo: 'https://thispersondoesnotexist.com/',
    id: 3
  },
  {
    name: 'Aynur Seyfullazadə',
    profession: 'Product Designer / QA Engineer',
    link: 'https://www.linkedin.com/in/gulay-movlamova-150a0524a/',
    photo: 'https://thispersondoesnotexist.com/',
    id: 4
  },
  {
    name: 'Ağasif Abdullayev',
    profession: 'Product Designer / QA Engineer',
    link: 'https://www.linkedin.com/in/gulay-movlamova-150a0524a/',
    photo: 'https://thispersondoesnotexist.com/',
    id: 5
  },
  {
    name: 'Mənsurə Ağayeva',
    profession: 'Scrum Master /Agile Coach',
    link: 'https://www.linkedin.com/in/gulay-movlamova-150a0524a/',
    photo: 'https://thispersondoesnotexist.com/',
    id: 6
  },
  {
    name: 'Samir Məmmədov',
    profession: 'Product Designer / QA Engineer',
    link: 'https://www.linkedin.com/in/gulay-movlamova-150a0524a/',
    photo: 'https://thispersondoesnotexist.com/',
    id: 7
  },
  {
    name: 'Aynur Seyfullazadə',
    profession: 'Product Designer / QA Engineer',
    link: 'https://www.linkedin.com/in/gulay-movlamova-150a0524a/',
    photo: 'https://thispersondoesnotexist.com/',
    id: 8
  },
  {
    name: 'Ruslan Murtuzov',
    profession: 'Product Designer / QA Engineer',
    link: 'https://www.linkedin.com/in/gulay-movlamova-150a0524a/',
    photo: 'https://thispersondoesnotexist.com/',
    id: 9
  }
]

const AboutUsAbove = () => {
  const [clickedIns, setClickedIns] = useState(null);

  const handleClickingInsCont = (id) => {
    console.log(id);
    setClickedIns((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="container">
      <div className={styles.generalInfoCont}>
        <h1>Haqqımızda</h1>
        <div className={styles.hashtag}>#hədəflərinizləfərqlənin</div>
        <div className={styles.flexDiv}>
          <div className={styles.slogan}>
            Öyrətmək bizdən, kariyeranı qurmaq səndən!
          </div>
          <div className={styles.description}>
            Evo Computer Akademiyası 2018-ci ildən etibarən texnologiya
            sahəsində peşəkar təhsil verən qabaqcıl tədris mərkəzidir. Akademiya
            müasir dövrün tələblərini nəzərə alaraq, müxtəlif texnoloji
            istiqamətlər üzrə keyfiyyətli təhsil proqramları təqdim edir.
            <br />
            Bizim missiyamız texnologiya sahəsində gələcəyin peşəkarlarını
            hazırlamaq və onların iş dünyasına uğurlu inteqrasiyasını təmin
            etməkdir. Evo Computer Akademiyası ilə gələcəyinizə investisiya
            edin!
          </div>
        </div>
      </div>
      <div className={styles.instructorsCont}>
        <div className={styles.instructorHeader}>İnstruktorlar</div>
        <div className={styles.description}>
          Burada sizə yalnız nəzəri biliklər deyil, həm də real iş mühitində
          tətbiq olunan praktiki bacarıqlar öyrədilir. Hər bir müəllimimiz
          texnologiya sahəsindəki yenilikləri yaxından izləyir və öz dərslərində
          müasir yanaşmaları tətbiq edir.
        </div>
        <div className={styles.gridCont}>
          {instructors.map((instructor, index) => (
            <div
              onClick={() => handleClickingInsCont(instructor.id)}
              className={`${styles.insCont} ${
                clickedIns === instructor.id ? styles.clicked : ""
              }`}
              key={instructor.id}
              style={
                clickedIns === instructor.id
                  ? { border: "1px solid #7E8D9C5E" }
                  : {}
              }
            >
              <div className={styles.instructor}>
                <div className={styles.photoCont}>
                  <img
                    src={instructor.photo}
                    alt={`${instructor.name}'s photo`}
                  />
                </div>
                <div>
                  <div className={styles.instName}>{instructor.name}</div>
                  <div className={styles.instProf}>{instructor.profession}</div>
                  <a href={instructor.link}>
                    <FaLinkedin color="#0c65c2" size={32} />
                  </a>
                </div>
              </div>
              {/* {clickedIns === instructor.id && ( */}
              <div className={styles.hiddenInfo}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem.
              </div>
              {/* )} */}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.flexDiv}>
        <div className={styles.slogan}>InnoTech Təqaüd proqramı</div>
        <div className={styles.description}>
          Akademiyamızda ödənişsiz Təqaüd proqramına qoşulun və Məntiq,
          İnformatika, İngilis dili fənlərində nəticələrinizə əsasən endirimlər
          əldə edin. Bizim missiyamız texnologiya sahəsində gələcəyin
          peşəkarlarını hazırlamaq və onların iş dünyasına uğurlu
          inteqrasiyasını təmin etməkdir. Evo Computer Akademiyası ilə
          gələcəyinizə investisiya edin!
        </div>
      </div>
    </div>
  );
}

export default AboutUsAbove
