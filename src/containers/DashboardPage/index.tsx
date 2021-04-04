import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";

import { useDocumentTitle } from "../../shared/hooks";

import "./index.less";

const { Header, Content, Footer, Sider } = Layout;

const DashboardPage: React.FC = () => {
  const title = "Dashboard Home";
  useDocumentTitle(title);

  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout id="dashboard-layout" style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            nav 4
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="dashboard-page-layout">
        <Header
          className="dashboard-page-layout-background"
          style={{ padding: 0 }}
        >
          {collapsed ? (
            <MenuUnfoldOutlined
              className="dashboard-menu-trigger"
              color="whitesmoke"
              onClick={toggle}
            />
          ) : (
            <MenuFoldOutlined
              className="dashboard-menu-trigger"
              color="whitesmoke"
              onClick={toggle}
            />
          )}
        </Header>
        <Content style={{ margin: "24px 16px" }}>
          <div
            className="site-layout-background"
            style={{ margin: "24px 16px", padding: 24, minHeight: 280 }}
          >
            content
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashboardPage;
