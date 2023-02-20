import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';

const TopNav = ({ options, width, setTab, tab }) => {
  return (
    <div
      className={styles.topNav}
      style={{
        width,
        marginBottom: 0,
      }}
    >
      {options.map((item, index) =>
        item === tab ? (
          <div
            key={index}
            style={{
              position: 'relative',
              height: 50,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}
          >
            <div
              style={{ paddingBottom: 6, color: '#3ab44d', cursor: 'pointer' }}
              className="activeTopNavLi"
              key={item}
            >
              {item}
            </div>
          </div>
        ) : (
          <div
            key={index}
            style={{
              position: 'relative',
              height: 50,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}
          >
            <div
              onClick={() => setTab(item)}
              style={{
                paddingBottom: 6,
                cursor: 'pointer',
                opacity: '60%',
              }}
              className="topNav"
              key={item}
            >
              {item}
            </div>
          </div>
        ),
      )}
    </div>
  );
};

export default TopNav;
