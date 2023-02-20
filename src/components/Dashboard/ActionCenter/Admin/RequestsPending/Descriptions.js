import React from 'react';
import { Badge, Descriptions } from 'antd';

const DescriptionsComponent = () => {
  return (
    <Descriptions
      title="Request Information"
      bordered
      labelStyle={{ backgroundColor: '#b3efbc' }}
      contentStyle={{ backgroundColor: 'white' }}
    >
      <Descriptions.Item label="Request ID">1810000000</Descriptions.Item>
      <Descriptions.Item label="Request Type">Deactivation</Descriptions.Item>
      <Descriptions.Item label="Request Date/Time">02/05/2023</Descriptions.Item>
      <Descriptions.Item label="Request status">Pending</Descriptions.Item>
      <Descriptions.Item label="Priority">High</Descriptions.Item>
    </Descriptions>
  );
};

export default DescriptionsComponent;
