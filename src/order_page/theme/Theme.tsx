import React, { PropsWithChildren } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import Color from 'color';
import { useTranslation } from 'react-i18next';
import { CustomTheme, DeepPartial } from './types';
import { getResolvedTheme } from './getResolvedTheme';

export type PartialCustomTheme = DeepPartial<CustomTheme>;

type SdkThemeProviderProps = {
  remoteThemeOverride?: PartialCustomTheme;
};

// Function to negate colors in a theme
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const negateThemeColors = (theme: CustomTheme) => {
  const negatedTheme = {
    ...theme,
    palette: {
      ...theme.palette,
    },
  };

  // Iterate through each color in the palette and negate it
  for (const key in negatedTheme.palette) {
    // @ts-ignore
    if (typeof negatedTheme.palette[key] === 'string') {
      // @ts-ignore
      negatedTheme.palette[key] = Color(negatedTheme.palette[key]).negate().hex();
    }
  }

  return negatedTheme;
};
export const WidgetThemeProvider: React.FC<PropsWithChildren<SdkThemeProviderProps>> = ({
  children,
  remoteThemeOverride,
}) => {
  const { i18n } = useTranslation();
  const theme = getResolvedTheme(remoteThemeOverride);
  const sliderTheme = {
    MuiSlider: {
      styleOverrides: {
        thumb: {
          backgroundColor: theme.palette.handle,
          '&:hover, &:active': {
            backgroundColor: theme.palette.handle,
            boxShadow: `0px 0px 20px ${theme.palette.handle}`,
            border: `2px solid ${theme.palette.handle}`,
          },
        },
        track: {
          border: `2px solid ${theme.palette.trackFill}`,
          backgroundColor: theme.palette.trackFill,
        },
        rail: {
          backgroundColor: theme.palette.railFill,
        },
      },
    },
  };
  const direction = i18n.dir();

  return (
    <MuiThemeProvider
      theme={createTheme({
        direction,
        customTheme: theme,
        components: {
          ...sliderTheme,
        },
      })}>
      <ThemeProvider
        theme={{
          customTheme: theme,
        }}>
        {children}
      </ThemeProvider>
    </MuiThemeProvider>
  );
};
