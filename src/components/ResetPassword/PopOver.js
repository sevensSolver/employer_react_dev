import { Popover } from 'antd';
import xCircleImg from '../../img/x-circle.png';
import informationCircle from '../../img/information-circle.png';

const PopOver = () => {
  const content = (
    <div style={{ width: 300, position: 'relative' }}>
      <img style={{ position: 'absolute', top: 1, right: 1, height: 15 }} src={xCircleImg} alt="" />
      <p style={{ fontSize: 12, marginBottom: 0, padding: 10 }}>
        We are going to use your email to reset the password. New login details will be send to the
        email address provided.
      </p>
    </div>
  );
  return (
    <Popover placement="topLeft" trigger="click" content={content}>
      <img style={{ height: 20, cursor: 'pointer' }} src={informationCircle} alt="" />
    </Popover>
  );
};

export default PopOver;
