import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useResetPasswordMutation } from '../../../../redux/services/adminApiSlice';
import styles from '../ResetPasswordPage/ResetPassPage.module.scss';
import openEye from '../../../../assets/images/AdminLogin/openEye.svg';
import closeEye from '../../../../assets/images/AdminLogin/closeEye.png';
import login from '../../../../assets/images/AdminLogin/login.svg';

const ResetPassword = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { email, token } = location.state || {};
    const [newPassword, setNewPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');
   
    const [resetPassword, { isLoading }] = useResetPasswordMutation();
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');  // Error mesajı üçün state

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!email || !token) {
            console.error("Email və ya resetToken boş ola bilməz.");
            return;
        }

        // Şifrəni təkrar daxil etməyi yoxlayırıq
        if (newPassword !== verifyPassword) {
            setError("Zəhmət olmazsa, şifrənin eyniliyini yoxlayın.");  // Error mesajı
            return;
        }

        setError('');  // Error mesajını sıfırlayırıq (xəta yoxdursa)

        try {
            const response = await resetPassword({
                email,
                newPassword,
                verifyPassword,
                resetToken: token
            }).unwrap();
    
            console.log("Cavab:", response); // Bax gör, burada düzgün mesaj gəlirmi?
    
            if (response.includes("Password reset successfully")) {
                console.log("Şifrə uğurla dəyişdirildi!");
                navigate('/admin/login');  // Burada səhifəni login-ə yönləndir
            } else {
                console.error("Şifrə dəyişmə uğursuz oldu:", response);
            }
        } catch (error) {
            console.error("Şifrəni sıfırlamaq mümkün olmadı:", error);
        }
    };
    
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='container'>
            <div className={styles.flexPage}>
                <div className={styles.container}>
                    <h2>Şifrəni Sıfırla</h2>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.passwordContainer}>
                            <label>Yeni Şifrə</label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                                placeholder="Yeni şifrəni daxil edin"
                            />
                            <img
                                className={styles.passwordToggle}
                                src={showPassword ? openEye : closeEye}
                                alt="Password visibility toggle"
                                onClick={togglePasswordVisibility}
                            />
                        </div>
                        <div className={styles.passwordContainer}>
                            <label>Yeni Şifrənin Təkrarı</label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={verifyPassword}
                                onChange={(e) => setVerifyPassword(e.target.value)}
                                required
                                placeholder="Şifrənizi təkrarlayın"
                            />
                            <img
                                className={styles.passwordToggle}
                                src={showPassword ? openEye : closeEye}
                                alt="Password visibility toggle"
                                onClick={togglePasswordVisibility}
                            />
                        </div>
                        {/* Error mesajını göstərmək */}
                        {error && <div className={styles.error}>{error}</div>}

                        <button type="submit" disabled={isLoading}>Davam et</button>
                    </form>
                </div>
                <div className={styles.loginImg}>
                    <img src={login} alt='login' />
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;