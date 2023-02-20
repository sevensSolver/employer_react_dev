import React, { useState } from 'react';
import Pending from './Pending';
import Resolved from './Resolved';
import TopNav from '../../../Common/UIComponents/TopNavDashboard';

const Index = () => {
  const [tab, setTab] = useState('Pending Requests');

  const renderTable = () => {
    if (tab === 'Pending Requests') {
      return <Pending />;
    }
    if (tab === 'Resolved Requests') {
      return <Resolved />;
    }
  };

  return (
    <div>
      <TopNav
        tab={tab}
        setTab={setTab}
        marginBottom={0}
        options={['Pending Requests', 'Resolved Requests']}
        width={320}
      />
      <hr
        style={{
          marginTop: -2,
          height: 1,
          border: 'none',
          backgroundColor: '#e5e5e5',
          marginBottom: 30,
        }}
      />
      {renderTable()}
    </div>
  );
};

export default Index;
