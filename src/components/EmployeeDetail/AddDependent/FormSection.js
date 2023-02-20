/* eslint-disable quotes */
import { Form, Select, Input, Upload, Button, notification } from 'antd';
import { useDispatch } from 'react-redux';
import styles from './index.module.css';
import { employeeAddDependant } from '../../../store/employeeDetails';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import FileUploads from './FileUploads';
import { validateEmptySpace } from '../../Common/UtilFunctions';
const { Option } = Select;

const FormSection = ({ form, state }) => {
  const [files, setFiles] = useState();

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFinish = (value) => {
    let updatedData = {
      ...value,
      employee_id: id,
    };

    let formData = new FormData();
    files.map((item) => formData.append('files', item));
    formData.append('dependent', JSON.stringify(updatedData));

    dispatch(
      employeeAddDependant({
        formData,
        notification: openNotificationWithIcon,
        navigate,
        id,
      }),
    );
  };

  const openNotificationWithIcon = (type, msg) => {
    notification[type]({
      message: type === 'success' ? 'Dependent Added successfully' : 'Error Adding Employee',
      description: msg,
    });
  };

  return (
    <>
      <Form style={{ width: '70%' }} initialValues={state} form={form} onFinish={handleFinish}>
        <p
          style={{
            textDecoration: 'underline',
            color: 'gray',
            marginBottom: 13,
          }}
        >
          Dependent Info
        </p>
        <div className={styles.formDiv}>
          <div className={styles.formitem}>
            <span className={styles.formLabell}>
              First Name <span style={{ color: '#f87d4e' }}>*</span>
            </span>
            <Form.Item rules={[validateEmptySpace]} name="first_name">
              <Input
                style={{ borderRadius: 10 }}
                placeholders="Provider name"
                className="ant-custom-input"
              />
            </Form.Item>
          </div>
          <div className={styles.formitem}>
            <span className={styles.formLabell}>
              Last Name <span style={{ color: '#f87d4e' }}>*</span>
            </span>
            <Form.Item rules={[validateEmptySpace]} name="last_name">
              <Input
                style={{ borderRadius: 10 }}
                placeholders="Provider name"
                className="ant-custom-input"
              />
            </Form.Item>
          </div>
        </div>

        <div className={styles.formDiv}>
          <div className={styles.formitem}>
            <span className={styles.formLabell}>
              Gender <span style={{ color: '#f87d4e' }}>*</span>
            </span>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: 'Required',
                },
              ]}
              name="gender"
            >
              <Select onChange={() => console.log()}>
                <Option value="Male">Male</Option>
                <Option value="Female">Female</Option>
              </Select>
            </Form.Item>
          </div>

          <div className={styles.formitem}>
            <span className={styles.formLabell}>Email</span>
            <Form.Item name="email">
              <Input
                style={{ borderRadius: 10 }}
                placeholders="Provider name"
                className="ant-custom-input"
              />
            </Form.Item>
          </div>
        </div>

        <div className={styles.formDiv}>
          <div className={styles.formitem}>
            <span className={styles.formLabell}>
              Relation <span style={{ color: '#f87d4e' }}>*</span>
            </span>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: 'Required',
                },
              ]}
              name="relation"
            >
              <Select>
                <Option value="Spouse">Spouse</Option>
                <Option value="Child">Child</Option>
              </Select>
            </Form.Item>
          </div>

          <div className={styles.formitem}>
            <span className={styles.formLabell}>
              Contact No <span style={{ color: '#f87d4e' }}>*</span>
            </span>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: 'Required',
                },
              ]}
              name="contact_number"
            >
              <Input
                accept="number"
                min="0"
                type="number"
                style={{ borderRadius: 10 }}
                placeholders="Provider name"
                className="ant-custom-input"
              />
            </Form.Item>
          </div>
        </div>

        <div>
          <p
            style={{
              textDecoration: 'underline',
              color: 'gray',
              marginBottom: 13,
              marginTop: 40,
            }}
          >
            Attach the proof for Dependent
          </p>
          <FileUploads disabled={false} setFiles={setFiles} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Form.Item>
            <Button
              disabled={!files?.length}
              style={{ marginTop: 30 }}
              shape="round"
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </div>
      </Form>
    </>
  );
};

export default FormSection;
