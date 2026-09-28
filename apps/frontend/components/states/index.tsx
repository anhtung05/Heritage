'use client';

import React from 'react';
import { Spin, Empty, Button, Result } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';

interface LoadingStateProps {
  tip?: string;
  className?: string;
}

export const LoadingState: React.FC<LoadingStateProps> = ({
  tip = 'Đang tải dữ liệu di sản...',
  className = '',
}) => (
  <div
  className={`flex flex-col items-center justify-center p-8 min-h-[200px] ${className}`}
  role="status"
  aria-live="polite"
  aria-label={tip}
>
  <Spin size="large" />
  <span className="mt-3 text-stone-500">{tip}</span>
</div>
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
  <div
  className={`flex flex-col items-center justify-center p-8 min-h-[240px] text-center ${className}`} role="status" aria-live="polite">
    <Empty
  image={Empty.PRESENTED_IMAGE_SIMPLE}
  description={
    <div>
      <div className="font-medium text-stone-700">{title}</div>
      <div className="mt-1 text-stone-500">{description}</div>
    </div>
  }
>
      {actionText && onAction && (
        <Button type="primary" onClick={onAction} style={{ background: '#b45309', borderColor: '#b45309' }}>
          {actionText}
        </Button>
      )}
    </Empty>
  </div>
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
      <div
      className={`flex items-center justify-center p-6 ${className}`}
      role="alert"
      aria-live="assertive"
    >
    <Result
      status="error"
      title={<span className="text-red-500 font-medium">{title}</span>}
      subTitle={<span className="text-stone-400">{subTitle}</span>}
      extra={
        onRetry && (
          <Button icon={<ReloadOutlined />} onClick={onRetry} danger aria-label="Thử tải lại dữ liệu">
            Tải lại trang
          </Button>
        )
      }
    />
  </div>
);