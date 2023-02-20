import { Button, Upload } from "antd";
import { useEffect, useState } from "react";
import UploadImg from "../../../img/upload.png";

const DraggerComponent = ({ setFiles, disabled }) => {
  const [fileList, setFileList] = useState([]);
  const { Dragger } = Upload;

  useEffect(() => {
    setFileList([]);
  }, [disabled]);

  const handleChange = async ({ fileList }) => {
    setFileList(fileList.filter((file) => file.status !== "error"));

    if (fileList.length > 0) {
      var docs = [];
      try {
        await Promise.all(
          fileList.map(async (file, index) => {
            try {
              docs.push(file.originFileObj);
              if (fileList.length - 1 === index) {
                setFiles(docs);
              }
            } catch (e) {
              console.log(e);
            }
          })
        );
      } catch (err) {
        console.log(err);
      }
    }
  };

  const onRemove = async (file) => {
    const index = fileList.indexOf(file);
    const newFileList = fileList.slice();
    newFileList.splice(index, 1);
    setFileList(newFileList);
    setFiles(newFileList);
  };

  return (
    <>
      <Dragger
        style={{ height: 200 }}
        disabled={disabled}
        fileList={fileList}
        beforeUpload={() => false}
        onChange={handleChange}
        onRemove={onRemove}
        multiple={true}
        accept=".doc,.docx,.pdf,.csv,.xlsx, .xls,"
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 15,
            marginLeft: 30,
          }}
        >
          <img style={{ height: 80 }} src={UploadImg} alt="UploadImg" />
          <div>
            <p style={{ fontWeight: 700, marginBottom: 0 }}>Drag & Drop</p>
            <p style={{ marginBottom: 5, fontSize: 12 }}>A file here or</p>
            <Button style={{ width: 100 }} type="primary" shape="round">
              Browse
            </Button>
          </div>
        </div>
      </Dragger>
    </>
  );
};

export default DraggerComponent;
