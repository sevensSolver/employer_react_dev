import { Progress } from 'antd';
import React from 'react';
import ColorRound from '../Common/UIComponents/DynamicColorRound';
import styles from './index.module.css';

const PolicyUtilization = () => {
  return (
    <div className={styles.policyUtilizationBox}>
      <h3
        style={{
          color: '#404040',
          fontSize: 14,
          height: 18,
        }}
      >
        Policy Utilisation
      </h3>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            display: 'grid',
            placeItems: 'center',
            width: '40%',
          }}
        >
          <Progress
            width={80}
            format={() => <div style={{ color: '#fd8d2d', fontWeight: 600 }}>85%</div>}
            trailColor="red"
            success={{
              percent: 85,
              strokeColor: '#fd8d2d',
            }}
            type="circle"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '53%',
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 5,
                marginBottom: 10,
              }}
            >
              <ColorRound height={10} width={10} color="#f5f5f5" />
              <p style={{ color: 'gray', fontSize: 12, lineHeight: 1 }} className="mbZero">
                Allocation
              </p>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 5,
                marginBottom: 10,
              }}
            >
              <ColorRound height={10} width={10} color="#a1d9a6" />
              <p style={{ color: 'gray', fontSize: 12, lineHeight: 1 }} className="mbZero">
                Utilized
              </p>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 5,
                marginBottom: 10,
              }}
            >
              <ColorRound height={10} width={10} color="#f86a30" />
              <p style={{ color: 'gray', fontSize: 12, lineHeight: 1 }} className="mbZero">
                Triggers repricing
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyUtilization;
