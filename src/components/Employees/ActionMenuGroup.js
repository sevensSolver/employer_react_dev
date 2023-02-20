import { Modal, notification, Button, Dropdown, Menu } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import { useDispatch } from 'react-redux';
import activateIcon from '../../img/default_activate_icon.png';
import deactivateIcon from '../../img/deactivate.png';
import deleteIcon from '../../img/delete.png';
import { groupDeleteEmployee, groupStatusChange } from '../../store/employees';

let { role } = JSON.parse(localStorage.getItem('hrUser'));

const ActionMenu = ({ status, tab, groupIds, clearGroupSelect, setIsModalOpen }) => {
  const dispatch = useDispatch();

  const statusConfirm = (id, statusParam) => {
    let labelTitle = statusParam === 'Active' ? 'Activation' : 'Deactivation';
    let labelText = statusParam === 'Active' ? 'Activate' : 'Deactivate';
    Modal.confirm({
      title: `${labelTitle} Confirmation?`,
      icon: <ExclamationCircleOutlined />,
      content: `Are you sure you want to ${labelText} selected Employees?`,
      okText: labelText,
      okType: labelText === 'Activate' ? 'primary' : 'danger',
      okButtonProps: {
        type: 'primary',
      },
      cancelText: 'Cancel',
      onOk: () => {
        dispatch(
          groupStatusChange({
            id,
            status: statusParam,
            openNotificationWithIcon,
            table: tab.key,
          }),
          clearGroupSelect(),
        );
      },
      onCancel: () => console.log('cancel'),
    });
  };

  const deleteConfirmGroup = (ids) => {
    Modal.confirm({
      title: 'Deletion Confirmation?',
      icon: <ExclamationCircleOutlined />,
      cancelText: 'Cancel',
      content:
        'Are you sure you want to delete the selected Employees? This action cannot be undone',
      okType: 'danger',
      okText: 'Delete',
      okButtonProps: {
        type: 'primary',
      },
      onOk: () => {
        dispatch(groupDeleteEmployee({ ids, dispatch, openNotificationWithIcon }));
        clearGroupSelect();
      },
    });
  };

  const openNotificationWithIcon = (type, msg) => {
    notification[type]({
      message: msg,
    });
  };

  const menu = ({ groupIds, status }) => {
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
              key: '2',
              label: 'Delete',
              icon: <img src={deleteIcon} alt="Nature" width="17" />,
              onClick: (e) => deleteConfirmGroup(groupIds),
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
              onClick: () => statusConfirm(groupIds, statusParam),
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
      overlay={() => menu({ groupIds, status })}
    >
      <Button id="actionCell" shape="round" size="small" type="dashed">
        Action
      </Button>
    </Dropdown>
  );
};

export default ActionMenu;
