import { Button } from 'antd';
import styles from './index.module.css';
import React from 'react';

const ColumnItem = ({ imgs, setIsModalVisible, setTitle }) => {
  const handleFilter = (item) => {
    setTitle(item);
    setIsModalVisible(true);
  };
  return imgs.map((item, index) => (
    <div key={index} className={styles.columnItem}>
      <div
        className="iconBackgroundBg"
        style={{ height: 60, width: 80, backgroundColor: '#f5f5f5' }}
      >
        <img src={item.img} alt="" style={{ height: 25 }} />
      </div>

      <div style={{ width: '100%' }}>
        <p className={styles.columnItemTitle}>{item.title}</p>
        <p style={{ fontWeight: 500, fontSize: 32, marginBottom: 10 }}>{item.count}</p>
        <Button
          style={{ width: 100 }}
          onClick={() => handleFilter(item.title)}
          size="small"
          type="primary"
          shape="round"
        >
          Filter
        </Button>
      </div>
    </div>
  ));
};

export default ColumnItem;
