import { useState } from 'react';
import { useCompleteAdminMutation } from '../../../../redux/services/adminApiSlice';
import { useNavigate } from 'react-router-dom';
import styles from './ResetPassword.module.scss';
import openEye from '../../../../assets/images/admin/AdminLogin/openEye.svg';
import closeEye from '../../../../assets/images/admin/AdminLogin/closeEye.png';

const ResetPasswordModal = ({ onSuccess }) => {
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });
  const [completeAdminSetup] = useCompleteAdminMutation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [modalHeight, setModalHeight] = useState('auto'); // Modal hündürlüyünü təyin edən state
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Düzgün daxil ediləndə xətanı təmizlə
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!validateEmail(formData.email)) {
      validationErrors.email = 'Zəhmət olmazsa, email ünvanın düzgünlüyünü yoxlayın.';
    }

    if (formData.password !== formData.confirmPassword) {
      validationErrors.password = 'Zəhmət olmasa şifrənin eyniliyini yoxlayın.';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setModalHeight('661px'); // Xətalar varsa modalın hündürlüyü artır
      return;
    }

    setModalHeight('auto'); // Xətalar yoxdursa, modalın hündürlüyü normala qayıdır

    try {
      await completeAdminSetup(formData).unwrap();
      onSuccess(); // <-- Modalı bağla və yönləndir
    } catch (error) {
      setErrors({ general: 'Şifrəni yeniləmə zamanı xəta baş verdi. Yenidən cəhd edin.' });
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent} style={{ height: modalHeight }}>
        <h2 className={styles.modalTitleTop}>Bir Addım Daha!</h2>
        <h3>Davam etmək üçün bu sahələri doldur</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor='email'>Elektron poçt</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className={styles.errorText}>{errors.email}</p>}

          <label htmlFor='password'>Yeni şifrə</label>
          <div className={styles.passwordWrapper}>
            <input
              type={showPassword ? 'text' : 'password'}
              name='password'
              value={formData.password}
              onChange={handleChange}
            />
            <img
              src={showPassword ? closeEye : openEye}
              alt="Toggle visibility"
              onClick={() => setShowPassword(prev => !prev)}
              className={styles.eyeIcon}
            />
          </div>

          <label htmlFor='confirmPassword'>Yeni şifrənin təkrarı</label>
          <div className={styles.passwordWrapper}>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name='confirmPassword'
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <img
              src={showConfirmPassword ? closeEye : openEye}
              alt="Toggle visibility"
              onClick={() => setShowConfirmPassword(prev => !prev)}
              className={styles.eyeIcon}
            />
          </div>
          {errors.password && <p className={styles.errorText}>{errors.password}</p>}

          <button className={styles.submitBtn} type='submit'>Daxil ol</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordModal;
