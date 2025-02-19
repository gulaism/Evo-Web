import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForgotPasswordMutation } from '../../../../redux/services/adminApiSlice';
import styles from '../ForgetPassword/ForgetPassPage.module.scss';
import login from '../../../../assets/images/AdminLogin/login.svg';

const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // Error mesajı üçün state əlavə edilir
    const navigate = useNavigate();
    const [forgetPassword, { isLoading }] = useForgotPasswordMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage(''); // Error mesajını təzələyirik

        try {
            await forgetPassword(email); // email birbaşa göndərilir
            navigate('/admin/otp', { state: { email } }); // Yalnız email doğru oldusa yönləndir
        } catch (error) {
            console.error('Email göndərmə xətası:', error);
            setErrorMessage('Bu email qeydiyyatda deyil və ya server xətası baş verdi.'); // Xətanı ekrana yazdırır
            // Yönləndirməyi dayandırırıq
        }
    };

    return (
        <div className='container'>
           <div className={styles.flexPage}>
                <div className={styles.forgetCard}>
                    <h2>Şifrəni Sıfırla</h2>
                    <p>Şifrənizin sıfırlanması üçün elektron poçt ünvanınızı daxil edin.</p>
                    <form onSubmit={handleSubmit}>
                        <label>Elektron poçt</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        
                        {/* Error mesajı burada göstərilir */}
                        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}

                        <button className={styles.submitBtn} type="submit" disabled={isLoading}>Davam et</button>
                    </form>
                </div>
                <div className={styles.loginImg}>
                    <img src={login} alt='login' />
                </div>
           </div>
        </div>
    );
};

export default ForgetPassword;
