import React, { useState } from "react";
import { Button, Form, Upload } from "antd";
import UploadImg from "../../img/upload.png";
import { clearBulkData } from "../../store/employees";
import { useDispatch } from "react-redux";

const DraggerComponent = ({ setFile, disabled, showFile }) => {
  const [form] = Form.useForm();
  const { Dragger } = Upload;
  const dispatch = useDispatch();

  const handleChange = async (e) => {
    dispatch(clearBulkData());
    setFile(e.fileList[0]?.originFileObj);
  };

  const onRemove = async (file) => {
    setFile(false);
  };

  return (
    <>
      <Form form={form}>
        <Dragger
          style={{ height: 200 }}
          disabled={disabled}
          beforeUpload={() => false}
          onChange={handleChange}
          onRemove={onRemove}
          showUploadList={showFile}
          maxCount={1}
          accept=".xlsx, .xls,"
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
              <p style={{ fontWeight: 700, marginBottom: 5 }}>Drag & Drop</p>

              <Button style={{ width: 100 }} type="primary" shape="round">
                Browse
              </Button>
            </div>
          </div>
        </Dragger>
      </Form>
    </>
  );
};

export default DraggerComponent;
