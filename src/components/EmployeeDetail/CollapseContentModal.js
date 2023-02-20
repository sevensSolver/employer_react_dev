import { Divider, Modal } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';

const CollapseContentModal = ({ isModalOpen, setIsModalOpen, content, title }) => {
  return (
    <Modal
      title={title}
      footer={null}
      open={isModalOpen}
      onOk={() => setIsModalOpen()}
      width={700}
      onCancel={() => setIsModalOpen()}
    >
      <CloseCircleOutlined
        onClick={() => setIsModalOpen(false)}
        style={{ position: 'absolute', right: 20, top: 10, color: '#3ab44d', fontSize: 24 }}
      />
      <ul style={{ position: 'relative', padding: 20 }}>
        {content?.map((item, index) => (
          <>
            <li style={{}} key={index}>
              <span style={{ marginRight: 10 }}>{item.text}</span>
              <span style={{ fontWeight: 600, color: 'black' }}>{item.value}</span>
            </li>
            <Divider />
          </>
        ))}
      </ul>
    </Modal>
  );
};

export default CollapseContentModal;
