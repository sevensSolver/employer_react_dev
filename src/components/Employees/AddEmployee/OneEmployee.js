import { Button, Form, Input, notification, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
import { validateEmptySpace } from "../../Common/UtilFunctions";
import { addNewEmployee } from "../../../store/employees";

const { Option } = Select;

const OneEmployee = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.employees);

  const onFinish = (values) => {
    dispatch(
      addNewEmployee({
        values: JSON.stringify(values),
        notification: openNotificationWithIcon,
        navigate,
      })
    );
  };

  const openNotificationWithIcon = (type, msg) => {
    notification[type]({
      message:
        type === "success"
          ? "Employee Added successfully"
          : "Error Adding Employee",
      description: msg,
    });
  };

  return (
    <div>
      <p style={{ marginTop: 60, color: "#707070", width: "50%" }}>
        {` Start by adding a new employee's details to invite them to access the
        Eden Care policy`}
      </p>
      <div style={{ width: "60%", marginTop: 35 }}>
        <Form name="basic" onFinish={onFinish}>
          <div className={styles.formDiv}>
            <div className={styles.formItem}>
              <span>
                First Name <span style={{ color: "#f87d4e" }}>*</span>
              </span>
              <Form.Item rules={[validateEmptySpace]} name="first_name">
                <Input
                  size="large"
                  style={{ borderRadius: 10 }}
                  className="ant-custom-input"
                />
              </Form.Item>
            </div>
            <div className={styles.formItem}>
              <span>
                Last Name <span style={{ color: "#f87d4e" }}>*</span>
              </span>
              <Form.Item rules={[validateEmptySpace]} name="last_name">
                <Input
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
                Email<span style={{ color: "#f87d4e" }}>*</span>
              </span>
              <Form.Item
                rules={[
                  {
                    required: true,
                    pattern: /\S+@\S+\.\S+/,
                    message: "Enter a valid email address!",
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
                Policy Plan Type <span style={{ color: "#f87d4e" }}>*</span>
              </span>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Required",
                  },
                ]}
                name="policy_type"
              >
                <Select size="large" onChange={() => console.log()}>
                  <Option value="Gold">Gold</Option>
                  <Option value="Platinum">Platinum</Option>
                  <Option value="Platinum_Plus">Platinum Plus</Option>
                  <Option value="Bronze">Bronze</Option>
                  <Option value="Silver">Silver</Option>
                </Select>
              </Form.Item>
            </div>
          </div>
          <div className={styles.formDiv}>
            <div className={styles.formItem}>
              <span>
                Number of Dependents <span style={{ color: "#f87d4e" }}>*</span>
              </span>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Required",
                  },
                ]}
                name="num_of_dependents"
              >
                <Select size="large" onChange={() => console.log()}>
                  <Option value={1}>1</Option>
                  <Option value={2}>2</Option>
                  <Option value={3}>3</Option>
                  <Option value={4}>4</Option>
                  <Option value={5}>5</Option>
                </Select>
              </Form.Item>
            </div>
            <div className={styles.formItem}>
              <span>
                National ID Number <span style={{ color: "#f87d4e" }}>*</span>
              </span>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Required",
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

          <Form.Item>
            <Button
              loading={state.loading}
              type="primary"
              htmlType="submit"
              style={{ marginTop: 15, width: 180 }}
              shape="round"
              size="large"
            >
              Send
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default OneEmployee;
