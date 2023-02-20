import React, { useState } from 'react';
import { Upload } from 'antd';
import UploadImg from '../../img/upload.png';

const DraggerComponent = ({ setFiles, disabled }) => {
  const [fileList, setFileList] = useState([]);

  const { Dragger } = Upload;

  const handleChange = async ({ fileList }) => {
    setFileList(fileList.filter((file) => file.status !== 'error'));

    if (fileList.length > 0) {
      var docs = [];
      try {
        await Promise.all(
          fileList.map(async (file, index) => {
            try {
              docs.push(file.originFileObj);
              if (fileList.length - 1 == index) {
                setFiles(docs);
              }
            } catch (e) {
              console.log(e);
            }
          }),
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
  };

  return (
    <Dragger
      disabled={disabled}
      fileList={fileList}
      beforeUpload={() => false}
      onChange={handleChange}
      onRemove={onRemove}
      multiple={true}
      maxCount={4}
      accept=".doc,.docx,.pdf,.csv,.xlsx, .xls,"
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginLeft: 30 }}>
        <img style={{ height: 50 }} src={UploadImg} alt="UploadImg" />
        <div>
          <h5 className="mbZero" style={{ fontWeight: 700 }}>
            Browse to upload
          </h5>
          <p style={{ color: '#f87d4e', fontSize: 10, textAlign: 'start' }}>Or Drag and Drop</p>
        </div>
      </div>
    </Dragger>
  );
};

export default DraggerComponent;
