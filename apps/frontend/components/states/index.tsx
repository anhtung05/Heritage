'use client';

import React from 'react';
import { Spin, Empty, Button, Result, Flex, Typography } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';

interface LoadingStateProps {
  tip?: string;
  className?: string;
}

export const LoadingState: React.FC<LoadingStateProps> = ({
  tip = 'Đang tải dữ liệu di sản...',
  className = '',
}) => (
  <Flex
    vertical
    align="center"
    justify="center"
    className={className}
    role="status"
    aria-live="polite"
    aria-label={tip}
    style={{
      minHeight: 200,
      padding: 32,
    }}
  >
    <Spin size="large" />

    <Typography.Text
      type="secondary"
      style={{
        marginTop: 12,
      }}
    >
      {tip}
    </Typography.Text>
  </Flex>
);

interface EmptyStateProps {
  title?: string;
  description?: string;
  actionText?: string;
  onAction?: () => void;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'Không có dữ liệu',
  description = 'Chưa tìm thấy bản ghi hoặc hiện vật di sản phù hợp.',
  actionText,
  onAction,
  className = '',
}) => (
  <Flex
    vertical
    align="center"
    justify="center"
    className={className}
    role="status"
    aria-live="polite"
    style={{
      minHeight: 240,
      padding: 32,
      textAlign: 'center',
    }}
  >
    <Empty
      image={Empty.PRESENTED_IMAGE_SIMPLE}
      description={
        <Flex vertical gap={4}>
          <Typography.Text strong>{title}</Typography.Text>

          <Typography.Text type="secondary">
            {description}
          </Typography.Text>
        </Flex>
      }
    >
      {actionText && onAction && (
        <Button type="primary" onClick={onAction}>
          {actionText}
        </Button>
      )}
    </Empty>
  </Flex>
);

interface ErrorStateProps {
  title?: string;
  subTitle?: string;
  onRetry?: () => void;
  className?: string;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  title = 'Đã xảy ra lỗi kết nối',
  subTitle = 'Không thể đồng bộ dữ liệu với máy chủ di sản. Vui lòng thử lại sau.',
  onRetry,
  className = '',
}) => (
  <Flex
    align="center"
    justify="center"
    className={className}
    role="alert"
    aria-live="assertive"
    style={{
      padding: 24,
    }}
  >
    <Result
      status="error"
      title={title}
      subTitle={subTitle}
      extra={
        onRetry && (
          <Button
            icon={<ReloadOutlined />}
            onClick={onRetry}
            danger
            aria-label="Thử tải lại dữ liệu"
          >
            Tải lại trang
          </Button>
        )
      }
    />
  </Flex>
);