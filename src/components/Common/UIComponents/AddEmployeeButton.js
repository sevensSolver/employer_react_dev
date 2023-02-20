import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

import plus from '../../../img/plus.png';

const AddEmployeeButton = ({ width, url, text }) => {
  const navigate = useNavigate();
  return (
    <Button
      style={{
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
      }}
      size="large"
      onClick={() => navigate('/employees/add')}
    >
      <img src={plus} style={{ height: 20 }} alt="" />
      Add new Employee
    </Button>
  );
};

export default AddEmployeeButton;
