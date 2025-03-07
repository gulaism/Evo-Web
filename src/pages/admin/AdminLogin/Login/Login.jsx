import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import openEye from '../../../../assets/images/admin/AdminLogin/openEye.svg';
import closeEye from '../../../../assets/images/admin/AdminLogin/closeEye.png';
import { useLoginAdminMutation, useCheckAdminEmailQuery } from '../../../../redux/services/adminApiSlice';
import { setAuthToken } from '../../../../redux/services/authSlice';
import ResetPasswordModal from '../ResetPasswordModal/ResetPasswordModal';
import styles from '../Login/Login.module.scss';
import { Link } from "react-router-dom";
import login from '../../../../assets/images/admin/AdminLogin/login.svg'




const Login = () => {
  const [formData, setFormData] = useState({ username: 'EvoAcademyAdmin', password: 'EvoAcademyAdmin' });
  const [errors, setErrors] = useState({});
  const [showResetModal, setShowResetModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginAdmin, { isLoading }] = useLoginAdminMutation();
  const { data: adminEmail, isFetching, refetch } = useCheckAdminEmailQuery();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (!isFetching && adminEmail === null) {
      setShowResetModal(true);
    }
  }, [adminEmail, isFetching]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    let validationErrors = {};
    if (!formData.username) validationErrors.username = 'İstifadəçi adı daxil edin.';
    if (!formData.password) validationErrors.password = 'Şifrə daxil edin.';
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await loginAdmin(formData).unwrap();
      dispatch(setAuthToken(response.accessToken));
      setFormData({ username: '', password: '' });

      await refetch(); // Admin emailini yenilə

      navigate('/admin'); // Dərhal yönləndir!
    } catch (error) {
      setErrors({ general: 'Giriş zamanı xəta baş verdi. Yenidən cəhd edin.' });
    }
  };


  const handleCloseResetModal = async () => {
    setShowResetModal(false);
    await refetch();
    navigate('/admin');
  };


  const openForgetPage = () => {
    navigate('/admin/forget');
  }

  return (
    <div className={`${styles.authContainer} ${showResetModal ? styles.blurBackground : ''}`}>
      <div className={styles.authBox}>
        <h2 className={styles.titleWellcome}>Xoş gəldiniz!</h2>
        <h2 className={styles.titleEnter}>Daxil ol</h2>
        <form className={styles.inputGroup} onSubmit={handleSubmit}>
          <label>İstifadəçi adı</label>
          <input type='text' name='username' value={formData.username} onChange={handleChange} />
          {errors.username && <p className={styles.errorText}>{errors.username}</p>}

          <label>Şifrə</label>
          <div className={styles.passwordWrapper}>
            <input type={showPassword ? 'text' : 'password'} name='password' value={formData.password} onChange={handleChange} />
            <img src={showPassword ? closeEye : openEye} alt='Toggle visibility' onClick={() => setShowPassword(!showPassword)} className={styles.eyeIcon} />
          </div>
          {errors.password && <p className={styles.errorText}>{errors.password}</p>}
          <div onClick={openForgetPage} className={styles.forgotPassword}>
            <Link>şifrəni unutmusan?</Link>
          </div>

          <button className={styles.submitBtn} type='submit'>{isLoading ? 'Yüklənir...' : 'Daxil ol'}</button>
        </form>
      </div>

      <div className={styles.loginImg}>
        <img src={login} alt='login' />
      </div>

      {showResetModal && <ResetPasswordModal onSuccess={handleCloseResetModal} />}
    </div>
  );
};

export default Login;
