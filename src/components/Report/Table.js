import { Table, Tag } from 'antd';
import { HiOutlineDocumentText } from 'react-icons/hi';
import ColorRound from '../Common/UIComponents/DynamicColorRound';

const ReportTable = ({ state }) => {
  let actions = ['Add employee', 'Remove employee', 'Add dependent', 'Remove dependent'];

  let names = ['Clifford Kop', 'Bend Errick', 'Laurie Bond', 'Jim McAfee'];

  let responsible = ['Alex Rodger', 'Dora Plaisted', 'Laurie Bond', 'Jim McAfee'];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: () => names[Math.floor(Math.random() * 4)],
      width: 90,
    },
    {
      title: 'Activity',
      dataIndex: 'name',
      render: () => <div>Lorem</div>,
      width: 80,
      responsive: ['lg'],
    },
    {
      title: 'Request Date',
      dataIndex: 'name',
      render: () => '2022-10-12',
      width: 90,
    },
    {
      title: 'Responsible',
      dataIndex: 'name',
      render: () => responsible[Math.floor(Math.random() * 4)],
      width: 90,
      responsive: ['md'],
    },
    {
      title: ' Date',
      dataIndex: 'name',
      render: () => '2022-11-12',
      width: 90,
    },
    {
      title: 'Evidence',
      dataIndex: 'Documents',
      width: 100,
      render: (text) => (
        <a
          href="http://www.africau.edu/images/default/sample.pdf"
          target="_blank"
          style={{ display: 'flex' }}
          rel="noreferrer"
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <HiOutlineDocumentText size={30} color="#f87d4e" />
            <p style={{ fontSize: 8, marginBottom: 0 }}>
              Request <br /> form
            </p>
          </div>
        </a>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (status) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <ColorRound color="green" />
          {status}
        </div>
      ),
      width: 100,
    },
  ];
  const data = [];

  for (let i = 0; i < 6; i++) {
    data.push({
      id: i,
      key: i,
      name: 'John Joseph',
      memberNumber: '#45454',
      phone: '09343432348',
      documents: [],
      moreInfo: 'More info',
      approve: 'Approve',
      reject: 'Reject',
      status: 'Pending',
    });
  }

  return (
    <div className="policy">
      <Table className="policyTable" columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};

export default ReportTable;
