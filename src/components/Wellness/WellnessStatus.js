import React from 'react';
import diamond from '../../img/trophy.png';
import styles from './index.module.css';

const WellnessStatus = () => {
  let arr = [
    { day: 1, date: 'July 2022' },
    { day: 2, date: 'June 2022' },
    { day: 3, date: 'May 2022' },
    { day: 4, date: 'April 2022' },
  ];
  return (
    <div className={styles.wellnessStatus}>
      <p className={styles.sectionTitle}>Wellness Status</p>
      <div className={styles.wellnessStatusContainer}>
        <div className={styles.iconCircle}>
          <img src={diamond} style={{ height: 20 }} alt="Your Image" />
        </div>
        <div style={{ width: '75%' }}>
          <div style={{ marginBottom: 35 }}>
            <p style={{ fontSize: 12, color: '#737373' }} className="mbZero">
              Status
            </p>
            <p className="mbZero" style={{ color: '#8a2faa', fontWeight: 500, fontSize: 18 }}>
              Diamond Status
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              gap: 10,
            }}
          >
            <div style={{ width: '50%' }}>
              <p style={{ fontSize: 12, color: '#737373', marginBottom: 3 }}>Wellness Days</p>
              <p style={{ color: '#3ab44d', marginBottom: 10 }}>4</p>
              {arr.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 7,
                    marginBottom: 10,
                  }}
                >
                  <div
                    className={styles.check}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <span
                      style={{
                        fontSize: 9,
                      }}
                    >
                      Day 1
                    </span>

                    <span
                      style={{
                        color: 'gray',
                        fontSize: 9,
                      }}
                    >
                      - 2 Jan 2023
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ width: '50%' }}>
              <p style={{ fontSize: 12, color: '#737373', marginBottom: 3 }}>Biometric Screening</p>
              <p style={{ color: '#3ab44d', marginBottom: 10 }}>90%</p>
              {arr.map((item) => (
                <div
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 7,
                    marginBottom: 10,
                  }}
                >
                  <div
                    className={styles.check}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <span
                      style={{
                        fontSize: 9,
                      }}
                    >
                      Day 1
                    </span>

                    <span
                      style={{
                        color: 'gray',
                        fontSize: 9,
                      }}
                    >
                      - 2 Jan 2023
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WellnessStatus;
