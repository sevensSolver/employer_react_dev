import { Modal, notification, Dropdown, Menu } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { BsThreeDots, BsStop } from 'react-icons/bs';
import { FcApproval, FcCancel } from 'react-icons/fc';

import { useDispatch } from 'react-redux';

let { role } = JSON.parse(localStorage.getItem('hrUser'));

const ActionMenu = ({ status, id, tab, setIsModalOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const statusConfirm = (id, statusParam) => {
    let labelTitle = statusParam === 'Active' ? 'Activation' : 'Deactivation';
    let labelText = statusParam === 'Active' ? 'Activate' : 'Deactivate';
    Modal.confirm({
      title: `${labelTitle} Confirmation?`,
      icon: <ExclamationCircleOutlined />,
      content: `Are you sure you want to ${labelText} this Employee?`,
      okText: labelText,
      okType: labelText === 'Activate' ? 'primary' : 'danger',
      okButtonProps: {
        type: 'primary',
      },
      cancelText: 'Cancel',
    });
  };

  const deleteConfirm = (id) => {
    Modal.confirm({
      title: 'Deletion Confirmation?',
      icon: <ExclamationCircleOutlined />,
      cancelText: 'Cancel',
      content: 'Are you sure you want to delete this Employee? This action cannot be undone',
      okType: 'danger',
      okText: 'Delete',
      okButtonProps: {
        type: 'primary',
      },
    });
  };

  const openNotificationWithIcon = (type, msg) => {
    notification[type]({
      message: msg,
    });
  };

  const menu = ({ id }) => {
    return (
      <Menu
        items={[
          {
            key: '1',
            label: 'Approve',
            icon: <FcApproval size={20} />,
            onClick: () => statusConfirm(id),
          },
          {
            type: 'divider',
          },
          {
            key: '2',
            label: 'Reject',
            icon: <FcCancel size={20} />,
            onClick: () => setIsModalOpen(true),
          },
        ]}
      />
    );
  };

  return (
    <Dropdown
      id="actionCell"
      destroyPopupOnHide={true}
      trigger={['click']}
      overlay={() => menu({ id, status })}
    >
      <BsThreeDots id="actionCell" size={18} color="#3ab44d" />
    </Dropdown>
  );
};

export default ActionMenu;
