import { Button, Checkbox, Divider, Modal, notification } from 'antd';
import { ExclamationCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import styles from './index.module.css';
import { groupDeleteEmployee, groupStatusChange } from '../../store/employees';
import { useDispatch } from 'react-redux';

const SelectAdmin = ({ isModalOpen, setIsModalOpen, clearGroupSelect, tab, action }) => {
  const dispatch = useDispatch();
  let adminsArray = [
    {
      profilePic:
        'https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png',
      name: 'Sara Elizabath',
    },
    {
      profilePic:
        'https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png',
      name: 'Sara Elizabath',
    },
    {
      profilePic:
        'https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png',
      name: 'Sara Elizabath',
    },
    {
      profilePic:
        'https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png',
      name: 'Sara Elizabath',
    },
  ];

  const handleSubmit = () => {
    setIsModalOpen(false);

    if (action === 'Delete') {
      deleteConfirmGroup();
    }
    if (action === 'Status') {
      statusConfirm();
    }
  };

  const deleteConfirmGroup = (id) => {
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
        dispatch(groupDeleteEmployee({ id, dispatch, openNotificationWithIcon }));
        clearGroupSelect();
      },
    });
  };

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
    });
  };

  const openNotificationWithIcon = (type, msg) => {
    notification[type]({
      message: msg,
    });
  };

  return (
    <Modal
      className="AdminSelectModal"
      open={isModalOpen}
      onOk={() => setIsModalOpen(!isModalOpen)}
      okText="Request"
      onCancel={() => setIsModalOpen(false)}
      width={500}
      footer={null}
    >
      <div className={styles.selectAdmin}>
        <CloseCircleOutlined style={{ position: 'absolute', right: 20, top: 20 }} />
        <div className={styles.selectAdminBox}>
          <h4 style={{ fontSize: 16, fontWeight: 600 }}>Select Admin</h4>
          <Divider />
          <div className={styles.selectAdminList}>
            {adminsArray.map((item, index) => (
              <div key={index} className={styles.adminItem}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <img
                    style={{ width: 39, height: 39, borderRadius: '20%' }}
                    src={item.profilePic}
                    alt=""
                  />
                  <p className="mbZero">{item.name}</p>
                </div>
                <Checkbox />
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 5, marginTop: 35, justifyContent: 'flex-end' }}>
            <Button onClick={() => setIsModalOpen(false)} shape="round">
              Cancel
            </Button>
            <Button onClick={() => handleSubmit()} shape="round" type="primary">
              Request
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SelectAdmin;
