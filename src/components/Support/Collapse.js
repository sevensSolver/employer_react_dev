import { data } from './claim';
import { Collapse } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';
import styles from './index.module.css';
const { Panel } = Collapse;

const CollapseComponent = () => {
  const renderItem = (item) => {
    return (
      <ul style={{ marginBottom: 0 }}>
        <li style={{ color: 'gray' }}>{item.answer}</li>
      </ul>
    );
  };

  return (
    <Collapse
      expandIcon={() => <PlusOutlined style={{ fontSize: 20, color: '#5ac068' }} />}
      accordion
      expandIconPosition="end"
      bordered={false}
      style={{
        background: 'inherit',
      }}
    >
      {data?.map((item) => (
        <Panel header={item.question} key={item.id} className={styles.antCollapseBox}>
          {item.answers.map(
            (item) => renderItem(item),
            // <p style={{ marginLeft: 33, color: "gray" }}>{item.answer}</p>
          )}
        </Panel>
      ))}
    </Collapse>
  );
};

export default CollapseComponent;
