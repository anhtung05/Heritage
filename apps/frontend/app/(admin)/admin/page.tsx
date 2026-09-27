'use client';

import React from 'react';
import { Row, Col, Card, Statistic, Table, Tag } from 'antd';
import { TrophyOutlined, FileTextOutlined, TeamOutlined } from '@ant-design/icons';

export default function AdminDashboardPage() {
  const columns = [
    { title: 'Tên di sản', dataIndex: 'name', key: 'name' },
    { title: 'Địa phương', dataIndex: 'location', key: 'location' },
    {
      title: 'Phân loại',
      dataIndex: 'category',
      key: 'category',
      render: (cat: string) => <Tag color="gold">{cat}</Tag>,
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={status === 'Đã duyệt' ? 'green' : 'orange'}>{status}</Tag>
      ),
    },
  ];

  const data = [
    { key: '1', name: 'Nhã nhạc Cung đình Huế', location: 'Thừa Thiên Huế', category: 'Phi vật thể', status: 'Đã duyệt' },
    { key: '2', name: 'Ngũ Hành Sơn', location: 'Đà Nẵng', category: 'Danh thắng', status: 'Đã duyệt' },
    { key: '3', name: 'Hát bài chòi Trung Bộ', location: 'Đà Nẵng - Huế', category: 'Phi vật thể', status: 'Đang rà soát' },
  ];

  return (
    <div>
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={24} sm={8}>
          <Card>
            <Statistic title="Tổng số di sản" value={128} prefix={<TrophyOutlined />} />
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card>
            <Statistic title="Tài liệu & Bản ghi" value={1420} prefix={<FileTextOutlined />} />
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card>
            <Statistic title="Lượt truy cập hôm nay" value={358} prefix={<TeamOutlined />} />
          </Card>
        </Col>
      </Row>

      <Card title="Dữ liệu di sản mới cập nhật">
        <Table dataSource={data} columns={columns} pagination={false} />
      </Card>
    </div>
  );
}