import { Button, Modal, Form, Input, DatePicker, Select } from 'antd';

import CloseModalImg from '../../img/close-modal.png';
import styles from './index.module.css';

const GenerateReport = ({ setIsModalVisible, isModalVisible, title }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onChange = (values) => {
    console.log('Success:', values);
  };

  const handleClick = () => {
    // form.submit();
    setIsModalVisible(false);
  };

  const { Option } = Select;

  return (
    <>
      <Modal className="fileCliam" bodyStyle={{ padding: 50 }} footer={null} open={isModalVisible}>
        <div
          onClick={() => setIsModalVisible(false)}
          style={{ cursor: 'pointer' }}
          className="modalCloseIcon"
        >
          <img src={CloseModalImg} style={{ width: 28 }} alt="" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 35 }}>
          <div>
            <h1 className="mbZero">{title}</h1>
            <h5 className="mbZero">Fill in the form below to make a report</h5>
          </div>

          <Form form={form} className="wFull" name="basic" onFinish={onFinish}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 15,
                width: '100%',
              }}
            >
              <div style={{ width: '50%' }}>
                <label>From Date</label>
                <Form.Item
                  name="from"
                  rules={[
                    {
                      required: true,
                      message: 'Required!',
                    },
                  ]}
                >
                  <DatePicker
                    className="fromDatePicker"
                    placeholder="From"
                    onChange={onChange}
                    style={{ width: '100%' }}
                    size="large"
                    format="YYYY/MM/DD"
                  />
                </Form.Item>
              </div>
              <div style={{ width: '50%' }}>
                <label>To Date</label>
                <Form.Item
                  name="to"
                  rules={[
                    {
                      required: true,
                      message: 'Required!',
                    },
                  ]}
                >
                  <DatePicker
                    placeholder="To "
                    onChange={onChange}
                    style={{ width: '100%' }}
                    size="large"
                    format="YYYY/MM/DD"
                  />
                </Form.Item>
              </div>
            </div>
            <label>Status</label>
            <Form.Item
              name="status"
              rules={[
                {
                  required: true,
                  message: 'Required!',
                },
              ]}
            >
              <Select size="large" placeholder="Status">
                <Option value="lucy">Active</Option>
                <Option value="lucy">Inactive</Option>
              </Select>
            </Form.Item>

            <label>Amount</label>
            <Form.Item
              name="amount"
              rules={[
                {
                  required: true,
                  message: 'Required!',
                },
              ]}
            >
              <Input placeholder="Ammount" size="large" />
            </Form.Item>
          </Form>

          <Button
            onClick={handleClick}
            size="large"
            style={{ width: '55%' }}
            type="primary"
            shape="round"
          >
            Generate Report
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default GenerateReport;
