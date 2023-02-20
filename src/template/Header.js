import { Dropdown, Layout, Menu } from 'antd';

import { useNavigate } from 'react-router-dom';
import { LogoutOutlined, UserOutlined, MenuOutlined } from '@ant-design/icons';

import user from '../img/user.png';
import styles from './index.module.css';

const HeaderComponenet = ({ toggleDrawer, pageName }) => {
  const { Header: AntHeader } = Layout;

  const navigate = useNavigate();
  const handleMenuClick = async (e) => {
    if (e.key === '1') {
      navigate('/profile');
    }
    if (e.key === '2') {
      localStorage.clear();
      navigate('/login');
    }
  };

  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: 'Profile',
          key: '1',
          icon: <UserOutlined />,
        },
        {
          label: 'Logout',
          key: '2',
          icon: <LogoutOutlined />,
        },
      ]}
    />
  );

  const hrUser = localStorage.getItem('hrUser') && JSON.parse(localStorage.getItem('hrUser'));

  return (
    <AntHeader style={{ backgroundColor: 'inherit', marginBottom: 45, marginTop: 15 }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 15,
        }}
      >
        <div>
          <MenuOutlined
            className={styles.menuIcon}
            onClick={toggleDrawer}
            style={{ fontSize: 19, color: '#3ab44d', marginLeft: 40 }}
          />
          <h4 className={styles.pageName} style={{ marginBottom: 0 }}>
            {pageName}
          </h4>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: 15,
            alignItems: 'center',
          }}
        >
          <Dropdown overlay={menu}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
              <img src={user} style={{ width: 30 }} alt="" />
            </div>
          </Dropdown>
          <p style={{ marginBottom: 0 }}>{hrUser?.first_name}</p>
        </div>
      </div>
    </AntHeader>
  );
};

export default HeaderComponenet;
