import type { VuetifyOptions } from 'vuetify';
import {
  PRIMARY_COLOR,
  LIGHT_THEME_COLORS,
  DARK_THEME_COLORS,
  GREY_PALETTE_LIGHT,
  GREY_PALETTE_DARK,
  COMMON_THEME_VARIABLES
} from './constants';

export const staticPrimaryColor = PRIMARY_COLOR;

const theme: VuetifyOptions['theme'] = {
  defaultTheme: 'light',
  themes: {
    light: {
      dark: false,
      colors: {
        ...LIGHT_THEME_COLORS,
        ...GREY_PALETTE_LIGHT,
        'perfect-scrollbar-thumb': '#DBDADE',
        'skin-bordered-background': '#fff',
        'skin-bordered-surface': '#fff'
      },
      variables: {
        ...COMMON_THEME_VARIABLES,
        'overlay-scrim-background': '#4C4E64',
        'tooltip-background': '#4A5072',
        'overlay-scrim-opacity': 0.5,
        'border-color': '#2F2B3D',
        'switch-opacity': 0.2,
        'switch-disabled-track-opacity': 0.3,
        'switch-disabled-thumb-opacity': 0.4,
        'switch-checked-disabled-opacity': 0.3,
        'shadow-key-umbra-color': '#2F2B3D'
      }
    },
    dark: {
      dark: true,
      colors: {
        ...DARK_THEME_COLORS,
        ...GREY_PALETTE_DARK,
        'perfect-scrollbar-thumb': '#4A5072',
        'skin-bordered-background': '#2f3349',
        'skin-bordered-surface': '#2f3349'
      },
      variables: {
        ...COMMON_THEME_VARIABLES,
        'overlay-scrim-background': '#101121',
        'tooltip-background': '#5E6692',
        'overlay-scrim-opacity': 0.6,
        'border-color': '#D0D4F1',
        'switch-opacity': 0.4,
        'switch-disabled-track-opacity': 0.4,
        'switch-disabled-thumb-opacity': 0.8,
        'switch-checked-disabled-opacity': 0.3,
        'shadow-key-umbra-color': '#0F1422'
      }
    }
  }
};

export default theme;
