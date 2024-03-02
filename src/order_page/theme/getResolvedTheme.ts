import Color from 'color';
import merge from 'lodash/merge';
import { CustomTheme } from './types';
import { PartialCustomTheme } from './Theme';

export const getResolvedTheme = (customizedTheme?: PartialCustomTheme): CustomTheme => {
  const primaryColor = Color(customizedTheme?.palette?.primary || '#1976d2');
  const textColor = Color(customizedTheme?.palette?.text?.primary || '#3f4648');
  const background = Color(customizedTheme?.palette?.background || 'white');

  const baseTheme: CustomTheme = {
    darkLogo: false,
    palette: {
      border: '#d1d1d1',
      primary: primaryColor.hex(),
      background: background.hex(),
      trackFill: primaryColor.hex(),
      railFill: primaryColor.lighten(0.3).hex(),
      handle: primaryColor.hex(),
      warning: '#663c00',
      error: '#d32f2f',
      text: {
        primary: 'black',
        footer: textColor.lighten(0.15).hex(),
        button: { contained: 'white', outlined: primaryColor.hex() },
      },
      toggleButton: {
        disabledBg: background.lighten(0.1).hex(),
        selectedBg: primaryColor.lighten(0.9).hex(),
      },
      lineColor: textColor.lighten(0.2).hex(),
      calendarPicker: {
        color: textColor.hex(),
        disabledArrow: customizedTheme?.darkLogo ? textColor.darken(0.7).hex() : textColor.lighten(0.7).hex(),
      },
    },

    typography: {
      fontFamily: 'custom-font, DM Sans, sans-serif',
      h1: {
        fontSize: '32px',
        fontWeight: 'bold',
      },
      h2: {
        fontSize: '24px',
        fontWeight: 'normal',
      },
      h3: {
        fontSize: '16px',
        fontWeight: 'normal',
      },
      body: {
        fontSize: '14px',
        fontWeight: 'normal',
      },
    },
  };

  return merge(baseTheme, customizedTheme);
};
