import React, { useState } from 'react';
import { Button, Divider, notification, Modal, Spin } from 'antd';
import shareIcon from '../../img/share.png';
import messageIcon from '../../img/message.png';
import profilePic from '../../img/user_default_icon.png';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { changeProfileStatus } from '../../store/employeeDetails';
import { CameraOutlined } from '@ant-design/icons';
import styles from './index.module.css';
import CopyToClipBoard from '../Common/UIComponents/CopyToClipBoard';
import { BsTelephone } from 'react-icons/bs';

import axios from 'axios';
import { baseUrl } from '../../utils';

const ProfileSection = ({ state, loading }) => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState();
  const dispatch = useDispatch();
  const { id } = useParams();

  const handlePicture = async (file) => {
    let imageDataUrl = await readFile(file);
    setSelectedFile(imageDataUrl);
    let formData = new FormData();
    formData.append('profile_pic', file);

    try {
      const response = await axios({
        method: 'PATCH',
        url: `${baseUrl}/employer/employee/${id}/profile-photo-upload`,
        data: formData,
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${localStorage.getItem('hr-auth-token')}`,
        },
      });
      openNotificationWithIcon('success', response.data.message);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  function readFile(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener('load', () => resolve(reader.result), false);
      reader.readAsDataURL(file);
    });
  }

  let statusParam = state?.status === 'Inactive' ? 'Active' : 'Inactive';
  let statusLabel = state?.status === 'Inactive' ? 'Activate' : 'Deactivate';

  const statusConfirm = () => {
    Modal.confirm({
      title: 'Status Change',
      icon: <ExclamationCircleOutlined />,
      content: 'Are you sure want to change the status ?',
      okType: 'ghost',
      okText: 'Okay',
      cancelText: 'Cancel',
      onOk: () =>
        dispatch(
          changeProfileStatus({
            id,
            status: statusParam,
            openNotificationWithIcon,
          }),
        ),
      onCancel: () => console.log('cancel'),
    });
  };

  const openNotificationWithIcon = (type, msg) => {
    notification[type]({
      message: msg,
    });
  };

  const downloadEmployeeProfile = (type, name) => {};

  const employeeInfo = [
    { label: 'Identification No.', key: 'employee_identification_number' },
    { label: 'NIDA/Passport No.', key: 'nida' },
    { label: 'Member No.', key: 'member_number' },
    { label: 'Policy No.', key: 'policy_number' },
  ];

  const personalInfo = [
    { label: 'Gender', key: 'gender' },
    { label: 'Date of Birth', key: 'date_of_birth' },
    { label: 'Department', key: 'department' },
    { label: 'Date of Joining', key: 'date_of_joining' },
  ];

  return (
    <div className="employeeDetail">
      <div className={styles.employeeProfileBox}>
        {loading ? (
          <div style={{ display: 'grid', placeItems: 'center', height: '100%' }}>
            <Spin />
          </div>
        ) : (
          <>
            <div
              className={styles.statusBoxProfile}
              style={{
                backgroundColor:
                  state?.status === 'Pending'
                    ? '#FEC828'
                    : state?.status === 'Active'
                    ? '#3ab44d'
                    : 'red',
              }}
            >
              {state?.status}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              <div className={styles.logoDiv}>
                <img
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                  }}
                  src={
                    selectedFile
                      ? selectedFile
                      : state?.files?.profile_pic?.url
                      ? state?.files.profile_pic.url
                      : profilePic
                  }
                  alt=""
                />
                <label className={styles.cameraIcon}>
                  <input
                    onChange={(e) => handlePicture(e.target.files[0])}
                    style={{ display: 'none' }}
                    type="file"
                    id="img"
                    name="img"
                    accept="image/*"
                  />
                  <CameraOutlined style={{ color: 'black' }} />
                </label>
              </div>

              <div>
                <p style={{ fontWeight: 600, fontSize: 22 }} className="mbZero">
                  {state?.name}
                </p>

                <div style={{ display: 'flex', gap: 8 }}>
                  <div
                    style={{ height: 24, width: 24, backgroundColor: '#fcd34d' }}
                    className="iconBackgroundBg"
                  >
                    <a href={`mailto:${state?.email}`}>
                      <img style={{ height: 15, cursor: 'pointer' }} src={messageIcon} alt="" />
                    </a>
                  </div>

                  <div
                    style={{ height: 24, width: 24, backgroundColor: '#fcd34d' }}
                    className="iconBackgroundBg"
                  >
                    <img
                      onClick={() => downloadEmployeeProfile('pdf', 'employee')}
                      style={{ height: 15 }}
                      src={shareIcon}
                      alt=""
                    />
                  </div>
                  <div
                    style={{ height: 24, width: 24, backgroundColor: '#fcd34d' }}
                    className="iconBackgroundBg"
                  >
                    <a href={`tel:${state?.contact_number}`}>
                      <BsTelephone size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* profile info */}
            <div>
              {employeeInfo.map((item, index) => (
                <div key={index} className={styles.profileInfo}>
                  <p style={{ fontSize: 16, marginBottom: 10 }}>{item.label}</p>
                  <div className="dfaCenter">
                    <span style={{ fontSize: 16, color: '#737373' }}>{state?.[item.key]}</span>
                    <CopyToClipBoard value={state?.[item.key]} />
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p style={{ color: '#737373' }}>Other information</p>
              {personalInfo.map((item, index) => (
                <div key={index} className={styles.profileInfo}>
                  <p style={{ fontSize: 16, marginBottom: 10 }}>{item.label}</p>
                  <div className="dfaCenter">
                    <span style={{ fontSize: 16, color: '#737373' }}>{state?.[item.key]}</span>
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                width: '100%',
                marginBottom: 20,
                marginTop: 10,
              }}
            >
              <Button
                onClick={() => navigate(`/employees/edit/${id}`)}
                style={{ width: '40%', color: 'black' }}
                type="primary"
                ghost
                shape="round"
              >
                Edit info
              </Button>

              <Button
                onClick={() => statusConfirm()}
                style={{
                  width: '40%',
                  color: 'white',
                  backgroundColor: statusLabel === 'Activate' ? '#3ab44d' : '#EF4444',
                }}
                type="text"
                shape="round"
              >
                {statusLabel}
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileSection;
