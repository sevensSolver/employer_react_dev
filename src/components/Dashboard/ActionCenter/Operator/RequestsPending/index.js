import React from 'react';
import Main from '../../../../../template';
import OperatorAdminCenter from './OperatorRequestDetail';

const Index = () => {
  let { role } = JSON.parse(localStorage.getItem('hrUser'));

  return (
    <Main>
      <OperatorAdminCenter />
    </Main>
  );
};

export default Index;
