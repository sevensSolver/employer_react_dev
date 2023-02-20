import React from 'react';
import { HiOutlineDocumentText } from 'react-icons/hi';
import styles from './index.module.css';
import documentList from '../../img/documentList.png';

const WellnessReport = () => {
  let arr = [
    { day: 1, date: 'July 2022' },
    { day: 2, date: 'June 2022' },
    { day: 3, date: 'May 2022' },
    { day: 4, date: 'April 2022' },
  ];
  return (
    <div className={styles.wellnessReport}>
      <p className={styles.sectionTitle}>Wellness reports</p>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          marginLeft: 5,
          gap: 20,
        }}
      >
        {arr.map((item, index) => (
          <div style={{ width: 180, display: 'flex', gap: 5 }} key={index}>
            <img src={documentList} alt="" style={{ height: 20 }} />
            <div>
              <p style={{ fontWeight: 500, marginBottom: 3, fontSize: 16 }}>Wellness Report</p>
              <p style={{ fontSize: 8, marginBottom: 0, color: 'gray' }}>{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WellnessReport;
