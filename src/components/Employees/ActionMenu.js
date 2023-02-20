import { Modal, notification, Dropdown, Menu } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { BsThreeDots } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import activateIcon from '../../img/default_activate_icon.png';
import deactivateIcon from '../../img/deactivate.png';
import editIcon from '../../img/edit.png';
import deleteIcon from '../../img/delete.png';
import { changeEmployeeStatus, deleteEmployee } from '../../store/employees';

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
      onOk: () =>
        dispatch(
          changeEmployeeStatus({
            id,
            status: statusParam,
            openNotificationWithIcon,
            table: tab.key,
          }),
        ),
      onCancel: () => console.log('cancel'),
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

      onOk: () => dispatch(deleteEmployee({ id, dispatch, openNotificationWithIcon })),
    });
  };

  const openNotificationWithIcon = (type, msg) => {
    notification[type]({
      message: msg,
    });
  };

  const menu = ({ id, status }) => {
    let statusLabel = status === 'Inactive' ? 'Activate' : 'Deactivate';
    let statusParam = status === 'Inactive' ? 'Active' : 'Inactive';
    let checkedParam = status === 'Inactive' ? 'Activation' : 'Deactivation';

    if (role === 'Operator') {
      return (
        <Menu
          items={[
            {
              key: '1',
              label: 'Request for Deletion',
              icon: <img src={deleteIcon} alt="Nature" width="17" />,
              onClick: () => setIsModalOpen(true),
            },
            {
              type: 'divider',
            },
            {
              key: '2',
              label: `Request for ${checkedParam}`,
              icon:
                statusParam === 'Active' ? (
                  <img src={activateIcon} alt="Nature" width="17" />
                ) : (
                  <img src={deactivateIcon} alt="Nature" width="17" />
                ),
              onClick: () => setIsModalOpen(true),
            },
          ]}
        />
      );
    } else {
      return (
        <Menu
          items={[
            {
              key: '1',
              label: 'Edit',
              icon: <img src={editIcon} alt="Nature" width="17" />,
              onClick: () => navigate(`/employees/edit/${id}`),
            },
            {
              type: 'divider',
            },
            {
              key: '2',
              label: 'Delete',
              icon: <img src={deleteIcon} alt="Nature" width="17" />,
              onClick: (e) => deleteConfirm(id),
            },
            {
              type: 'divider',
            },
            {
              key: '3',
              label: statusLabel,
              icon:
                statusParam === 'Active' ? (
                  <img src={activateIcon} alt="Nature" width="17" />
                ) : (
                  <img src={deactivateIcon} alt="Nature" width="17" />
                ),
              onClick: () => statusConfirm(id, statusParam),
            },
          ]}
        />
      );
    }
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
