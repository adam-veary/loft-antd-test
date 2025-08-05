import React from 'react';

export default function LoftLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
      {children}
    </>
  );
}
