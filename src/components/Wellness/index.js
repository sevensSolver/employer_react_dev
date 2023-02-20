import React from 'react';
import Main from '../../template';
import WellnessStatus from './WellnessStatus';
import CalendarFile from './CalendarFile';
import WellnessReport from './WellnessReport';
import Chart from './Chart';

const Index = () => {
  return (
    <Main pageName="Wellness">
      <div style={{ display: 'flex', gap: 20 }}>
        <div
          style={{
            width: '68%',
          }}
        >
          <WellnessReport />
          <div style={{ display: 'flex', gap: 10 }}>
            <WellnessStatus />
            <Chart />
          </div>
        </div>
        <div
          style={{
            width: '30%',
          }}
        >
          <CalendarFile />
        </div>
      </div>
    </Main>
  );
};

export default Index;
