import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './index.module.css';
import { getFinanceStats } from '../../store/policySlice';
import banknotes from '../../img/banknotesWhite.png';
import { Progress } from 'antd';

const TopSection = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFinanceStats());
  }, [dispatch]);

  const { financeStats } = useSelector((state) => state.policy);

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
          <div className={styles.iconBackgroundGreenBig}>
            <img src={banknotes} alt="avatar" style={{ height: 20 }} />
          </div>
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
              fontWeight: 500,
              marginBottom: 20,
              color: '#3ab44d',
              fontSize: 13,
            }}
          >
            RWF 1000
            {/* {financeStats?.currency} {financeStats?.total_amount_outstanding} */}
          </p>
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
        <div style={{}}>
          <Progress
            success={{
              percent: 30,
              strokeColor: '#3ab44d',
            }}
            size="small"
            showInfo={false}
          />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <span style={{ fontSize: 12, fontWeight: 300, color: '#d4d4d4' }}>Good Standing</span>
            <span style={{ fontSize: 12, fontWeight: 300, color: '#d4d4d4' }}>Outstanding</span>
          </div>
        </div>
        <div style={{ display: 'grid', placeItems: 'center' }}>
          <p style={{ fontSize: 12, marginBottom: 3, color: '#d4d4d4' }}>Credit/Debit</p>
          <p
            style={{
              fontWeight: 500,
              marginBottom: 0,
              color: '#3ab44d',
              fontSize: 13,
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

export default TopSection;
