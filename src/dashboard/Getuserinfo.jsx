import React, { useState, useEffect } from "react";
import { Table, Typography, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import * as XLSX from "xlsx";
import { API_BASE_URL } from "../../config";

const { Title } = Typography;

const Getuserinfo = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE_URL}form`)
      .then((res) => res.json())
      .then((resData) => {
        if (resData.success && resData.data.length > 0) {
          const tableData = resData.data.map((user, index) => ({
            key: index.toString(),
            name: user.name,
            gender: user.gender,
            age: user.age,
            phone: user.phone,
            email: user.email,
            concerns: user.concerns.join(", "),
            otherConcern: user.otherConcern,
            previousTherapy: user.previousTherapy,
            communicationMode: user.communicationMode,
            howDidYouKnow: user.howDidYouKnow,
          }));
          setData(tableData);
        } else {
          setData([]);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Column definitions for antd table
  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Gender", dataIndex: "gender", key: "gender" },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "Phone", dataIndex: "phone", key: "phone" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Concerns", dataIndex: "concerns", key: "concerns" },
    { title: "Other Concern", dataIndex: "otherConcern", key: "otherConcern" },
    {
      title: "Previous Therapy",
      dataIndex: "previousTherapy",
      key: "previousTherapy",
    },
    {
      title: "Communication Mode",
      dataIndex: "communicationMode",
      key: "communicationMode",
    },
    {
      title: "How Did You Know",
      dataIndex: "howDidYouKnow",
      key: "howDidYouKnow",
    },
  ];

  // Export table data to Excel
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "UserInformation");
    XLSX.writeFile(workbook, "UserInformation.xlsx");
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <Title level={3} style={{ margin: 0 }}>
          User Information
        </Title>
        <Button
          type="primary"
          icon={<DownloadOutlined />}
          onClick={exportToExcel}
        >
          Export to Excel
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        loading={loading}
        pagination={{ pageSize: 10 }}
        bordered
        scroll={{ x: "max-content" }}
      />
    </div>
  );
};

export default Getuserinfo;
