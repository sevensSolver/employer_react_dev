import { useState } from 'react';
import { Input, Modal, Table } from 'antd';
import { useNavigate } from 'react-router-dom';
import ColorRound from '../../../../Common/UIComponents/ColorRound';
import DescriptionsComponent from './Descriptions';

const OperatorAdminCenter = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [groupSelectedStatus, setGroupSelectedStatus] = useState();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const data = [];
  for (let i = 0; i < 6; i++) {
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

  const columns = [
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
          {status}
        </div>
      ),
      width: 70,
    },
  ];

  const clearGroupSelect = () => {
    setSelectedRowKeys([]);
    setSelectedRows([]);
    setGroupSelectedStatus();
  };

  let disableSelecting = selectedRows.length > 0 && selectedRows[0]?.status;

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedRowKeys(selectedRowKeys);
      setSelectedRows(selectedRows);
      setGroupSelectedStatus(selectedRows[0]?.status);
    },

    getCheckboxProps: (record) => {
      if (disableSelecting) {
        return {
          disabled: record.status === disableSelecting ? false : true,
          name: record.name,
        };
      }
    },
  };
  return (
    <>
      <div style={{ marginBottom: 60 }}>
        <DescriptionsComponent />
      </div>

      <span
        style={{
          marginBottom: 8,
        }}
      >
        {selectedRowKeys.length > 0 && `Selected ${selectedRowKeys.length} items`}
      </span>

      <Table
        rowKey="key"
        scroll={{
          y: 339,
        }}
        columns={columns}
        dataSource={data}
        pagination={false}
      />

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
    </>
  );
};

export default OperatorAdminCenter;
