import { Progress } from 'antd';
import React from 'react';
import styles from '../index.module.css';
import banknotes from '../../../img/banknotes.png';

const SummaryFinance = ({ financeStats }) => {
  return (
    <div className={styles.summaryBox}>
      <p className={styles.summaryBoxTitle}>Financial Status</p>
      <div className={styles.iconBackground}>
        <img src={banknotes} alt="avatar" style={{ height: 23 }} />
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          marginTop: 50,
        }}
      >
        <div style={{ display: 'flex', gap: 10 }}>
          <div>
            <p
              style={{
                fontSize: 9,
                fontWeight: 700,
                color: '#d4d4d4',
              }}
            >
              Status
            </p>
            <p style={{ fontSize: 11, fontWeight: 700, marginBottom: 0 }}>Outstanding</p>
          </div>
        </div>
        <div
          style={{
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <p style={{ fontSize: 12, marginBottom: 3, color: '#d4d4d4' }}>Outstanding</p>
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              marginBottom: 0,
            }}
          >
            RWF 1000
            {/* {financeStats?.currency} {financeStats?.total_amount_outstanding} */}
          </p>
        </div>
      </div>

      <div style={{ marginTop: 10, marginBottom: 10 }}>
        <Progress
          success={{
            percent: 80,
            strokeColor: '#f87d4e',
          }}
          size="small"
          showInfo={false}
        />
      </div>
    </div>
  );
};

export default SummaryFinance;
