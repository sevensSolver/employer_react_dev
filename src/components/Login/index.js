import React, { useState } from 'react';
import styles from './index.module.css';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import LogoWithText from '../../img/LogoWithText.png';
import axios from 'axios';
import { baseUrl } from '../../utils';
import { verifyUserData, resetPasswordData } from '../../utils/AuthTexts';

const Login = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const [passwordLength, setPasswordLength] = useState(false);

  var refresh = window.localStorage.getItem('refresh');
  if (refresh === null) {
    localStorage.removeItem('hr-auth-token');
    localStorage.clear('hrUser');
    window.location.reload();
    window.localStorage.setItem('refresh', '1');
  }

  const [email, setEmail] = useState('');
  const [inputValue, setInputValue] = useState('');

  const onFinish = async (value) => {
    let email = value.email.trim();
    let password = value.password.trim();
    let values = { access: 'Employer', email, password };
    if (value.password.trim().length > 5) {
      setPasswordLength(false);
      try {
        setLoading(true);
        const response = await axios({
          method: 'POST',
          data: JSON.stringify(values),
          url: `${baseUrl}/user/login`,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });
        setLoading(false);
        const { data } = response;
        if (data?.api.responseCode === 2250) {
          localStorage.setItem('hr-auth-token', response.headers.token);
          localStorage.setItem('hrUser', JSON.stringify(data.result));
          navigate('/');
          return data;
        }
        if (data?.api.responseCode === 3050) {
          setError(data.message);
        }
      } catch (error) {
        setError('Oops! Invalid credentials');
        setLoading(false);
      }
    } else {
      setPasswordLength(true);
    }
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
    <div className={styles.container}>
      <div className={styles.sectionOne}>
        <img
          src={LogoWithText}
          style={{ height: 32, position: 'absolute', left: '7%', top: '5%' }}
          alt=""
        />
        <h3 className={styles.bannerText}>Health Insurance Made Easy</h3>
      </div>
      <div className={styles.sectionTwo}>
        <div className={styles.box}>
          <h3 className={styles.formText}>Log in to Eden Care</h3>
          <Form
            form={form}
            className="wFull"
            style={{ padding: '0px 30px' }}
            name="basic"
            onFinish={onFinish}
          >
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
                placeholder="Enter your Email"
                className="customAntInput"
              />
            </Form.Item>

            <p className={styles.fieldLabel}>Password</p>
            <Form.Item
              className="mbZero"
              name="password"
              validateTrigger="onBlur"
              onClick={() => clearEmailFieldError('password')}
              rules={[
                {
                  required: true,
                  message: 'Password required for authentication',
                },
              ]}
            >
              <Input.Password
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter your Password"
                className="customAntInput"
                size="large"
              />
            </Form.Item>

            <div
              onClick={() => navigate('/verify-email', { state: resetPasswordData })}
              className={styles.forgotPassword}
            >
              Forgot your password?
            </div>
          </Form>
          {passwordLength && (
            <span className={styles.errorText}>Minimum 6 characters required</span>
          )}
          {error && <span className={styles.errorText}>{error}</span>}
          <div className={styles.submitBtn}>
            <Button
              loading={loading}
              onClick={() => form.submit()}
              style={{ width: '85%', borderRadius: 20, height: 45 }}
              size="large"
              type="primary"
              disabled={!email || !inputValue}
              htmlType="submit"
            >
              Login
            </Button>
          </div>
          <div
            onClick={() => navigate('/verify-email', { state: verifyUserData })}
            style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12 }}
          >
            <span>First time User?</span>
            <span style={{ color: '#3ab44d', cursor: 'pointer', fontWeight: 500 }}>
              Verify your email
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
