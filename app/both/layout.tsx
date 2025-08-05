import React from 'react';
import type { Metadata } from 'next';
import '@ant-design/v5-patch-for-react-19';
import StyledComponentsRegistry from '../AntdRegistry';

export const metadata: Metadata = {
  title: 'Both Versions',
};

function BothLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <link
        href="https://assets.xometry.com/loft/loft@latest/loft.css"
        rel="stylesheet"
      />
      <link
        href="https://assets.xometry.com/loft/loft@latest/utility-classes.css"
        rel="stylesheet"
      />
      <link
        href="https://assets.xometry.com/loft/loft@latest/fa-regular-400.woff2"
        rel="preload"
        as="font"
        crossOrigin=""
      />
      <link
        href="https://assets.xometry.com/loft/loft@latest/fa-solid-900.woff2"
        rel="preload"
        as="font"
        crossOrigin=""
      />
      <link
        href="https://assets.xometry.com/loft/loft@latest/fa-brands-400.woff2"
        rel="preload"
        as="font"
        crossOrigin=""
      />
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </>
  );
}

export default BothLayout;
