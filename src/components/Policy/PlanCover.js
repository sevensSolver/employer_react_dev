import React from 'react';
import { Button, Collapse, Divider } from 'antd';
import { FullscreenOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { arr } from '../../utils/planCover';
import { PlusOutlined, MinusOutlined, CaretDownOutlined } from '@ant-design/icons';

import styles from './index.module.css';

const PlanCover = ({ state }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState(false);

  const { Panel } = Collapse;

  const handleFullScreen = (title) => {
    setIsModalOpen(true);
    setTitle(title);
  };

  function CustomHeader({ children }) {
    return (
      <div
        style={{
          color: '#646464',
        }}
      >
        {children}
      </div>
    );
  }

  return (
    <div className={styles.planCover}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <p
          style={{
            marginBottom: 10,
            fontSize: 14,
          }}
        >
          Plan Covers
        </p>
        <div>
          <p style={{ fontWeight: 600 }}>{state?.policy_type}</p>
        </div>
      </div>

      <div
        style={{
          borderRadius: 30,
          maxHeight: '30vh',
          overflowY: 'scroll',
        }}
      >
        <Collapse
          bordered={false}
          accordion
          expandIcon={() => <PlusOutlined style={{ fontSize: 20, color: '#5ac068' }} />}
          collapsible={({ isActive }) => console.log(isActive)}
          style={{
            backgroundColor: 'inherit',
          }}
        >
          {arr.map((item, index) => (
            <Panel header={item.name} key={index}>
              {item.details?.map((detailItem, index) => (
                <Collapse key={index}>
                  <Panel
                    style={{
                      backgroundColor: 'inherit',
                    }}
                    header={<CustomHeader>{detailItem.title}</CustomHeader>}
                    className={styles.antCollapseBox}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 21 }}>
                      {detailItem.points.map((item, index) => (
                        <div key={index}>
                          <div style={{ fontWeight: 500 }}>{item.name}</div>
                          <div style={{ color: '#646464' }}>{item.value}</div>
                        </div>
                      ))}
                    </div>
                  </Panel>
                </Collapse>
              ))}
            </Panel>
          ))}
        </Collapse>
      </div>
    </div>
  );
};

export default PlanCover;
