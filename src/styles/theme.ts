export const theme = {
  colors: {
    primaryText: '#000000',
    primaryTextDisabled: '#00000080',
    primary: '#FFFFFF',
    secondaryText: '#666666',
    accent: '#1DA1F2',
    accentHover: '#0D8DE1',
    accentText: '#1DA1F2',
    accentDisabled: '#A8D8F0',
    secondary: '#000000',
    stroke: '#00000022',
    strokeDark: '#00000066',
    error: '#F21D1D',
    errorText: '#F21D1D',
    success: '#4CAF50',
    successText: '#4CAF50',
    placeholder: '#666666',
  },
  notification: {
    backgroundColor: {
      error: '#F21D1D',
      success: '#4CAF50',
      info: '#2196F3',
      warning: '#FFC107',
    },
    color: {
      error: '#F21D1D',
      success: '#4CAF50',
      info: '#2196F3',
      warning: '#FFC107',
    },
    shadow: {
      error: '#F21D1D',
      success: '#4CAF50',
      info: '#2196F3',
      warning: '#FFC107',
    },
  },
};

export type Theme = typeof theme;
