/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import styles from './index.module.css';
import Logo from '../img/sidebarIcons/logo-sidebarClose.png';
import LogoSidebarOpen from '../img/LogoWithText.png';

import dashboard from '../img/sidebarIcons/dashboard.png';
import dashboardActive from '../img/sidebarIcons/dashboardActive.png';

import reportActive from '../img/sidebarIcons/reportsActive.png';
import report from '../img/sidebarIcons/reports.png';

import employees from '../img/sidebarIcons/employees.png';
import employeeActive from '../img/sidebarIcons/employeesActive.png';

import policy from '../img/sidebarIcons/policy.png';

import wellness from '../img/sidebarIcons/wellness.png';
import wellnessActive from '../img/sidebarIcons/wellnessActive.png';
import policyActive from '../img/sidebarIcons/policyActive.png';

import support from '../img/sidebarIcons/support.png';
import supportActive from '../img/sidebarIcons/supportActive.png';
import logoutIcon from '../img/sidebarIcons/logout.png';

import { RiDashboardLine } from 'react-icons/ri';

const links = [
  {
    name: 'Dashboard',
    path: '/',
    icon: dashboard,
    reactIcon: <RiDashboardLine size={24} />,
    activeIcon: dashboardActive,
  },
  {
    name: 'Employees',
    path: '/employees',
    icon: employees,
    reactIcon: <RiDashboardLine size={24} />,
    activeIcon: employeeActive,
  },
  {
    name: 'Policy',
    path: '/policy',
    icon: policy,
    reactIcon: <RiDashboardLine size={24} />,
    activeIcon: policyActive,
  },
  {
    name: 'Reports',
    path: '/reports',
    icon: report,
    reactIcon: <RiDashboardLine size={24} />,
    activeIcon: reportActive,
  },
  {
    name: 'Wellness',
    path: '/wellness',
    icon: wellness,
    reactIcon: <RiDashboardLine size={24} />,
    activeIcon: wellnessActive,
  },
  {
    name: 'Support',
    path: '/support',
    icon: support,
    reactIcon: <RiDashboardLine size={24} />,
    activeIcon: supportActive,
  },
];

const SideBar = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div
      onMouseLeave={() => setOpen(false)}
      onMouseEnter={() => setOpen(true)}
      className={open ? styles.sideBarOpen : styles.sideBar}
    >
      {open ? (
        <Link to={'/'}>
          <img src={LogoSidebarOpen} alt="" className={styles.logoOpen} />
        </Link>
      ) : (
        <Link to={'/'}>
          <img src={Logo} alt="" className={styles.logo} />
        </Link>
      )}
      <div className={open ? styles.linksOpen : styles.links}>
        {links.map((item) => (
          <NavLink
            key={item.name}
            className={({ isActive }) => (isActive ? styles.linkItemActive : styles.linkItem)}
            to={item.path}
            end
          >
            {open ? (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                }}
              >
                <img className={styles.sidebarIcon} src={item.icon} alt="" />
                <img className={styles.sidebarIconActiveOpen} src={item.activeIcon} alt="" />
                <p className="mbZero">{item.name}</p>
              </div>
            ) : (
              <>
                <img className={styles.sidebarIcon} src={item.icon} alt="" />
                <img className={styles.sidebarIconActive} src={item.activeIcon} alt="" />
              </>
            )}
          </NavLink>
        ))}
      </div>
      {open ? (
        <div onClick={() => handleLogout()} className={styles.logoutDivOpen}>
          <img className={styles.sidebarIcon} src={logoutIcon} alt="" />
          <span style={{ color: 'white', fontSize: 16, fontWeight: 300 }}>Logout</span>
        </div>
      ) : (
        <div className={styles.logoutDivClose}>
          <img className={styles.sidebarIcon} src={logoutIcon} alt="" />
        </div>
      )}
    </div>
  );
};

export default SideBar;
