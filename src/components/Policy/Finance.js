import styles from './index.module.css';
import banknotes from '../../img/banknotesWhite.png';
import { Progress } from 'antd';

const Finance = () => {
  return (
    <div className={styles.financeBox}>
      <h3
        style={{
          color: '#404040',
          fontSize: 14,
          height: 18,
        }}
      >
        Finance
      </h3>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <div style={{ display: 'flex', gap: 10 }}>
          <div
            style={{ height: 40, width: 40, backgroundColor: '#3ab44d' }}
            className={styles.iconBackgroundBg}
          >
            <img src={banknotes} alt="avatar" style={{ height: 20 }} />
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <div style={{ display: 'grid', placeItems: 'center' }}>
          <p style={{ fontSize: 12, marginBottom: 3, color: '#d4d4d4' }}>Credit/Debit</p>
          <p
            style={{
              fontWeight: 500,
              marginBottom: 0,
              color: 'black',
              fontSize: 18,
            }}
          >
            RWF 500
            {/* {financeStats?.currency} {financeStats?.total_amount_credited} */}
          </p>
        </div>
        <div style={{ display: 'grid', placeItems: 'center' }}>
          <p style={{ fontSize: 12, marginBottom: 3, color: '#d4d4d4' }}>Credit/Debit</p>
          <p
            style={{
              fontWeight: 500,
              marginBottom: 0,
              color: 'black',
              fontSize: 18,
            }}
          >
            RWF 500
            {/* {financeStats?.currency} {financeStats?.total_amount_credited} */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Finance;
