import { Button, Form, Input, Modal } from "antd";
import CloseModalImg from "../../img/close-modal.png";

const RequestReason = ({ setIsModalVisible, isModalVisible }) => {
  const onFinish = () => {
    setIsModalVisible(false);
  };
  const [form] = Form.useForm();
  return (
    <>
      <Modal
        className="fileClaim"
        bodyStyle={{ padding: 50 }}
        footer={null}
        visible={isModalVisible}
      >
        <div
          onClick={() => setIsModalVisible(false)}
          style={{ cursor: "pointer" }}
          className="modalCloseIcon"
        >
          <img src={CloseModalImg} style={{ width: 28 }} alt="" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 35 }}>
          <div>
            <h1 className="mbZero">Request Information</h1>
            <h5 className="mbZero">Share details in the message box below</h5>
          </div>
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, marginBottom: 4 }}>
              Information message
            </p>
            <Form form={form} name="basic" onFinish={onFinish}>
              <Form.Item
                name="text"
                rules={[
                  {
                    required: true,
                    message: "Input cannot be blank",
                  },
                ]}
              >
                <Input.TextArea
                  placeholder="Type here"
                  rows={4}
                  style={{ borderRadius: 15 }}
                />
              </Form.Item>
            </Form>
          </div>

          <Button
            size="large"
            style={{ width: "55%", backgroundColor: "#f87d4e", color: "white" }}
            type="text"
            shape="round"
            onClick={() => form.submit()}
          >
            Send Message
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default RequestReason;
