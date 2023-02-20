import Header from './Header';
import SideBar from './SideBar';
import styles from './index.module.css';
import { useState } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import SideBarTablet from './SideBarTablet';

function Main({ children, pageName }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <SideBar />
      <>
        <Drawer open={isOpen} onClose={toggleDrawer} direction="left">
          <SideBarTablet />
        </Drawer>
      </>
      <div className={styles.contain}>
        <Header toggleDrawer={toggleDrawer} pageName={pageName} />
        {children}
      </div>
    </div>
  );
}

export default Main;
