import { Table } from "antd";

const AntTable = ({ data }) => {
  const columns = [
    {
      title: "Identification No",
      dataIndex: "employee_identification_number",
      width: 105,
    },
    {
      title: "Name",
      dataIndex: "name",
      width: 120,
    },
    {
      title: "Email",
      dataIndex: "email",
      width: 90,
    },
    {
      title: "NIDA #",
      dataIndex: "nida",
      width: 110,
    },
    {
      title: "Policy Type",
      dataIndex: "policy_type",
      width: 100,
    },
    {
      title: "Department",
      dataIndex: "department",
      width: 110,
    },
  ];

  return (
    <Table
      rowKey="id"
      // onRow={(record, rowIndex) => {
      //   return {
      //     onClick: () => navigate("/employees/patient"),
      //   };
      // }}
      columns={columns}
      dataSource={data}
      pagination={false}
      scroll={{
        y: 170,
      }}
    />
  );
};

export default AntTable;
