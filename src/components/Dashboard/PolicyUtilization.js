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
        Hospital Finder
      </h3>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            display: 'grid',
            placeItems: 'center',
            width: '40%',
          }}
        >
        <img  style={{'width':'100px','height':'100px'}} src={require('../../img/hospital.png')} />
          {/* <Progress
            width={80}
            format={() => <div style={{ color: '#fd8d2d', fontWeight: 600 }}>85%</div>}
            trailColor="#a1d9a6"
            success={{
              percent: 85,
              strokeColor: '#fd8d2d',
            }}
            type="circle"
          /> */}
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
          <div style={{}}>
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
                Clinics
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
                Hospitals
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyUtilization;
