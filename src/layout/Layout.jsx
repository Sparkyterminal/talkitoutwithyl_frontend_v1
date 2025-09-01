import React, { useState } from "react";
import { Layout, Menu, Button } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  FormOutlined,
  UsergroupAddOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../reducers/users";

const { Header, Sider, Content } = Layout;

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const colorBgContainer = "#fff";
  const borderRadiusLG = 8;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout()); // clear Redux state
    navigate("/login", { replace: true }); // redirect to login
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          background: "#fff", // ← white background
          boxShadow: "2px 0 8px rgba(0,0,0,0.05)", // optional shadow for depth
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px 0 8px 0",
            marginBottom: 8,
          }}
        >
          <img
            src="/assets/keerlogo1.png"
            alt="Logo"
            style={{ height: 100, width: 100, marginBottom: 8 }}
          />
          <span
            style={{
              color: "#18181b",
              fontWeight: 700,
              fontSize: 18,
              letterSpacing: 1,
              textAlign: "center",
            }}
          >
            Admin
          </span>
        </div>

        <Menu
          theme="light"
          mode="inline"
          selectedKeys={["1"]} // Since only one tab, key is "1"
          onClick={({ key }) => {
            if (key === "1") navigate("/dashboard/getuserinfo");
          }}
          items={[
            {
              key: "1",
              icon: <UserOutlined />, // Choose an icon you like, e.g. UserOutlined
              label: "Get User Info",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: 64,
            position: "relative",
          }}
        >
          {/* Collapse Button on Left */}
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "20px",
              width: 56,
              height: 56,
              marginLeft: 8,
              color: "#18181b",
            }}
          />

          {/* Center Title (absolute center) */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              textAlign: "center",
              pointerEvents: "none", // allows clicks to pass through
            }}
          >
            <span
            className="font-comrod-regular text-3xl"
            >
              talkitoutwithyl
            </span>
          </div>

          {/* Logout on Right */}
          <Button
            type="primary"
            onClick={handleLogout}
            icon={<LogoutOutlined />}
            style={{
              backgroundColor: "#f87171", // light red
              borderColor: "#f87171",
              fontWeight: "bold",
              marginRight: 16,
            }}
          >
            Logout
          </Button>
        </Header>

        <Content
          style={{
            margin: "32px 16px",
            padding: 32,
            minHeight: 320,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
          }}
        >
          <div>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
