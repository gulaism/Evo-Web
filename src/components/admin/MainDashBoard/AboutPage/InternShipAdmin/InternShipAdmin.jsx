import { useState } from "react";
import styles from "./InternShipAdmin.module.scss";
import { FiTrash2 } from "react-icons/fi";
import { AiOutlineEdit } from "react-icons/ai";
import plusIcon from "../../../../../assets/images/admin/Partners/plusIcon.svg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const InternShipAdmin = () => {
  const [introText, setIntroText] = useState(
    "Təcrübə proqramı sizə real layihələr üzərində işləmək, komanda bacarıqlarınızı inkişaf etdirmək, CV və müsahibə hazırlığı, mentor dəstəyi, karyera yönləndirilməsi və networking qurmaq üçün geniş imkanlar təqdim edir."
  );

  const [items, setItems] = useState([
    {
      id: 1,
      slogan: "Üstünlüklər",
      type: "Tədris tipi",
      time: "Tədris müddəti",
      description:
        "Bu müddət ərzində real layihələrdə işləyərək, senior mütəxəssislərdən məsləhət alma imkanı əldə edəcək, karyeranız üçün portfolio yaradacaq, layihənin sonunda 'Layihə sertifikatı' ilə təltif olunacaqsınız.",
    },
    {
      id: 2,
      slogan: "Üstünlüklər",
      type: "Tədris tipi",
      time: "Tədris müddəti",
      description:
        "Bu müddət ərzində real layihələrdə işləyərək, senior mütəxəssislərdən məsləhət alma imkanı əldə edəcək, karyeranız üçün portfolio yaradacaq, layihənin sonunda 'Layihə sertifikatı' ilə təltif olunacaqsınız.",
    },
    {
      id: 3,
      slogan: "Üstünlüklər",
      type: "Tədris tipi",
      time: "Tədris müddəti",
      description:
        "Bu müddət ərzində real layihələrdə işləyərək, senior mütəxəssislərdən məsləhət alma imkanı əldə edəcək, karyeranız üçün portfolio yaradacaq, layihənin sonunda 'Layihə sertifikatı' ilə təltif olunacaqsınız.",
    },
  ]);

  const handleAddItem = () => {
    const newItem = {
      id: Date.now(),
      slogan: "Yeni Slogan",
      type: "Yeni Tədris tipi",
      time: "Yeni Tədris müddəti",
      description: "Yeni təsvir əlavə edin...",
    };
    setItems([...items, newItem]);
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleEditItem = (id, field, value) => {
    setItems(items.map((item) => (item.id === id ? { ...item, [field]: value } : item)));
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Təcrübə Proqramı</h3>
      <h3 className={styles.subtitle}>Giriş</h3>
      <div className={styles.inputContainer}>
        <AiOutlineEdit className={styles.icon} />
        <textarea value={introText} onChange={(e) => setIntroText(e.target.value)} />
      </div>

      <div className={styles.listHeader}>
        <span>Sloqan</span>
        <span style={{ marginLeft: "-341px" }}>Təsvir</span>
        <button className={styles.addButton} onClick={handleAddItem}>
          <img src={plusIcon} alt="" />
        </button>
      </div>

      {items.map((item) => (
        <div key={item.id} className={styles.listItem}>
          <div className={styles.left}>
            <div className={styles.addButtonFlex} style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "start", marginBottom: "10px" }}>
              <button className={styles.addButtonSlogan} onClick={handleAddItem}>
                <img src={plusIcon} alt="" />
              </button>

              <div className={styles.inputContainer} style={{ width: "330px", height: "44px" }}>
                <AiOutlineEdit className={styles.icon} />
                <input
                  style={{ width: "100%", border: "none" }}
                  className={styles.sloganInput}
                  type="text"
                  value={item.slogan}
                  onChange={(e) => handleEditItem(item.id, "slogan", e.target.value)}
                />
              </div>
            </div>

            <div className={styles.inputContainer} style={{ width: "185px", height: "44px" }}>
              <AiOutlineEdit className={styles.icon} />
              <input
                style={{ width: "100%", border: "none" }}
                className={styles.smallInput}
                type="text"
                value={item.time}
                onChange={(e) => handleEditItem(item.id, "time", e.target.value)}
              />
            </div>
            <input
              style={{ width: "185px", backgroundColor:"rgba(244, 243, 255, 1)", border: "none",borderRadius:"10px" }}
              className={styles.smallInput}
              type="text"
              value={item.type}
              onChange={(e) => handleEditItem(item.id, "type", e.target.value)}
            />

          </div>

          <div className={styles.right}>
            <textarea
              className={styles.descriptionInput}
              value={item.description}
              onChange={(e) => handleEditItem(item.id, "description", e.target.value)}
            />
            <FiTrash2 className={styles.deleteButton} onClick={() => handleDeleteItem(item.id)} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default InternShipAdmin;
