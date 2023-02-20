import React from 'react';
import PolicyTable from './Table';

const CreditDebit = () => {
  return (
    <div style={{ backgroundColor: 'white', padding: 10, marginTop: 30, borderRadius: 10 }}>
      <p style={{ fontSize: 14, marginBottom: 10 }}>Debit/Credit Note</p>
      <PolicyTable />
    </div>
  );
};

export default CreditDebit;
