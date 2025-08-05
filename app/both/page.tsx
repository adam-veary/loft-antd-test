import React from 'react';
import { ConfigProvider } from 'antd';
import theme from '../themeConfig';
import AntdDocs from '../antd-docs';
import LoftDocs from '../loft-docs';

const BothPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '20px',
        justifyContent: 'stretch',
        alignItems: 'stretch',
      }}
    >
      <ConfigProvider theme={theme}>
        <AntdDocs />
      </ConfigProvider>
      <LoftDocs />
    </div>
  );
};

export default BothPage;
