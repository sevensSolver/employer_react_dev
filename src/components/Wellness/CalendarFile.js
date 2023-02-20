import { Calendar } from 'antd';
import React from 'react';
import styles from './index.module.css';

const CalendarFile = () => {
  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  return (
    <div className={styles.calendarFile}>
      <p className={styles.sectionTitle}>Wellness Calendar</p>
      <Calendar fullscreen={false} onPanelChange={onPanelChange} />
    </div>
  );
};

export default CalendarFile;
