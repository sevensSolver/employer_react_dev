import { useState } from 'react';
import { Input, Modal, Table } from 'antd';
import { useNavigate } from 'react-router-dom';
import ColorRound from '../../../../Common/UIComponents/ColorRound';
import DescriptionsComponent from './Descriptions';
import Main from '../../../../../template';

const EmployeeTable = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const data = [];
  for (let i = 0; i < 2; i++) {
    data.push({
      key: i,
      employee_identification_number: '3432423423423423',
      name: `Edward Showmen`,
      age: 32,
      email: 'lorem@gmail.com',
      nida: '4234232323',
      department: 'Marketing',
      status: 'Active',
      address: `London Park no. ${i}`,
    });
  }

  const columnsApproved = [
    {
      title: 'Identification No',
      dataIndex: 'employee_identification_number',
      width: 125,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      width: 120,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      width: 90,
      responsive: ['lg'],
    },
    {
      title: 'NIDA #',
      dataIndex: 'nida',
      width: 110,
    },
    {
      title: 'Department',
      dataIndex: 'department',
      width: 110,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (status) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <ColorRound status={status} />
          Approved
        </div>
      ),
      width: 70,
    },
  ];

  const columnsRejected = [
    {
      title: 'Identification No',
      dataIndex: 'employee_identification_number',
      width: 125,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      width: 120,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      width: 120,
      responsive: ['lg'],
    },
    {
      title: 'NIDA #',
      dataIndex: 'nida',
      width: 110,
    },
    {
      title: 'Department',
      dataIndex: 'department',
      width: 110,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (status) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <ColorRound status="red" />
          Rejected
        </div>
      ),
      width: 100,
    },
    {
      title: 'Comment',
      dataIndex: 'department',
      render: () => <div>Lorem lipsum lorem lipsum </div>,
      width: 150,
    },
  ];

  return (
    <Main>
      <div style={{ marginBottom: 60 }}>
        <DescriptionsComponent />
      </div>
      <div
        style={{
          backgroundColor: 'white',
          padding: 20,
          paddingBottom: 20,
          borderRadius: 10,
        }}
      >
        <Table
          rowKey="key"
          scroll={{
            y: 339,
          }}
          columns={columnsApproved}
          dataSource={data}
          pagination={false}
        />
      </div>

      <div
        style={{
          backgroundColor: 'white',
          padding: 20,
          marginTop: 30,
          paddingBottom: 20,
          borderRadius: 10,
        }}
      >
        <Table
          rowKey="key"
          onRow={(record) => {
            return {
              onClick: (e) => {
                if (
                  !e.target.innerText ||
                  e.target.className === 'ant-dropdown-menu-title-content'
                ) {
                  e.preventDefault();
                } else {
                  navigate(`/employees/${record.id}`);
                }
              },
            };
          }}
          scroll={{
            y: 339,
          }}
          columns={columnsRejected}
          dataSource={data}
          pagination={false}
        />
      </div>

      <Modal
        title="Reject Request"
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        okText="Submit"
      >
        <Input.TextArea
          style={{ height: 80, borderRadius: 10 }}
          placeholder="Reject with a comment"
        />
      </Modal>
    </Main>
  );
};

export default EmployeeTable;
