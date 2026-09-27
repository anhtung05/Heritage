'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Layout, Menu, Typography, ConfigProvider, theme } from 'antd';
import {
  DashboardOutlined,
  DatabaseOutlined,
  SettingOutlined,
  ArrowLeftOutlined
} from '@ant-design/icons';

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    {
      key: '1',
      icon: <DashboardOutlined />,
      label: <Link href="/admin">Bảng điều khiển</Link>,
    },
    {
      key: '2',
      icon: <DatabaseOutlined />,
      label: <Link href="/admin/data">Quản lý di sản</Link>,
    },
    {
      key: '3',
      icon: <SettingOutlined />,
      label: <Link href="/admin/settings">Cấu hình hệ thống</Link>,
    },
    {
      key: '4',
      icon: <ArrowLeftOutlined />,
      label: <Link href="/">Về cổng người dùng</Link>,
    },
  ];

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: '#b45309',
        },
      }}
    >
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(val) => setCollapsed(val)}
          theme="light"
          style={{ borderRight: '1px solid #f0f0f0' }}
        >
          <div style={{ height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 16px' }}>
            <span style={{ fontWeight: 'bold', fontSize: 16, color: '#b45309' }}>
              {collapsed ? 'HG' : 'HERITAGE ADMIN'}
            </span>
          </div>
          <Menu defaultSelectedKeys={['1']} mode="inline" items={menuItems} />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: '0 24px', display: 'flex', alignItems: 'center', borderBottom: '1px solid #f0f0f0' }}>
            <Title level={4} style={{ margin: 0 }}>Hệ thống quản trị Di sản Văn hóa</Title>
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280, borderRadius: 8 }}>
            {children}
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}