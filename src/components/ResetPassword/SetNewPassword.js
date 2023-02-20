import { Button, Form, Input, notification, Popover } from 'antd';
import { useState } from 'react';
import styles from './index.module.css';
import { useNavigate } from 'react-router-dom';
import { checkUppercaseAndNumb } from '../Common/UtilFunctions';
import PopOverValidityCheck from '../Common/UIComponents/PopOverValidityCheck';

import { baseUrl } from '../../utils';
import axios from 'axios';

const SetNewPassword = ({ uniqueKey, email }) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState();
  const [confirmPassword, setConfirmPassword] = useState('');

  const onFinish = async (value) => {
    let password = value.password.trim();

    try {
      setLoading(true);
      const response = await axios({
        method: 'POST',
        url: `${baseUrl}/user/set-password`,
        data: JSON.stringify({
          access: 'Employer',
          email: email.trim(),
          password,
          unique_valid_key: uniqueKey,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const { data } = response;
      if (data?.api.responseCode === 2250) {
        localStorage.setItem('hr-auth-token', response.headers.token);
        localStorage.setItem('hrUser', JSON.stringify(data.result));
        navigate('/');
      } else {
        openNotificationWithIcon('error', data.api.response);
        setError(data.api.response);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
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

  return (
    <Form style={{ width: '100%' }} name="form" form={form} onFinish={onFinish}>
      <Popover
        content={<PopOverValidityCheck value={inputValue} />}
        title="Make sure your new password is secure"
      >
        <p className={styles.fieldLabel}>Password</p>
        <Form.Item
          name="password"
          validateTrigger="onBlur"
          onClick={() => clearEmailFieldError('password')}
          rules={[
            {
              required: true,
            },
            () => ({
              validator(_, value) {
                if (value.length > 7 && value.length < 24) {
                  if (checkUppercaseAndNumb(value)) {
                    return Promise.resolve();
                  } else {
                    return Promise.reject(
                      new Error(
                        'Password should contain an uppercase, lowercase, numerics & special characters.',
                      ),
                    );
                  }
                } else {
                  return Promise.reject(new Error('Password must between 8 to 22 characters'));
                }
              },
            }),
          ]}
        >
          <Input.Password
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter your Password"
            className="customAntInput"
            size="large"
          />
        </Form.Item>
      </Popover>

      <p className={styles.fieldLabel}>Confirm Password</p>
      <Form.Item
        className="mbZero"
        name="confirm"
        validateTrigger="onBlur"
        onClick={() => clearEmailFieldError('confirm')}
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },

          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Repeat Password"
          className="customAntInput"
          size="large"
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
        disabled={!inputValue || !confirmPassword}
        className={styles.submitBtn}
      >
        Submit
      </Button>
    </Form>
  );
};

export default SetNewPassword;
