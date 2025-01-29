// styles
import { FaLinkedin } from "react-icons/fa";
import styles from "./OneField.module.scss";
import FaqList from "../../../components/HomePage/HomeBottom/FaqListQuestions/FaqListQuestions";
import React, { useEffect, useState } from "react";
import {
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobephotoshop,
} from "react-icons/si";

const instructors = [
  {
    id: 1,
    name: "Ağasif Abdullayev",
    job: "Product Designer / QA Engineer",
    linkedinLink: "https://www.linkedin.com/in/gulay-movlamova-150a0524a/",
    profilePicture: "https://thispersondoesnotexist.com/",
  },
  {
    id: 2,
    name: "Mənsurə Ağayeva",
    job: "Scrum Master / Agile Coach",
    linkedinLink: "https://www.linkedin.com/in/gulay-movlamova-150a0524a/",
    profilePicture: "https://thispersondoesnotexist.com/",
  },
  {
    id: 3,
    name: "Samir Məmmədov",
    job: "Product Designer / QA Engineer",
    linkedinLink: "https://www.linkedin.com/in/gulay-movlamova-150a0524a/",
    profilePicture: "https://thispersondoesnotexist.com/",
  },
  {
    id: 4,
    name: "Aynur Seyfullazadə",
    job: "Product Designer / QA Engineer",
    linkedinLink: "https://www.linkedin.com/in/gulay-movlamova-150a0524a/",
    profilePicture: "https://thispersondoesnotexist.com/",
  },
  {
    id: 5,
    name: "Ağasif Abdullayev",
    job: "Product Designer / QA Engineer",
    linkedinLink: "https://www.linkedin.com/in/gulay-movlamova-150a0524a/",
    profilePicture: "https://thispersondoesnotexist.com/",
  },
  {
    id: 6,
    name: "Mənsurə Ağayeva",
    job: "Scrum Master / Agile Coach",
    linkedinLink: "https://www.linkedin.com/in/gulay-movlamova-150a0524a/",
    profilePicture: "https://thispersondoesnotexist.com/",
  },
  {
    id: 7,
    name: "Samir Məmmədov",
    job: "Product Designer / QA Engineer",
    linkedinLink: "https://www.linkedin.com/in/gulay-movlamova-150a0524a/",
    profilePicture: "https://thispersondoesnotexist.com/",
  },
  {
    id: 8,
    name: "Aynur Seyfullazadə",
    job: "Product Designer / QA Engineer",
    linkedinLink: "https://www.linkedin.com/in/gulay-movlamova-150a0524a/",
    profilePicture: "https://thispersondoesnotexist.com/",
  },
  {
    id: 9,
    name: "Ruslan Murtuzov",
    job: "Product Designer / QA Engineer",
    linkedinLink: "https://www.linkedin.com/in/gulay-movlamova-150a0524a/",
    profilePicture: "https://thispersondoesnotexist.com/",
  },
];

const abilitiesToGet = [
  {
    title: "Brendin Vizual Şəxsiyyəti",
    span: "Brendin",
    description:
      "Loqo dizaynı, rəng palitrası, tipografiya və ümumi dizayn elementləri ilə əlaqədar qərarlar verməyi əhatə edəcək.",
  },
  {
    title: "İllustrasiya və Qrafik Elementlər",
    span: "İllustrasiya",
    description:
      " Məsələn, brendin vizual dilini dəstəkləyən ikonlar və şəkillər hazırlanması",
  },
  {
    title: "Çap Materiallarının Dizaynı",
    span: "Çap",
    description:
      "Vizit kartları, broşürlər, afişalar, flayerlərin dizaynı və plakatların çap parametrləri (rəng seçimi, şriftlər, ölçülər və s.) ",
  },
  {
    title: "Video Montaj və Effektlər",
    span: "Video Montaj",
    description:
      "Videoları kəsib montajlamağı və yaradıcı effektlər əlavə etməyi mənimsəyəcəksiniz.",
  },
  {
    title: "Ssenarilərin Vizualizasiyası",
    span: "Ssenarilərin",
    description:
      "Fikirlərinizi animasiya vasitəsilə canlandırmağı və hekayələr yaratmağı öyrənəcəksiniz.",
  },
  {
    title: "Təqdimat və Portfel Yaratma ",
    span: "Təqdimat",
    description:
      "Portfellərin hazırlanmasıı və onlayn mühitdə  peşəkar şəkildə təqdim edilməsi",
  },
];

const Item = ({ title, span, description }) => {
  const splitTitle = title.split(new RegExp(`(${span})`, "i"));

  return (
    <div className={styles.item}>
      <h3 className={styles.itemTitle}>
        {splitTitle.map((part, index) =>
          part.toLowerCase() === span.toLowerCase() ? (
            <span key={index}>{part}</span>
          ) : (
            <React.Fragment key={index}>{part}</React.Fragment>
          )
        )}
      </h3>
      <p className={styles.itemDescription}>{description}</p>
    </div>
  );
};

const OneField = () => {
  const [itemsPerRow, setItemsPerRow] = useState(3);
  useEffect(() => {
    if (window.innerWidth <= 600) setItemsPerRow(1);
    else if (window.innerWidth >= 600 && window.innerWidth <= 1024) {
      setItemsPerRow(2);
    } else setItemsPerRow(3);
  }, []);

  const [clickedIns, setClickedIns] = useState(null);
  const [windowWidth, setWindowWidth] = useState("");

  const rows = Math.ceil(abilitiesToGet.length / itemsPerRow);

  useEffect(() => {
    if (window.innerWidth >= 600 && window.innerWidth <= 1025)
      setWindowWidth("tablet");
    else setWindowWidth("web");
  }, []);

  const [hoveredBox, setHoveredBox] = useState(null);

  const handleClickingInsCont = (id) => {
    console.log(id);
    setClickedIns((prevId) => (prevId === id ? null : id));
  };

  const handleMouseEnter = (index) => setHoveredBox(index);
  const handleMouseLeave = () => setHoveredBox(null);

  return (
    <div className="container">
      <section className={styles.firstSection}>
        <div className={styles.title}>Tədris sahələri</div>
        <div className={styles.description}>
          Texnologiya ilə uyğunlaşın, bacarıqlarınızı inkişaf etdirin, gələcəyin
          iş dünyasında uğur qazanmaq üçün lazım olan bilik və təcrübəni bu gün
          əldə edin.
        </div>
        <div className={styles.generalInfo}>
          <div className={styles.fieldName}>Qrafik/Motion Dizayn</div>
          <div className={styles.fieldDesc}>
            <div>
              Evo Academy-də Qrafik və Motion Dizayn tədrisi 6 ay (144 saat)
              davam edir və qlobal sektor tələblərinə uyğun proqram əsasında
              keçirilir. Dərslər həm online, həm də əyani formatda təşkil
              olunur. Təlimçilərimiz 5-10 illik təcrübəyə malik, peşəkar
              dizaynerlərdir. Həmçinin, mentor dəstəyi praktiki tapşırıqların
              daha effektiv və keyfiyyətli şəkildə icra olunmasına şərait
              yaradacaq.
            </div>
            <div>
              Hazırda akademiyamızda 3 növ endirim mövcuddur: 20% – işsizlər,
              30% – tələbələr, 40% – InnoTech təqaüd proqramı.
            </div>
          </div>
        </div>
      </section>
      <section className={styles.whatYouWillGet}>
        <div className={styles.title}>Nələri bacaracaqsan?</div>
        <div className={styles.grid}>
          {Array.from({ length: rows }).map((_, rowIndex) => {
            const start = rowIndex * itemsPerRow;
            const end = Math.min(start + itemsPerRow, abilitiesToGet.length);
            const rowItems = abilitiesToGet.slice(start, end);

            return (
              <div key={rowIndex} className={styles.row}>
                {rowItems.map((item, itemIndex) => (
                  <Item key={itemIndex} {...item} />
                ))}
              </div>
            );
          })}
        </div>
      </section>
      <section className={styles.program}>
        <div className={styles.title}>Tədris proqramı</div>
        <div className={styles.programDuration}>
          <div>
            <div className={styles.number}>06</div>
            <div className={styles.detail}>Ay</div>
          </div>
          <div>
            <div className={styles.number}>144</div>
            <div className={styles.detail}>Saat</div>
          </div>
          <div>
            <div className={styles.number}>XXX</div>
            <div className={styles.detail}>Modul</div>
          </div>
        </div>
        <div className={styles.question}>Hansı alətlərlə işləyəcəksən?</div>
        <div className={styles.tools}>
          <div>
            <SiAdobephotoshop size={48} color="#31A8FF" />
            <div>Adobe Photoshop</div>
          </div>
          <div>
            <SiAdobeillustrator size={48} color="#FF9A00" />
            <div>Adobe Illustrator</div>
          </div>
          <div>
            <SiAdobeindesign size={48} color="#FF3366" />
            <div>Adobe InDesign</div>
          </div>
          <div>
            <SiAdobeillustrator size={48} color="#FF9A00" />
            <div>Adobe Illustrator</div>
          </div>
          <div>
            <SiAdobeindesign size={48} color="#FF3366" />
            <div>Adobe InDesign</div>
          </div>
        </div>
        <div className={styles.grid}>
          <div>
            <div className={styles.title}>Qrafik Dizaynın Əsasları</div>
            <div className={styles.description}>
              Qrafik dizaynın nə olduğunu və onun vizual kommunikasiya aləti
              kimi rolunu öyrənəcək, dizaynın elementləri (rəng, şəkil, mətn) və
              prinsipləri (həssaslıq, balans, kontrast, ritm) haqqında məlumat
              əldə edəcəksən.
            </div>
          </div>
          <div>
            <div className={styles.title}>Qrafik Dizaynın Əsasları</div>
            <div className={styles.description}>
              Qrafik dizaynın nə olduğunu və onun vizual kommunikasiya aləti
              kimi rolunu öyrənəcək, dizaynın elementləri (rəng, şəkil, mətn) və
              prinsipləri (həssaslıq, balans, kontrast, ritm) haqqında məlumat
              əldə edəcəksən.
            </div>
          </div>
          <div>
            <div className={styles.title}>Qrafik Dizaynın Əsasları</div>
            <div className={styles.description}>
              Qrafik dizaynın nə olduğunu və onun vizual kommunikasiya aləti
              kimi rolunu öyrənəcək, dizaynın elementləri (rəng, şəkil, mətn) və
              prinsipləri (həssaslıq, balans, kontrast, ritm) haqqında məlumat
              əldə edəcəksən.
            </div>
          </div>
        </div>
      </section>
      <section className={styles.instruktorss}>
        <div className={styles.instructorsCont}>
          <div className={styles.instructorHeader}>İnstruktorlar</div>
          <div className={styles.description}>
            Burada sizə yalnız nəzəri biliklər deyil, həm də real iş mühitində
            tətbiq olunan praktiki bacarıqlar öyrədilir. Hər bir müəllimimiz
            texnologiya sahəsindəki yenilikləri yaxından izləyir və öz
            dərslərində müasir yanaşmaları tətbiq edir.
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
                      src={instructor.profilePicture}
                      alt={`${instructor.name}'s photo`}
                    />
                  </div>
                  <div>
                    <div className={styles.instName}>{instructor.name}</div>
                    <div className={styles.instProf}>{instructor.job}</div>
                    <a href={instructor.linkedinLink}>
                      <FaLinkedin
                        color="#0c65c2"
                        size={windowWidth === "web" ? 32 : 24}
                      />
                    </a>
                  </div>
                </div>
                {/* {clickedIns === instructor.id && ( */}
                <div className={styles.hiddenInfo}>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem.
                </div>
                {/* )} */}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.nextGroups}>
        <div className={styles.title}>Növbəti Qruplarımız</div>
        <div className={styles.flex}>
          <div>
            <div className={styles.title}>29 yanvar 2025</div>
            <div className={styles.type}>Həftəiçi</div>
            <div className={styles.time}>
              <div>11:00-13:00</div>
              <div>11:00-13:00</div>
            </div>
            <button>Müraciət et</button>
          </div>
          <div>
            <div className={styles.title}>2 fevral 2025</div>
            <div className={styles.type}>Həftəsonu</div>
            <div className={styles.time}>
              <div>11:00-13:00</div>
            </div>
            <button>Müraciət et</button>
          </div>
        </div>
      </section>
      {/* below section only for graphiv design students */}
      <section className={styles.portfolio}>
        <div className={styles.title}>Tədrisdən Yaradıcılığa</div>
        <div className={styles.desc}>
          Tələbələrimizin hazırladığı əl işləri, onların tədris müddətində
          qazandıqları bilik və bacarıqları necə mənimsədiklərini və bu
          bilikləri yaradıcılıqla birləşdirərək real nəticələrə çevirməkdə nə
          dərəcədə uğurlu olduqlarını aydın şəkildə nümayiş etdirir.
        </div>
        <div className={styles.slider}>
          <div>
            <div className={styles.studentInfo}>
              <div className={styles.img}>
                <img src="https://thispersondoesnotexist.com" alt="" />
              </div>
              <div>
                <div className={styles.name}>Elizabeth Bennet</div>
                <div className={styles.job}>Freelance / Qrafik Dizayner</div>
              </div>
            </div>
            <div className={styles.saying}>
              "Evo, biliklə yanaşı ilham verən, müəllimləri isə hər dərsdə
              dəstək və motivasiya mənbəyi olan bir ailədir!"
            </div>
            <div className={styles.grid}>
              {[0, 1, 2, 3].map((index) => {
                let gridArea;
                console.log(hoveredBox);

                if (hoveredBox === null) {
                  // Default positions when no box is hovered
                  gridArea =
                    index === 0
                      ? "1/1/2/2"
                      : index === 1
                      ? "1/2/2/3"
                      : index === 2
                      ? "2/1/3/2"
                      : "2/2/3/3";
                } else if (hoveredBox === index) {
                  // Enlarge the hovered box
                  gridArea = "1/1/3/3";
                } else if (hoveredBox === 0 || hoveredBox === 1) {
                  // When Box 0 or 1 is hovered, reposition other boxes
                  gridArea =
                    index === 0 || index === 1
                      ? "3/1/4/2"
                      : index === 2
                      ? "3/2/4/3"
                      : "4/1/5/2";
                } else {
                  // When Box 2 or 3 is hovered
                  gridArea =
                    index === 0
                      ? "3/1/4/2"
                      : index === 1
                      ? "3/2/4/3"
                      : index === 2
                      ? "3/2/4/3"
                      : "4/1/5/2";
                }

                return (
                  <div
                    key={index}
                    className={`${styles.box} ${
                      hoveredBox === index ? styles.hovered : ""
                    }`}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    style={{ gridArea }}
                  >
                    <img
                      src={
                        index === 0
                          ? "https://fastly.picsum.photos/id/465/200/200.jpg?hmac=66oxx-Qv8Bakk-7zPy6Kdv7t064QKKWhmDwQTWGZ7A0"
                          : index === 1
                          ? "https://fastly.picsum.photos/id/634/200/200.jpg?hmac=3WUmj9wMd1h3UZICk1C5iydU5fixjx0px9jw-LBezgg"
                          : index === 2
                          ? "https://images.unsplash.com/photo-1735822081174-c919b99e8623?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MDcyNjN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzgxNDY4OTJ8&ixlib=rb-4.0.3&q=85"
                          : "https://images.unsplash.com/photo-1735064812360-7358ca479c00?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MDcyNjN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzgxNDY5NTh8&ixlib=rb-4.0.3&q=85"
                      }
                      alt=""
                    />
                  </div>
                );
              })}

              {/* <div className={styles.box}>
                <img
                  src="https://fastly.picsum.photos/id/465/200/200.jpg?hmac=66oxx-Qv8Bakk-7zPy6Kdv7t064QKKWhmDwQTWGZ7A0"
                  alt=""
                />
              </div>
              <div className={styles.box}>
                <img
                  src="https://fastly.picsum.photos/id/634/200/200.jpg?hmac=3WUmj9wMd1h3UZICk1C5iydU5fixjx0px9jw-LBezgg"
                  alt=""
                />
              </div>
              <div className={styles.box}>
                <img src="https://thispersondoesnotexist.com" alt="" />
              </div>
              <div className={styles.box}>
                <img src="https://thispersondoesnotexist.com" alt="" />
              </div> */}
            </div>
          </div>
          <div>
            <div className={styles.studentInfo}>
              <div className={styles.img}>
                <img src="https://thispersondoesnotexist.com" alt="" />
              </div>
              <div>
                <div className={styles.name}>Elizabeth Bennet</div>
                <div className={styles.job}>Freelance / Qrafik Dizayner</div>
              </div>
            </div>
            <div className={styles.saying}>
              "Evo, biliklə yanaşı ilham verən, müəllimləri isə hər dərsdə
              dəstək və motivasiya mənbəyi olan bir ailədir!"
            </div>
            <div className={styles.grid}>
              <div className={styles.box}>
                <img
                  src="https://images.unsplash.com/photo-1735064812360-7358ca479c00?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MDcyNjN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzgxNDY5NTh8&ixlib=rb-4.0.3&q=85"
                  alt=""
                />
              </div>
              <div className={styles.box}>
                <img
                  src="https://images.unsplash.com/photo-1735822081174-c919b99e8623?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MDcyNjN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzgxNDY4OTJ8&ixlib=rb-4.0.3&q=85"
                  alt=""
                />
              </div>
              <div className={styles.box}>
                <img
                  src="https://fastly.picsum.photos/id/634/200/200.jpg?hmac=3WUmj9wMd1h3UZICk1C5iydU5fixjx0px9jw-LBezgg"
                  alt=""
                />
              </div>
              <div className={styles.box}>
                <img
                  src="https://fastly.picsum.photos/id/465/200/200.jpg?hmac=66oxx-Qv8Bakk-7zPy6Kdv7t064QKKWhmDwQTWGZ7A0"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <div className={styles.studentInfo}>
              <div className={styles.img}>
                <img src="https://thispersondoesnotexist.com" alt="" />
              </div>
              <div>
                <div className={styles.name}>Elizabeth Bennet</div>
                <div className={styles.job}>Freelance / Qrafik Dizayner</div>
              </div>
            </div>
            <div className={styles.saying}>
              "Evo, biliklə yanaşı ilham verən, müəllimləri isə hər dərsdə
              dəstək və motivasiya mənbəyi olan bir ailədir!"
            </div>
            <div className={styles.grid}>
              <div className={styles.box}>
                <img
                  src="https://images.unsplash.com/photo-1735064812360-7358ca479c00?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MDcyNjN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzgxNDY5NTh8&ixlib=rb-4.0.3&q=85"
                  alt=""
                />
              </div>
              <div className={styles.box}>
                <img
                  src="https://images.unsplash.com/photo-1735822081174-c919b99e8623?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MDcyNjN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzgxNDY4OTJ8&ixlib=rb-4.0.3&q=85"
                  alt=""
                />
              </div>
              <div className={styles.box}>
                <img
                  src="https://fastly.picsum.photos/id/634/200/200.jpg?hmac=3WUmj9wMd1h3UZICk1C5iydU5fixjx0px9jw-LBezgg"
                  alt=""
                />
              </div>
              <div className={styles.box}>
                <img
                  src="https://fastly.picsum.photos/id/465/200/200.jpg?hmac=66oxx-Qv8Bakk-7zPy6Kdv7t064QKKWhmDwQTWGZ7A0"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <FaqList />
      </section>
    </div>
  );
};

export default OneField;
