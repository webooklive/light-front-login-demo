export type FontWeight = 'bold' | 'normal';
export type FontVariant = {
  fontSize: string;
  fontWeight: FontWeight;
};
export type CustomTheme = {
  darkLogo: boolean;
  palette: {
    border: string;
    primary: string;
    background: string;
    trackFill: string;
    railFill: string;
    handle: string;
    warning: string;
    error: string;
    text: {
      primary: string;
      footer: string;
      button: {
        contained: string;
        outlined: string;
      };
    };
    toggleButton: {
      disabledBg: string;
      selectedBg: string;
    };
    lineColor: string;
    calendarPicker: {
      color: string;
      disabledArrow: string;
    };
  };
  typography: {
    fontFamily: string;
    fontFamilyUrl?: string;
    h1: FontVariant;
    h2: FontVariant;
    h3: FontVariant;
    body: FontVariant;
  };
};

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
