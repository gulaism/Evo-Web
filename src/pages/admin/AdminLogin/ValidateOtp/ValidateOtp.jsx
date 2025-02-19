import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useValidateOtpMutation } from '../../../../redux/services/adminApiSlice';
import styles from './ValidateOtp.module.scss';

const ValidateOtp = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { email } = location.state || {};
    const [otp, setOtp] = useState(Array(6).fill(""));
    const [validateOtp, { isLoading }] = useValidateOtpMutation();
    const [timeLeft, setTimeLeft] = useState(60);
    const [errorMessage, setErrorMessage] = useState("");
    const inputRefs = useRef([]);

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft]);

    const handleOtpChange = (e, index) => {
        const value = e.target.value;
        if (/^\d?$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (value && index < 5) {
                inputRefs.current[index + 1]?.focus();
            }
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");

        const otpString = otp.join('');
        if (otpString.length !== 6) {
            setErrorMessage("OTP kodu 6 rəqəm olmalıdır.");
            return;
        }

        try {
            const response = await validateOtp({ email, otp: otpString }).unwrap();
            console.log("OTP doğrulama cavabı:", response);

            // Cavabın JSON olub-olmadığını yoxlayaq
            if (typeof response !== "object") {
                throw new Error("Gözlənilməz cavab formatı alındı.");
            }

            navigate('/admin/reset', { state: { email, token: response.token } });
        } catch (error) {
            console.error("OTP doğrulama xətası:", error);
            setErrorMessage("Zəhmət olmazsa, şifrənin düzgünlüyünü yoxlayın");
        }
    };

    return (
        <div className='container'>
            <div className={styles.container}>
                <h2>Şifrəni Sıfırla</h2>
                <p>Email ünvanınıza göndərilmiş 6 rəqəmli kodu daxil edin.</p>
                <form onSubmit={handleSubmit}>
                    <label>Kodu daxil edin</label>
                    <div className={styles.otpContainer}>
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                ref={(el) => (inputRefs.current[index] = el)}
                                type="text"
                                value={digit}
                                onChange={(e) => handleOtpChange(e, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                maxLength={1}
                                required
                            />
                        ))}
                    </div>

                    {errorMessage && <p className={styles.error}>{errorMessage}</p>}

                    <p className={styles.timer}>
                        {timeLeft > 0 ? `00:${timeLeft < 10 ? '0' + timeLeft : timeLeft}` : 'Kod müddəti bitdi'}
                    </p>

                    <button type="submit" disabled={isLoading || timeLeft === 0}>Şifrəni sıfırla</button>
                </form>
            </div>
        </div>
    );
};

export default ValidateOtp;
