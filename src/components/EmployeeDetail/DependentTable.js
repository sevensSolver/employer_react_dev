import { Table, Modal, notification } from 'antd';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { useParams } from 'react-router-dom';
import { BsThreeDots } from 'react-icons/bs';
import { Dropdown, Menu } from 'antd';
import { useDispatch } from 'react-redux';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import activateIcon from '../../img/default_activate_icon.png';
import deactivateIcon from '../../img/deactivate.png';
import { changeDepantStatus, deleteDepend } from '../../store/employeeDetails';
import ColorRound from '../Common/UIComponents/ColorRound';
import DocViewFragment from './DocViewFragment';
import { useState } from 'react';
import ViewDocsModal from './ViewDocsModal';
import deleteIcon from '../../img/delete.png';
import CopyToClipBoard from '../Common/UIComponents/CopyToClipBoard';

const AntTable = ({ dependents }) => {
  const dispatch = useDispatch();
  const param = useParams();
  const [currentDocs, setCurrentDocs] = useState([]);
  const [isDocVisible, setIsDocVisible] = useState(false);

  const handleChangeStatus = (id, status) => {
    dispatch(changeDepantStatus({ id, status, dispatch, pageId: param.id }));
  };

  const columns = [
    {
      title: 'Member No',
      dataIndex: 'member_number',
      render: (value) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <span> {value}</span>
          <div style={{ marginBottom: -4 }}>
            <CopyToClipBoard value={value} />
          </div>
        </div>
      ),
      width: 140,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      width: 100,
    },
    {
      title: 'Policy No',
      dataIndex: 'policy_number',
      width: 100,
    },
    {
      title: 'Relation',
      dataIndex: 'relation',
      width: 90,
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
      width: 100,
    },
    {
      title: 'Documents',
      dataIndex: 'documents',
      width: 110,
      render: (doc, docItem) =>
        docItem?.documents?.length === 1 ? (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={doc[0].url}
            style={{ display: 'flex', alignItems: 'center', gap: 3 }}
          >
            <HiOutlineDocumentText size={20} color="#f87d4e" />
            <span style={{ fontSize: 10 }}>View</span>
          </a>
        ) : (
          <DocViewFragment
            docs={docItem.documents}
            setCurrentDocs={setCurrentDocs}
            setIsDocVisible={setIsDocVisible}
          />
        ),
    },
    {
      dataIndex: 'id',
      render: (id, record) => (
        <Dropdown
          destroyPopupOnHide={true}
          trigger={['click']}
          overlay={() => menu({ id, status: record.status })}
        >
          <BsThreeDots size={18} color="#3ab44d" style={{ cursor: 'pointer' }} />
        </Dropdown>
      ),
      width: 90,
    },
  ];

  const menu = ({ id, status }) => {
    console.log('status', status);
    let statusChange = status === 'Active' ? 'Deactivate' : 'Activate';
    let statusParam = status === 'Active' ? 'Inactive' : 'Active';
    return (
      <Menu
        items={[
          {
            key: '1',
            label: 'Delete',
            icon: <img src={deleteIcon} alt="Nature" width="17" />,
            onClick: (e) => deleteConfirm(id),
          },
          {
            key: '1',
            label: statusChange,
            icon:
              statusParam === 'Active' ? (
                <img src={activateIcon} alt="Nature" width="17" />
              ) : (
                <img src={deactivateIcon} alt="Nature" width="17" />
              ),
            onClick: (e) => statusChangeConfirm(id, statusParam),
          },
        ]}
      />
    );
  };

  const deleteConfirm = (id) => {
    Modal.confirm({
      title: 'Deletion Confirmation?',
      icon: <ExclamationCircleOutlined />,
      content: 'Are you sure you want to delete this Dependent? This action cannot be undone',
      cancelButtonProps: { type: 'ghost' },
      okText: 'Delete',
      cancelText: 'Cancel',
      okType: 'danger',
      okButtonProps: {
        type: 'primary',
      },
      onOk: () => dispatch(deleteDepend({ id, dispatch, openNotificationWithIcon })),
      onCancel: () => console.log('cancel'),
    });
  };

  const statusChangeConfirm = (id, status) => {
    let labelTitle = status === 'Active' ? 'Activation' : 'Deactivation';
    let labelText = status === 'Active' ? 'Activate' : 'Deactivate';
    let labelTextTwo = status === 'Active' ? 'deactivate' : 're-activate';
    Modal.confirm({
      title: `${labelTitle} Confirmation?`,
      icon: <ExclamationCircleOutlined />,
      content: `Are you sure you want to ${labelText} the dependent? You can ${labelTextTwo} anytime later.`,
      okText: labelText,
      cancelText: 'Cancel',
      okType: labelText === 'Activate' ? 'primary' : 'danger',
      okButtonProps: {
        type: 'primary',
      },
      onOk: () => handleChangeStatus(id, status),
      onCancel: () => console.log('cancel'),
    });
  };

  const openNotificationWithIcon = (type, msg) => {
    notification[type]({
      message: msg,
    });
  };

  return (
    <>
      <ViewDocsModal
        docs={currentDocs}
        isDocVisible={isDocVisible}
        setIsDocVisible={setIsDocVisible}
      />
      <Table
        className="employeeDetailTable"
        columns={columns}
        dataSource={dependents}
        pagination={false}
        scroll={{
          y: 165,
        }}
      />
    </>
  );
};

export default AntTable;
