import React, { useState, useEffect } from "react";
import styles from "./SettingsPage.module.scss";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import editIcon from "../../../assets/images/admin/Statistics/editIcon.svg";
import evoLogo from "../../../assets/images/admin/Settings/evoLogo.svg";
import profile from "../../../assets/images/admin/Settings/profile.svg";

const SettingsPage = () => {
  const [initialData, setInitialData] = useState({
    name: "Your Name",
    email: "yourmail@gmail.com",
    username: "username",
    password: "********",
    phone: "+994",
    logo: evoLogo,
  });

  const [formData, setFormData] = useState(initialData);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Form məlumatları dəyişəndə "Yadda saxla" düyməsi aktivləşir
    setIsEnabled(
      Object.keys(formData).some((key) => formData[key] !== initialData[key])
    );
  }, [formData, initialData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log("Saved Data:", formData);
    // RTK və ya API çağırışı burada edilə bilər
    setInitialData(formData); // Form məlumatlarını ilkin dəyərlərə yenilə
    setIsEnabled(false); // Yadda saxladıqdan sonra düyməni deaktiv et
  };

  return (
    <form className={styles.container} onSubmit={(e) => e.preventDefault()}>
      <div className={styles.settingsCard}>
        <h2 className={styles.title1}>Tənzimləmələr</h2>
        <h2 className={styles.title}>Tənzimləmələr</h2>
        <div className={styles.settingsContent}>
          <div className={styles.profileSection}>
            <div className={styles.profileImage}>
              <img src={profile} alt="Profile" />
            </div>
          </div>
          <div className={styles.leftSection}>
            <div className={styles.inputGroup}>
              <label>Adınız</label>
              <div className={styles.inputWrapper}>
                <button className={styles.icon}>
                  <img src={editIcon} alt="Edit Icon" />
                </button>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
              </div>
            </div>
            <div className={styles.inputGroup}>
              <label>Elektron poçt</label>
              <div className={styles.inputWrapper}>
                <button className={styles.icon}>
                  <img src={editIcon} alt="Edit Icon" />
                </button>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
              </div>
            </div>
            <div className={styles.logoSection}>
              <label>Logo</label>
              <div className={styles.logoContainer}>
                <button className={styles.icon}>
                  <img src={editIcon} alt="Edit Icon" />
                </button>
                <img src={formData.logo} alt="Logo" className={styles.logo} />
              </div>
            </div>
          </div>
          <div className={styles.rightSection}>
            <div className={styles.inputGroup}>
              <label>Username</label>
              <div className={styles.inputWrapper}>
                <button className={styles.icon}>
                  <img src={editIcon} alt="Edit Icon" />
                </button>
                <input type="text" name="username" value={formData.username} onChange={handleChange} />
              </div>
            </div>
            <div className={styles.inputGroup}>
              <label>Şifrəni dəyiş</label>
              <div className={styles.inputWrapper}>
                <button className={styles.icon}>
                  <img src={editIcon} alt="Edit Icon" />
                </button>
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
                <AiOutlineEyeInvisible className={styles.eyeIcon} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.settingsCardRight}>
        <h2 className={styles.title}>Növbəti Qruplar Yığılmadıqda</h2>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Əlaqə nömrəsi</label>
          <div className={styles.inputWrapper}>
            <button className={styles.icon}>
              <img src={editIcon} alt="Edit Icon" />
            </button>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
          </div>
        </div>
        <button
          className={isEnabled ? `${styles.saveBtn} ${styles.active}` : styles.saveBtn}
          onClick={handleSave}
          disabled={!isEnabled}
        >
          Yadda saxla
        </button>
      </div>
    </form>
  );
};

export default SettingsPage;
