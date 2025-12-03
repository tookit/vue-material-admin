// Theme constants for DRY principle
export const PRIMARY_COLOR = '#304FFD';

export const LIGHT_THEME_COLORS = {
  primary: PRIMARY_COLOR,
  'on-primary': '#fff',
  secondary: '#FF965D',
  'on-secondary': '#fff',
  success: '#28C76F',
  'on-success': '#fff',
  info: '#00CFE8',
  'on-info': '#fff',
  warning: '#FF9F43',
  'on-warning': '#fff',
  error: '#EA5455',
  background: '#F8F7FA',
  'on-background': '#2F2B3D',
  'on-surface': '#2F2B3D',
  'on-surface-variant': '#FFF'
} as const;

export const DARK_THEME_COLORS = {
  primary: PRIMARY_COLOR,
  'on-primary': '#fff',
  secondary: '#A8AAAE',
  'on-secondary': '#fff',
  success: '#28C76F',
  'on-success': '#fff',
  info: '#00CFE8',
  'on-info': '#fff',
  warning: '#FF9F43',
  'on-warning': '#fff',
  error: '#EA5455',
  background: '#25293C',
  'on-background': '#D0D4F1',
  surface: '#2F3349',
  'on-surface': '#D0D4F1'
} as const;

export const GREY_PALETTE_LIGHT = {
  'grey-50': '#FAFAFA',
  'grey-100': '#F5F5F5',
  'grey-200': '#EEEEEE',
  'grey-300': '#E0E0E0',
  'grey-400': '#BDBDBD',
  'grey-500': '#9E9E9E',
  'grey-600': '#757575',
  'grey-700': '#616161',
  'grey-800': '#424242',
  'grey-900': '#212121'
} as const;

export const GREY_PALETTE_DARK = {
  'grey-50': '#26293A',
  'grey-100': '#2F3349',
  'grey-200': '#26293A',
  'grey-300': '#4A5072',
  'grey-400': '#5E6692',
  'grey-500': '#7983BB',
  'grey-600': '#AAB3DE',
  'grey-700': '#B6BEE3',
  'grey-800': '#CFD3EC',
  'grey-900': '#E7E9F6'
} as const;

export const COMMON_THEME_VARIABLES = {
  'code-color': '#d400ff',
  'hover-opacity': 0.04,
  'focus-opacity': 0.12,
  'selected-opacity': 0.06,
  'activated-opacity': 0.16,
  'pressed-opacity': 0.14,
  'dragged-opacity': 0.1,
  'disabled-opacity': 0.42,
  'border-opacity': 0.16,
  'high-emphasis-opacity': 0.78,
  'medium-emphasis-opacity': 0.68
} as const;
