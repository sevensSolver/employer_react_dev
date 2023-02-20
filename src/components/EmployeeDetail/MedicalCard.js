import { useSelector } from 'react-redux';
import LogoSidebarOpen from '../../img/LogoWithText.png';
import styles from './index.module.css';

const MedicalCard = () => {
  const { data, loading } = useSelector((state) => state.employeeDetail);
  return (
    <div className="medicalCard">
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: 10,
          height: 260,
          padding: 15,
        }}
      >
        <p
          style={{
            marginBottom: 10,
            fontSize: 14,
          }}
        >
          Medical Card
        </p>
        <div className={styles.medicalCardInner}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <p style={{ marginBottom: 0, color: '#fcd0c0' }}>Member No:</p>
              <p
                style={{
                  marginBottom: 0,
                  color: '#b8491d',
                  fontWeight: 600,
                  lineHeight: 1.4,
                  fontSize: 20,
                }}
              >
                #{data?.member_number}
              </p>
            </div>
            <div className={styles.statusBox}>
              <span
                style={{
                  color:
                    data?.status === 'Pending'
                      ? '#FEC828'
                      : data?.status === 'Active'
                      ? '#3ab44d'
                      : 'red',
                }}
              >
                {data?.status}
              </span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div
              style={{
                fontSize: 12,
                color: '#fcd0c0',
              }}
            >
              <p style={{ marginBottom: 0 }}>
                <span>SCHEME NAME :</span> EDEN CARE MEDICAL
              </p>
              <p style={{ marginBottom: 0 }}>
                <span>Member’s Name: </span> {data?.name.toUpperCase()}
              </p>
            </div>
            <img src={LogoSidebarOpen} style={{ height: 25 }} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalCard;
