'use client';

import React from 'react';
import { ConfigProvider } from 'antd';
import AntdDocs from '../antd-docs';
import theme from '../themeConfig';

const AntdPage = () => {
  return (
    <ConfigProvider theme={theme}>
      <AntdDocs />
    </ConfigProvider>
  );
};

export default AntdPage;
