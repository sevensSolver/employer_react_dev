import React from 'react';
import Main from '../../../../../template';
import AdminRequestDetail from './AdminRequestDetail';

const Index = () => {
  let { role } = JSON.parse(localStorage.getItem('hrUser'));

  return (
    <Main>
      <AdminRequestDetail />
    </Main>
  );
};

export default Index;
