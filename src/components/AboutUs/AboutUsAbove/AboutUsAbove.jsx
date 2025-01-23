// styles
import { FaLinkedin } from "react-icons/fa";
import styles from "./AboutUsAbove.module.scss";
import { useEffect, useState } from "react";
import { useGetAboutQuery } from "../../../redux/services/aboutApi";

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
  const [windowWidth, setWindowWidth] = useState('');
  const {data, isLoading, isError} = useGetAboutQuery();

  useEffect(() => {
    if(!isLoading && !isError) console.log('salam', data);
  }, [])

  useEffect(() => {
    if(window.innerWidth >= 600 && window.innerWidth <= 1025) setWindowWidth('tablet');
    else setWindowWidth('web');
  }, [])

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
            {data?.title}
          </div>
          <div className={styles.description}>
            {data?.paragraphs?.map((p, index) => (
              <div key={index}>
                {p}
              </div>
            ))}
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
          {data?.instructors.map((instructor, index) => (
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
                    src={instructor.profilePicture}
                    alt={`${instructor.name}'s photo`}
                  />
                </div>
                <div>
                  <div className={styles.instName}>{instructor.name}</div>
                  <div className={styles.instProf}>{instructor.job}</div>
                  <a href={instructor.linkedinLink}>
                    <FaLinkedin color="#0c65c2" size={windowWidth === 'web' ? 32 : 24} />
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
        <div className={styles.slogan}>{data?.scholarships[0].name}</div>
        <div className={styles.description}>
          {data?.scholarships[0]?.paragraphs?.map((p, index) => (
            <div key={index}>{p}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUsAbove
