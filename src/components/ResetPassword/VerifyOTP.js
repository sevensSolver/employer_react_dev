import { Button, Form, Input, notification } from 'antd';
import { useEffect, useState } from 'react';
import styles from './index.module.css';
import { baseUrl } from '../../utils';

const VerifyOTP = ({ email, setUniqueKey, setStep }) => {
  const [form] = Form.useForm();
  const [delay, setDelay] = useState(180);
  const minutes = Math.floor(delay / 60);
  const seconds = Math.floor(delay % 60);
  const [error, setError] = useState('');
  const [otpInput, setOtpInput] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setDelay(delay - 1);
    }, 1000);

    if (delay === 0) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  });

  const sendOTPAgain = async (email) => {
    setLoading(true);
    await fetch(`${baseUrl}/user/${email?.trim()}/Employer/otp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.api.responseCode === 2230) {
          openNotificationWithIcon('success', res.message);
          setDelay(180);
          setStep(1);
        } else {
          openNotificationWithIcon('error', res.message);
          setError(res.message);
        }
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  };

  const onFinish = async (value) => {
    setLoading(true);
    let otp = value.otp.trim();
    await fetch(`${baseUrl}/user/otp-validate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ access: 'Employer', email: email.trim(), otp }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.api.responseCode === 2270) {
          if (res.result.is_otp_valid === true) {
            setUniqueKey(res.result.unique_valid_key);
            openNotificationWithIcon('success', res.message);
            setStep(2);
          }
        } else {
          openNotificationWithIcon('error', res.message);
          setError(res.message);
        }
      });
    setLoading(false)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
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

  const openNotificationWithIcon = (type, msg) => {
    notification[type]({
      message: msg,
    });
  };

  return (
    <Form
      style={{ width: '100%' }}
      name="form"
      form={form}
      initialValues={{
        email: email,
      }}
      onFinish={onFinish}
    >
      <p className={styles.fieldLabel}>Email</p>
      <Form.Item name="email">
        <Input placeholder="Enter One time password" className="customAntInput" disabled />
      </Form.Item>
      <p className={styles.fieldLabel}>One time password (OTP)</p>
      <Form.Item
        validateTrigger="onBlur"
        onClick={() => clearEmailFieldError('otp')}
        name="otp"
        rules={[
          {
            required: true,
            message: 'OTP should be exactly 6 digits long',
            len: 6,
          },
        ]}
      >
        <Input
          onChange={(e) => setOtpInput(e.target.value)}
          placeholder="Enter One time password"
          className="customAntInput"
          type="number"
        />
      </Form.Item>

      {error && (
        <div style={{ color: 'red', fontSize: 12, textAlign: 'center', marginBottom: 12 }}>
          {error?.replaceAll('_', ' ')}
        </div>
      )}
      <Button
        loading={loading}
        shape="round"
        style={{
          height: '50px',
          marginTop: 40,
          width: '100%',
        }}
        type="primary"
        htmlType="submit"
        className={styles.submitBtn}
        disabled={!otpInput}
      >
        Verify OTP
      </Button>
      <div
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}
      >
        <div
          style={{
            width: '85%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 15,
          }}
        >
          <span style={{ fontSize: 12, color: '#A3A3A3', textAlign: 'center' }}>
            A One Time Password (OTP) has been sent to {email}
          </span>
          <Button
            disabled={seconds > 0}
            onClick={() => sendOTPAgain(email)}
            style={{ color: '#AFAFAF' }}
            type="text"
          >
            <span style={{ textDecoration: 'underline' }}>
              Resend OTP {minutes + seconds > 0 && `in seconds ${minutes}:${seconds}`}
            </span>
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default VerifyOTP;
