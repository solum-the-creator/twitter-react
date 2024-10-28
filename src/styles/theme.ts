export const theme = {
  colors: {
    primaryText: '#000000',
    primaryTextDisabled: '#00000080',
    primary: '#FFFFFF',
    secondary: '#000000',
    secondaryText: '#666666',
    backgroundGray: '#E6E6E6',
    backgroundGrayDark: '#B3B8BB',
    accent: '#1DA1F2',
    accentHover: '#DEF2FF',
    accentActive: '#0D8DE1',
    accentText: '#1DA1F2',
    accentDisabled: '#A8D8F0',
    stroke: '#00000022',
    strokeDark: '#00000066',
    error: '#F21D1D',
    errorText: '#F21D1D',
    success: '#4CAF50',
    successText: '#4CAF50',
    placeholder: '#666666',
    backdrop: '#5B708366',
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
