import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Main from "../../../template";
import TopNav from "../../Common/UIComponents/TopNav";
import OneEmployee from "./OneEmployee";
import BulkEmployees from "./BulkEmployees";
import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";

const Index = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState({
    title: "One Employee",
    key: "One Employee",
  });

  const options = [
    { title: "One Employee", key: "One Employee" },
    { title: "Bulk List", key: "Bulk List" },
  ];

  const handleTabChange = (tab) => setTab(tab);

  return (
    <Main>
      <div style={{ width: "90%", margin: "auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 35,
          }}
        >
          <HiOutlineArrowLeft
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/employees")}
            size={30}
          />
          <h3 style={{ marginBottom: 0, fontWeight: 700 }}>Add Employee</h3>
        </div>
        {tab.key === "Bulk List" && (
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <a
              href="https://eden-provider-portal-documents.s3.ap-south-1.amazonaws.com/site/Template_Employee_Bulk.xlsx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button type="dashed" icon={<DownloadOutlined />}>
                Download Excel template
              </Button>
            </a>
          </div>
        )}
        <TopNav
          tab={tab}
          options={options}
          width={200}
          handleTabChange={handleTabChange}
        />
        {tab.key === "One Employee" ? <OneEmployee /> : <BulkEmployees />}
      </div>
    </Main>
  );
};

export default Index;
