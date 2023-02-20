import { Button } from 'antd';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PlusCircleFilled } from '@ant-design/icons';
import BackNavigation from '../Common/UIComponents/BackNavigation';

const TopSection = ({ show }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <BackNavigation url="/employees" />
      {show && (
        <Button
          size="large"
          icon={<PlusCircleFilled style={{ color: '#3ab44d', fontSize: 18 }} />}
          type="dashed"
          onClick={() => navigate(`/employees/add-dependent/${id}`)}
        >
          Add Dependent
        </Button>
      )}
    </div>
  );
};

export default TopSection;
