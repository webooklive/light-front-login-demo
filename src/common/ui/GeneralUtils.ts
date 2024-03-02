import { useTranslation } from 'react-i18next';
import { createTheme } from '@mui/material/styles';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';

export const useLanguage = (): 'en' | 'he' => {
  const { i18n } = useTranslation();
  let { language } = i18n;
  if (language === 'en-US') {
    language = 'en';
  }
  if (language === 'he-IL') {
    language = 'he';
  }
  return language as 'en' | 'he';
};
// @ts-ignore
export const ltrTheme = createTheme({
  direction: 'ltr',
});
// @ts-ignore
export const rtlTheme = createTheme({
  direction: 'rtl',
});
// @ts-ignore
export const theme = createTheme({
  direction: 'ltr',
});

export const cacheLtr = createCache({
  key: 'muiltr',
  stylisPlugins: [prefixer],
});

// Create rtl cache
export const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

export const stripHtml = (html: any) => {
  const tmp = document.createElement('DIV');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
};

// eslint-disable-next-line no-extend-native
Object.defineProperty(String.prototype, 'capitalize', {
  value() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  enumerable: false,
});
