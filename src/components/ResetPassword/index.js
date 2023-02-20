import { useState } from 'react';
import styles from './index.module.css';
import SetNewPassword from './SetNewPassword';
import VerifyOTP from './VerifyOTP';
import { useLocation, useNavigate } from 'react-router-dom';
import LogoWithText from '../../img/LogoWithText.png';
import RequestOtp from './RequestOtp';

const Index = () => {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState('');
  const [uniqueKey, setUniqueKey] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const renderForm = () => {
    switch (step) {
      case 0:
        return <RequestOtp setEmail={setEmail} setStep={setStep} />;
      case 1:
        return <VerifyOTP email={email} setUniqueKey={setUniqueKey} setStep={setStep} />;
      case 2:
        return <SetNewPassword uniqueKey={uniqueKey} email={email} />;
      default:
        return null;
    }
  };

  const arr = location?.state;

  return (
    <div className={styles.container}>
      <div className={styles.sectionOne}>
        <img
          onClick={() => navigate('/')}
          src={LogoWithText}
          style={{ height: 32, position: 'absolute', left: '7%', top: '5%', cursor: 'pointer' }}
          alt=""
        />
        <h3 className={styles.bannerText}>Health Insurance Made Easy</h3>
      </div>

      <div className={styles.sectionTwo}>
        <div className={styles.box}>
          <h3 className={styles.formTitle}>{arr[step]?.title}</h3>
          <p className={styles.formText}>{arr[step]?.text}</p>
          {renderForm()}
        </div>
      </div>
    </div>
  );
};

export default Index;
