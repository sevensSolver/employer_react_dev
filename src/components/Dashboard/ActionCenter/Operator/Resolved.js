import { Table } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Pending = () => {
  const navigate = useNavigate();
  const data = [
    {
      requestID: '23423423',
      type: 'Activation',
      status: 'Pending',
      priority: 'High',
      date: '20-12-2022',
      assigned: 'Jhon leo',
    },
    {
      requestID: '23423423',
      type: 'Activation',
      status: 'Pending',
      priority: 'High',
      date: '20-12-2022',
      assigned: 'Jhon leo',
    },

    {
      requestID: '23423423',
      type: 'Activation',
      status: 'Pending',
      priority: 'High',
      date: '20-12-2022',
      assigned: 'Jhon leo',
    },
    {
      requestID: '23423423',
      type: 'Activation',
      status: 'Pending',
      priority: 'High',
      date: '20-12-2022',
      assigned: 'Jhon leo',
    },

    {
      requestID: '23423423',
      type: 'Activation',
      status: 'Pending',
      priority: 'High',
      date: '20-12-2022',
      assigned: 'Jhon leo',
    },
  ];

  const columns = [
    {
      title: 'Request ID',
      dataIndex: 'requestID',
      render: () => <div>4322323</div>,
      width: 90,
    },
    {
      title: 'Request Type',
      dataIndex: 'type',
      width: 80,
    },
    {
      title: 'Assigned To',
      dataIndex: 'assigned',
      width: 90,
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
      width: 70,
    },
    {
      title: 'Request Time',
      dataIndex: 'date',
      width: 100,
    },
    {
      title: 'Action',
      render: () => <div>Deletion</div>,
      width: 90,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      width: 90,
    },
  ];
  return (
    <Table
      className="dashBoardTable"
      columns={columns}
      dataSource={data}
      pagination={false}
      onRow={() => {
        return {
          onClick: (e) => {
            if (!e.target.innerText || e.target.className === 'ant-dropdown-menu-title-content') {
              e.preventDefault();
            } else {
              navigate('/operator-request/resolved');
            }
          },
        };
      }}
      scroll={{
        y: 300,
      }}
    />
  );
};

export default Pending;
