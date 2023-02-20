import { Modal } from "antd";
import CloseModalImg from "../../img/close-modal.png";
import { HiOutlineDocumentText } from "react-icons/hi";

const ViewDocsModal = ({ isDocVisible, setIsDocVisible, docs }) => {
  return (
    <>
      <Modal
        className="viewDocs"
        bodyStyle={{ padding: 50 }}
        footer={null}
        open={isDocVisible}
      >
        <div
          onClick={() => setIsDocVisible(false)}
          style={{ cursor: "pointer" }}
          className="modalCloseIcon"
        >
          <img src={CloseModalImg} style={{ width: 28 }} alt="" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 35 }}>
          <div>
            <h1 className="mbZero">View all documents</h1>
            <h5 className="mbZero">Please click on document to open</h5>
          </div>

          <div
            style={{
              display: "flex",
              gap: 20,
              flexWrap: "wrap",
            }}
          >
            {docs.map((item) => (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                key={item.url}
                style={{
                  display: "grid",
                  placeItems: "center",
                  cursor: "pointer",
                  width: 115,
                }}
              >
                <HiOutlineDocumentText size={30} color="#f87d4e" />

                <p>{item.file_name}</p>
              </a>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ViewDocsModal;
