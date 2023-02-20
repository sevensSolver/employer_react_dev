import React, { useState } from 'react';
import { Button, Form, Input, notification, Select, DatePicker } from 'antd';
import styles from './index.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { validateEmptySpace } from '../../Common/UtilFunctions';
import moment from 'moment';
import axios from 'axios';
import { baseUrl } from '../../../utils';

const { Option } = Select;

const EditEmployee = ({ data }) => {
  const [form] = Form.useForm();
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    let updatedValue = {
      ...values,
      date_of_birth: moment(values?.date_of_birth).format('YYYY-MM-DD'),
      date_of_joining: moment(values?.date_of_joining).format('YYYY-MM-DD'),
    };

    try {
      const response = await axios({
        method: 'PATCH',
        data: updatedValue,
        url: `${baseUrl}/employer/employee/${id}/profile`,
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${localStorage.getItem('hr-auth-token')}`,
        },
      });
      openNotificationWithIcon('success', response.data.message);
      navigate(`/employees/${id}`);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const openNotificationWithIcon = (type, msg) => {
    notification[type]({
      message: type === 'success' ? 'Profile Updated successfully' : 'Error Updating Profile',
      description: msg,
    });
  };

  const {
    first_name,
    last_name,
    email,
    nida,
    level,
    gender,
    contact_number,
    date_of_birth,
    date_of_joining,
    department,
    employee_identification_number,
  } = data;

  const initialValues = {
    first_name,
    last_name,
    email,
    nida,
    level,
    gender,
    contact_number,
    date_of_birth: date_of_birth && moment(date_of_birth),
    date_of_joining: moment(date_of_joining),
    department,
    employee_identification_number,
  };

  function isLessThan18Years(date) {
    const eighteenYearsAgo = new Date();
    eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
    return date < eighteenYearsAgo;
  }

  return (
    <div>
      <div style={{ width: '70%', marginTop: 35, marginLeft: 80 }}>
        <Form form={form} name="basic" onFinish={onFinish} initialValues={initialValues}>
          <div className={styles.formDiv}>
            <div className={styles.formItem}>
              <span>
                First Name <span style={{ color: '#f87d4e' }}>*</span>
              </span>
              <Form.Item rules={[validateEmptySpace]} name="first_name">
                <Input size="large" style={{ borderRadius: 10 }} className="ant-custom-input" />
              </Form.Item>
            </div>
            <div className={styles.formItem}>
              <span>
                Last Name <span style={{ color: '#f87d4e' }}>*</span>
              </span>
              <Form.Item rules={[validateEmptySpace]} name="last_name">
                <Input size="large" style={{ borderRadius: 10 }} className="ant-custom-input" />
              </Form.Item>
            </div>
          </div>

          <div className={styles.formDiv}>
            <div className={styles.formItem}>
              <span>
                Email<span style={{ color: '#f87d4e' }}>*</span>
              </span>
              <Form.Item
                rules={[
                  {
                    required: true,
                    pattern: /\S+@\S+\.\S+/,
                    message: 'Enter a valid email address!',
                  },
                ]}
                name="email"
              >
                <Input
                  type="email"
                  size="large"
                  style={{ borderRadius: 10 }}
                  className="ant-custom-input"
                />
              </Form.Item>
            </div>
            <div className={styles.formItem}>
              <span>
                Gender <span style={{ color: '#f87d4e' }}>*</span>
              </span>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: 'Field cannot be empty',
                  },
                ]}
                name="gender"
              >
                <Select size="large">
                  <Option value="Male">Male</Option>
                  <Option value="Female">Female</Option>
                </Select>
              </Form.Item>
            </div>
          </div>
          <div className={styles.formDiv}>
            <div className={styles.formItem}>
              <span>
                Level <span style={{ color: '#f87d4e' }}>*</span>
              </span>
              <Form.Item name="level">
                <Input size="large" style={{ borderRadius: 10 }} className="ant-custom-input" />
              </Form.Item>
            </div>
            <div className={styles.formItem}>
              <span>
                Department <span style={{ color: '#f87d4e' }}>*</span>
              </span>
              <Form.Item name="department">
                <Input size="large" style={{ borderRadius: 10 }} className="ant-custom-input" />
              </Form.Item>
            </div>
          </div>
          <div className={styles.formDiv}>
            <div className={styles.formItem}>
              <span>
                Identification Number <span style={{ color: '#f87d4e' }}>*</span>
              </span>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: 'Field cannot be empty',
                  },
                ]}
                name="employee_identification_number"
              >
                <Input
                  accept="number"
                  min="0"
                  type="number"
                  size="large"
                  style={{ borderRadius: 10 }}
                  placeholders="employee_identification_number"
                  className="ant-custom-input"
                />
              </Form.Item>
            </div>
            <div className={styles.formItem}>
              <span>
                NIDA <span style={{ color: '#f87d4e' }}>*</span>
              </span>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: 'Required',
                  },
                ]}
                name="nida"
              >
                <Input
                  min="0"
                  type="number"
                  step="1"
                  pattern="\d+"
                  size="large"
                  style={{ borderRadius: 10 }}
                  className="ant-custom-input"
                />
              </Form.Item>
            </div>
          </div>

          <div className={styles.formDiv}>
            <div className={styles.formItem}>
              <span>
                Date of Birth <span style={{ color: '#f87d4e' }}>*</span>
              </span>
              <Form.Item
                rules={[
                  {
                    validator(item, value) {
                      const dateOfBirth = new Date(value); // December 15, 2004
                      const isUnder18 = isLessThan18Years(dateOfBirth);
                      if (isUnder18) {
                        return Promise.resolve();
                      } else {
                        return Promise.reject(new Error('Age should be atleast 18'));
                      }
                    },
                  },
                ]}
                name="date_of_birth"
              >
                <DatePicker
                  className="fromDatePicker"
                  placeholder="Date from"
                  style={{ borderRadius: 20, width: '100%' }}
                  size="large"
                  format="YYYY/MM/DD"
                  disabledDate={(current) => {
                    if (form.getFieldValue('date_of_birth')) {
                      var pastDate = new Date();
                      pastDate.setFullYear(pastDate.getFullYear() - 18);
                      return current.isAfter(moment(pastDate));
                    }
                  }}
                />
              </Form.Item>
            </div>
            <div className={styles.formItem}>
              <span>
                Date of joining <span style={{ color: '#f87d4e' }}>*</span>
              </span>
              <Form.Item name="date_of_joining">
                <DatePicker
                  className="fromDatePicker"
                  placeholder="Date from"
                  style={{ borderRadius: 20, width: '100%' }}
                  size="large"
                  format="YYYY/MM/DD"
                  disabledDate={(current) => {
                    if (date_of_birth) {
                      var dateOfBirth = new Date(moment(form.getFieldValue('date_of_birth')));
                      dateOfBirth.setFullYear(dateOfBirth.getFullYear() + 18);
                      return current.isBefore(moment(dateOfBirth));
                    }
                  }}
                />
              </Form.Item>
            </div>
          </div>

          <div>
            <span>
              Contact Number <span style={{ color: '#f87d4e' }}>*</span>
            </span>
            <Form.Item rules={[validateEmptySpace]} name="contact_number">
              <Input
                min="0"
                type="number"
                step="1"
                pattern="\d+"
                size="large"
                style={{ borderRadius: 10 }}
                className="ant-custom-input"
              />
            </Form.Item>
          </div>

          <Form.Item style={{ float: 'right' }}>
            <Button
              style={{ marginTop: 15, marginRight: 10, width: 120 }}
              onClick={() => navigate(`/employees/${id}`)}
              shape="round"
              size="large"
            >
              Cancel
            </Button>
            <Button
              loading={loading}
              type="primary"
              htmlType="submit"
              style={{ marginTop: 15, width: 120 }}
              shape="round"
              size="large"
            >
              Update
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default EditEmployee;
