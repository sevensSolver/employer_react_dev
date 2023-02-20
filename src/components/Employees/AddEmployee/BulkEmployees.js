import { Button, notification } from "antd";
import React, { useEffect, useState } from "react";
import DraggerComponent from "./Upload";
import UploadsTable from "./UploadsTable";
import { UploadOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { clearBulkData, employeesBulkUpload } from "../../../store/employees";
import { useNavigate } from "react-router-dom";
import RoundArrow from "../../Common/UIComponents/RoundArrow";

const BulkEmployees = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const [showFile, setShowFile] = useState(true);

  const state = useSelector((state) => state.employees);

  useEffect(() => {
    dispatch(clearBulkData());
  }, [dispatch]);

  const handleUpload = () => {
    if (file) {
      const form = new FormData();
      form.append("file", file);
      dispatch(
        employeesBulkUpload({
          form,
          notification: openNotificationWithIcon,
          navigate,
        })
      );
      setShowFile(false);
    } else {
      alert("please pick a file");
    }
  };

  const openNotificationWithIcon = (type, title, description) => {
    notification[type]({
      message: title ? title : "Notification Title",
      description: description
        ? description
        : "This is the content of the notification. This is the content of the notification. This is the content of the notification",
    });
  };

  return (
    <div>
      <div style={{ height: 150 }}>
        <DraggerComponent
          setShowFile={setShowFile}
          showFile={showFile}
          setFile={setFile}
        />
      </div>
      {state.bulkUpload?.length > 0 ? (
        <div style={{ marginTop: 60 }}>
          <h4 style={{ fontWeight: 700 }}>Uploads</h4>
          <UploadsTable data={state?.bulkUpload} />
          <div
            onClick={() => navigate("/employees")}
            style={{ float: "right", margin: 10, cursor: "pointer" }}
          >
            <RoundArrow text="View All" height={18} width={18} />
          </div>
        </div>
      ) : (
        <Button
          loading={state.loading}
          onClick={() => handleUpload()}
          style={{ float: "right", marginTop: 30 }}
          type="primary"
          shape="round"
          icon={<UploadOutlined />}
        >
          Submit
        </Button>
      )}
    </div>
  );
};

export default BulkEmployees;
