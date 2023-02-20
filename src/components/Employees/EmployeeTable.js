import { useEffect, useState } from 'react';
import { Table } from 'antd';
import { FilterFilled } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ColorRound from '../Common/UIComponents/ColorRound';
import CustomDropDown from '../Common/UIComponents/StatusDropDown';
import { getEmployeesWithFilter, getEmployeesWithPolicyType } from '../../store/employees';
import ActionMenu from './ActionMenu';
import ActionMenuGroup from './ActionMenuGroup';
import SelectAdmin from './SelectAdmin';

let policyTypes = [
  { text: 'Gold' },
  { text: 'Platinum_Plus' },
  { text: 'Platinum' },
  { text: 'Bronze' },
  { text: 'Silver' },
  { text: 'All' },
];

const EmployeeTable = ({ content, loading, page, tab, setPage, filterState, setFilter }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [groupSelectedStatus, setGroupSelectedStatus] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clearGroupSelect = () => {
    setSelectedRowKeys([]);
    setSelectedRows([]);
    setGroupSelectedStatus();
  };

  console.log('isModalOpen', isModalOpen);

  useEffect(() => {
    if (filterState === 'All') {
      dispatch(getEmployeesWithFilter({ page, size: 6, filter: tab.key }));
    } else {
      dispatch(
        getEmployeesWithPolicyType({
          page,
          size: 6,
          policyType: filterState,
          filter: tab.key,
        }),
      );
    }
  }, [dispatch, filterState, page, tab]);

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
      width: 100,
      responsive: ['lg'],
    },
    {
      title: 'NIDA #',
      dataIndex: 'nida',
      width: 110,
    },
    {
      title: 'Policy Type',

      filterDropdown: () => (
        <CustomDropDown setPage={setPage} statusArr={policyTypes} setFilter={setFilter} />
      ),
      filterIcon: () => <FilterFilled type="filter" style={{ color: 'green' }} />,
      dataIndex: 'policy_type',
      width: 110,
      responsive: ['md'],
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
    {
      dataIndex: 'id',
      title: () =>
        selectedRowKeys.length > 0 && (
          <ActionMenuGroup
            clearGroupSelect={clearGroupSelect}
            groupIds={selectedRowKeys}
            status={groupSelectedStatus}
            setIsModalOpen={setIsModalOpen}
            group={true}
            tab={tab}
          />
        ),
      render: (id, record) => {
        return (
          !selectedRowKeys.includes(id) && (
            <ActionMenu id={id} setIsModalOpen={setIsModalOpen} status={record.status} tab={tab} />
          )
        );
      },
      width: 90,
    },
  ];

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
      <span
        style={{
          marginBottom: 8,
        }}
      >
        {selectedRowKeys.length > 0 && `Selected ${selectedRowKeys.length} items`}
      </span>
      <Table
        loading={loading}
        rowKey="id"
        onRow={(record, rowIndex) => {
          let statusLabel = record.status === 'Inactive' ? 'Activate' : 'Deactivate';
          return {
            onClick: (e) => {
              if (!e.target.innerText || e.target.className === 'ant-dropdown-menu-title-content') {
                e.preventDefault();
              } else {
                navigate(`/employees/${record.id}`);
              }
            },
          };
        }}
        rowSelection={{
          type: 'checkbox',
          preserveSelectedRowKeys: true,
          ...rowSelection,
          selectedRowKeys: selectedRowKeys,
        }}
        columns={columns}
        dataSource={content}
        pagination={false}
      />
      <SelectAdmin
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        clearGroupSelect={clearGroupSelect}
      />
    </>
  );
};

export default EmployeeTable;
