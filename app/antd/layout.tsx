import React from 'react';
import type { Metadata } from 'next';
import '@ant-design/v5-patch-for-react-19';
import StyledComponentsRegistry from '../AntdRegistry';

export const metadata: Metadata = {
  title: 'AntD version',
};

function RootLayout({ children }: React.PropsWithChildren) {
  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}

export default RootLayout;
