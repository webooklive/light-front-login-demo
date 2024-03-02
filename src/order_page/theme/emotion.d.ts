import '@emotion/react';
import { CustomTheme } from './types';

declare module '@emotion/react' {
  export interface Theme {
    customTheme: CustomTheme;
  }
}

declare module '@mui/material/styles' {
  interface ThemeOptions {
    customTheme: CustomTheme['customTheme'];
  }

  interface Theme {
    customTheme: CustomTheme['customTheme'];
  }
}
