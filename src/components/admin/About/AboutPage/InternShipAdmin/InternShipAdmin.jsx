import { useState } from "react";
import styles from "./InternShipAdmin.module.scss";
import { FiTrash2 } from "react-icons/fi";
import { AiOutlineEdit } from "react-icons/ai";
import plusIcon from "../../../../../assets/images/admin/Partners/plusIcon.svg";
import edit from "../../../../../assets/images/admin/Statistics/editIcon.svg";
import trash from '../../../../../assets/images/admin/Partners/trashIcon.svg';
import { MdKeyboardArrowRight } from "react-icons/md";

const InternShipAdmin = () => {
  const [introText, setIntroText] = useState(
    "Təcrübə proqramı sizə real layihələr üzərində işləmək, komanda bacarıqlarınızı inkişaf etdirmək, CV və müsahibə hazırlığı, mentor dəstəyi, karyera yönləndirilməsi və networking qurmaq üçün geniş imkanlar təqdim edir."
  );

  const [items, setItems] = useState([
    {
      id: 1,
      slogan: "Üstünlüklər",
      time: "3 ay",
      type: "Online",
      description: "Bu müddət ərzində real layihələrdə işləyərək, mentor dəstəyi alacaqsınız.",
    },
  ]);

  const handleAddItem = () => {
    setItems([
      ...items,
      {
        id: Date.now(),
        slogan: "Yeni Slogan",
        time: "Yeni müddət",
        type: "Yeni tədris tipi",
        description: "Yeni təsvir əlavə edin...",
      },
    ]);
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
      <div className={styles.inputContainer} style={{ marginBottom: "20px" }}>
        <AiOutlineEdit className={styles.icon} />
        <textarea
          value={introText}
          onChange={(e) => setIntroText(e.target.value)}
        />
      </div>

      {/* <div className={styles.headerRow}>
        <div className={styles.listHeader}>
          <span></span>
          <span>Sloqan</span>
          <span>Tədris müddəti</span>
          <span>Tədris tipi</span>
          <span>Təsvir</span>
          <span></span>
        </div>
        <button className={styles.addButton} onClick={handleAddItem}>
          <img src={plusIcon} alt="+" />
        </button>
      </div>

      {items.map((item) => (
        <div key={item.id} className={styles.listItem}>
          <div className={styles.buttons}>
            <button className={styles.addButton} onClick={handleAddItem}>+</button>
          </div>
          <input type="text" value={item.slogan} onChange={(e) => handleEditItem(item.id, "slogan", e.target.value)} />
          <input type="text" value={item.time} onChange={(e) => handleEditItem(item.id, "time", e.target.value)} />
          <input type="text" value={item.type} onChange={(e) => handleEditItem(item.id, "type", e.target.value)} />
          <textarea value={item.description} onChange={(e) => handleEditItem(item.id, "description", e.target.value)} />
          <FiTrash2 className={styles.deleteButton} onClick={() => handleDeleteItem(item.id)} />
        </div>
      ))} */}

      <div className={styles.tableDiv}>
        <div className={styles.gridHead}>
          <div className={styles.headData}>Sloqan</div>
          <div className={styles.headData}>Təsvir</div>
          <div>
            <div>
              <img src={plusIcon} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.gridBody}>
          <div className={styles.sloganCell}>
            <div>
              <div className={styles.word}>
                <img src={edit} alt="" />
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Üstünlüklər"
                />
              </div>
            </div>
            <div className={styles.newFlexDiv}>
              <div className={styles.word}>
                <img src={edit} alt="" />
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Tədris müddəti"
                />
              </div>
              <div className={styles.differWord}>
                <MdKeyboardArrowRight size={24} color="#b4adff" />
                <div className={styles.sectionText}>
                Tədris tipi
                </div>
              </div>
            </div>
          </div>
          <div className={styles.descCell}>
            <img src={edit} alt="" />
            <input
              className={styles.input}
              type="text"
              placeholder="Vəd edilmiş bacarıqların sadə, lokanik izahı."
            />
          </div>
          <div className={styles.lastCell}>
            <div className={styles.iconCell}>
              <img src={trash} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternShipAdmin;
