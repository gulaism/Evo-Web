// images
import chart from "../../../assets/images/Contact/graph.svg";
import note from "../../../assets/images/Contact/note-2.svg";
import sms from "../../../assets/images/Contact/sms.svg";
// components
import FaqList from "../../../components/HomePage/HomeBottom/FaqListQuestions/FaqListQuestions";
import { useGetMeetDataQuery } from "../../../redux/services/apiSlice";
// style
import styles from "./Contact.module.scss";

const Contact = () => {
  const { data, isLoading, isError } = useGetMeetDataQuery();

  if (isLoading) return <div>Yuklenir...</div>;
  if (isError) return <div>Error baş verdi :/</div>;

  return (
    <div className="container">
      <h1>Gəl Görüşək!</h1>
      <section className={styles.mainSec}>
        <div className={styles.leftDiv}>
          {data?.contacts.map((contact, index) => {
            const trimmedContent = contact.content.trim();
            const isEmail = trimmedContent.includes("@");
            const isPhone = /^\+?[0-9\s]+$/.test(trimmedContent);
            const isUrl = /^https?:\/\//.test(trimmedContent);

            let href;
            if (isEmail) href = `mailto:${trimmedContent}`;
            else if (isPhone)
              href = `https://wa.me/${trimmedContent.replace(/\s/g, "")}`;
            else if (isUrl) hred = trimmedContent;

            return (
              <div key={index}>
                <div className={styles.imgCont}>
                  <img src={contact.imageUrl} alt={contact.title} />
                </div>
                <div>
                  <div className={styles.title}>{contact.title}</div>
                  <div className={styles.info}>{contact.content}</div>
                  {href && (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                    ></a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.addresses}>
          {data?.addresses.map((address, index) => (
            <div key={index} className={styles.rightDiv}>
            <div className={styles.title}>{address.header}</div>
            <div className={styles.desc}>
              {address.contents.map((content, index) => (
                <div key={index}>{content}</div>
              ))}
            </div>
            <a
              href="https://www.google.com/maps/place/Evo+Academy/@40.3854169,49.8504736,20z/data=!4m14!1m7!3m6!1s0x49b81c56c0ae8f9:0x41f94f25a93a5726!2sEvo+Academy!8m2!3d40.3945925!4d49.8549596!16s%2Fg%2F11y5vd42hy!3m5!1s0x40307d004b8e51e1:0xc8264ab6db626906!8m2!3d40.3854169!4d49.8507298!16s%2Fg%2F11y6nv9xfy?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
              target="blank"
            ></a>
          </div>
          ))}
        </div>
      </section>
      <section>
        <FaqList questions={data?.faqAboutHomes} />
      </section>
    </div>
  );
};

export default Contact;
