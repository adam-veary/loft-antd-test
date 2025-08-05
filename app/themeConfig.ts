import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    // Colors - Using Loft design tokens
    colorPrimary: '#0e6aed', // --l-color-blue-100
    colorPrimaryHover: '#267af2', // --l-color-blue-90
    colorPrimaryActive: '#1a5ade', // --l-color-blue-125
    colorPrimaryBg: '#f6f9ff', // --l-color-blue-5
    colorPrimaryBgHover: '#e6f0fd', // --l-color-blue-10
    colorPrimaryBorder: '#86b5f8', // --l-color-blue-50
    colorPrimaryBorderHover: '#4b91f5', // --l-color-blue-75

    // Success colors
    colorSuccess: '#13bf87', // --l-color-green-100
    colorSuccessHover: '#4ecfa5', // --l-color-green-75
    colorSuccessActive: '#10a474', // --l-color-green-125
    colorSuccessBg: '#e7f8f3', // --l-color-green-5
    colorSuccessBgHover: '#c4efe1', // --l-color-green-10
    colorSuccessBorder: '#89dfc3', // --l-color-green-50

    // Warning colors
    colorWarning: '#ffc118', // --l-color-yellow-100
    colorWarningHover: '#ffd152', // --l-color-yellow-75
    colorWarningActive: '#f9ae00', // --l-color-yellow-125
    colorWarningBg: '#fff8e7', // --l-color-yellow-5
    colorWarningBgHover: '#ffefc5', // --l-color-yellow-25
    colorWarningBorder: '#ffe08b', // --l-color-yellow-50

    // Error colors
    colorError: '#e63817', // --l-color-red-100
    colorErrorHover: '#e7684f', // --l-color-red-75
    colorErrorActive: '#c72f12', // --l-color-red-125
    colorErrorBg: '#fcebe7', // --l-color-red-10
    colorErrorBgHover: '#f7ccc4', // --l-color-red-25
    colorErrorBorder: '#ef9a89', // --l-color-red-50

    // Info colors
    colorInfo: '#0e6aed', // --l-color-blue-100
    colorInfoBg: '#f6f9ff', // --l-color-blue-5
    colorInfoBgHover: '#e6f0fd', // --l-color-blue-10
    colorInfoBorder: '#86b5f8', // --l-color-blue-50

    // Neutral colors
    colorText: '#253843', // --l-color-gray-0
    colorTextSecondary: '#55646d', // --l-color-gray-1
    colorTextTertiary: '#959fa4', // --l-color-gray-2
    colorTextQuaternary: '#999fa3', // --l-color-gray-3
    colorTextPlaceholder: '#c4c5c6', // --l-color-gray-4
    colorTextDisabled: '#476175', // --l-color-disabled-color

    // Background colors
    colorBgContainer: '#fcfdfd', // --l-color-gray-8
    colorBgElevated: '#fcfdfd', // --l-color-gray-8
    colorBgLayout: '#f3f6f8', // --l-color-gray-7
    colorBgSpotlight: '#f2f2f2', // --l-color-gray-6
    colorBgMask: '#092c4726', // --l-color-overlay

    // Border colors
    colorBorder: '#e6e9ec', // --l-color-border
    colorBorderSecondary: '#d8dee1', // --l-color-gray-5
    colorBorderBg: '#f3f6f8', // --l-color-gray-7

    // Fill colors
    colorFill: '#e6e9ec', // --l-color-border
    colorFillSecondary: '#f2f2f2', // --l-color-gray-6
    colorFillTertiary: '#f3f6f8', // --l-color-gray-7
    colorFillQuaternary: '#fcfdfd', // --l-color-gray-8

    // Typography
    fontFamily: '"Open Sans", Helvetica, Arial, sans-serif', // --l-font-family-text
    fontSize: 16, // --l-font-size-small
    fontSizeSM: 14, // --l-font-size-smaller
    fontSizeLG: 20, // --l-font-size-medium
    fontSizeXL: 24, // --l-font-size-large
    fontSizeHeading1: 40, // --l-font-size-largest
    fontSizeHeading2: 32, // --l-font-size-larger
    fontSizeHeading3: 24, // --l-font-size-large
    fontSizeHeading4: 20, // --l-font-size-medium
    fontSizeHeading5: 16, // --l-font-size-small

    // Font weight
    fontWeightStrong: 800, // --l-font-weight-bold

    // Line heights
    lineHeight: 1.5, // Based on --l-font-lineheight-2 (18px) / --l-font-size-small (16px)
    lineHeightLG: 1.5, // Based on --l-font-lineheight-3 (20px) / --l-font-size-medium (20px)
    lineHeightSM: 1.4, // Based on --l-font-lineheight-1 (14px) / --l-font-size-smaller (14px)

    // Spacing
    padding: 16, // --l-space-4
    paddingXS: 4, // --l-space-1
    paddingSM: 8, // --l-space-2
    paddingLG: 24, // --l-space-6
    paddingXL: 32, // --l-space-8

    margin: 16, // --l-space-4
    marginXS: 4, // --l-space-1
    marginSM: 8, // --l-space-2
    marginLG: 24, // --l-space-6
    marginXL: 32, // --l-space-8

    // Border radius
    borderRadius: 3, // --l-radius-1
    borderRadiusLG: 6, // Double the base radius
    borderRadiusSM: 2, // Slightly smaller than base

    // Border width
    lineWidth: 1, // --l-border-width-default
    lineWidthBold: 2, // Double the default

    // Control height
    controlHeight: 40, // Based on typical button height
    controlHeightSM: 32, // Smaller control
    controlHeightLG: 48, // Larger control

    // Shadow
    boxShadow: '0 1px 4px 0 #c1cad10', // --l-shadow-1
    boxShadowSecondary: '0 2px 8px 0 #c1cad10', // Enhanced shadow

    // Motion
    motionDurationFast: '0.1s',
    motionDurationMid: '0.2s',
    motionDurationSlow: '0.3s',
  },
  components: {
    // Button customizations
    Button: {
      borderRadius: 3, // --l-radius-1
      controlHeight: 40,
      controlHeightLG: 48,
      controlHeightSM: 32,
      fontWeight: 600, // --l-font-weight-semibold
    },
    // Input customizations
    Input: {
      borderRadius: 3, // --l-radius-1
      controlHeight: 40,
      controlHeightLG: 48,
      controlHeightSM: 32,
    },
    // Select customizations
    Select: {
      borderRadius: 3, // --l-radius-1
      controlHeight: 40,
      controlHeightLG: 48,
      controlHeightSM: 32,
    },
    // Card customizations
    Card: {
      borderRadius: 3, // --l-radius-1
      boxShadow: '0 1px 4px 0 #c1cad10', // --l-shadow-1
    },
    // Modal customizations
    Modal: {
      borderRadius: 3, // --l-radius-1
      boxShadow: '0 2px 8px 0 #c1cad10', // Enhanced shadow
    },
    // Alert customizations
    Alert: {
      borderRadius: 3, // --l-radius-1
    },
    // Badge customizations
    Badge: {
      borderRadius: 9999, // --l-radius-full
    },
    // Tag customizations
    Tag: {
      borderRadius: 3, // --l-radius-1
    },
    // Switch customizations
    Switch: {
      borderRadius: 9999, // --l-radius-full
    },
    // Checkbox customizations
    Checkbox: {
      borderRadius: 3, // --l-radius-1
    },
    // Radio customizations
    Radio: {
      borderRadius: 9999, // --l-radius-full
    },
    // Typography customizations
    Typography: {
      titleMarginTop: 0,
      titleMarginBottom: 16,
      fontWeightStrong: 400, // Set all title font weights to 400
    },
  },
};

export default theme;
