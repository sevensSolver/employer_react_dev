import { Button, Form, Input, notification } from 'antd';
import { useState } from 'react';
import styles from './index.module.css';
import { baseUrl } from '../../utils';

const RequestOtp = ({ setStep, setEmail }) => {
  const [form] = Form.useForm();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onFinish = async (value) => {
    setLoading(true);
    let email = value.email.trim();
    await fetch(`${baseUrl}/user/${email}/Employer/otp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.api.responseCode === 2230) {
          openNotificationWithIcon('success', res.message);
          setStep(1);
        } else {
          openNotificationWithIcon('error', res.message);
          setError(res.message);
        }
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  };

  const openNotificationWithIcon = (type, msg) => {
    notification[type]({
      message: msg,
    });
  };

  const clearEmailFieldError = (fieldName) => {
    setError('');
    form.setFields([
      {
        name: fieldName,
        errors: [],
      },
    ]);
  };

  let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return (
    <Form style={{ width: '100%' }} name="form" form={form} onFinish={onFinish}>
      <p className={styles.fieldLabel}>Email</p>
      <Form.Item
        name="email"
        validateTrigger="onBlur"
        onClick={() => clearEmailFieldError('email')}
        rules={[
          {
            required: true,
            message: 'Please enter your email address',
          },
          {
            pattern: regexEmail,
            message: 'Please enter a valid email address',
          },
        ]}
      >
        <Input
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="customAntInput"
        />
      </Form.Item>

      {error && (
        <div style={{ color: 'red', fontSize: 13, textAlign: 'center', marginBottom: 12 }}>
          {error?.replaceAll('_', ' ')}
        </div>
      )}

      <Button
        loading={loading}
        shape="round"
        style={{
          marginTop: 20,
          height: '50px',
          width: '100%',
        }}
        type="primary"
        htmlType="submit"
      >
        Verify Email
      </Button>
    </Form>
  );
};

export default RequestOtp;
