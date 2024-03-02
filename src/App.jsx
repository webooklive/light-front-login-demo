import React, { useEffect, useState } from 'react';
import './App.scss';
import { useRoutes, useSearchParams } from 'react-router-dom';
import './i18n';
import { useTranslation } from 'react-i18next';
import { Alert, Snackbar, ThemeProvider, useTheme } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import moment from 'moment';
import { H } from 'highlight.run';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { StyleSheetManager } from 'styled-components';
import rtlPlugin from 'stylis-plugin-rtl';
import { SWRConfig } from 'swr';

import routes from './common/Routes';
import 'moment/dist/locale/he';
import { OpenAPI } from './api';
import { cacheLtr, cacheRtl, useLanguage } from './common/ui/GeneralUtils';

function App() {
  OpenAPI.BASE = import.meta.env.VITE_REACT_APP_API_BASE_URL || '';
  OpenAPI.WITH_CREDENTIALS = true;

  const content = useRoutes(routes);
  const { i18n, t } = useTranslation();
  const theme = useTheme();
  const language = useLanguage();
  const [searchParams] = useSearchParams();
  const [errorOpen, setErrorOpen] = useState(false);
  const handleCloseError = () => {
    setErrorOpen(false);
    window.location.href = 'https://43847514863.propelauthtest.com';
  };
  useEffect(() => {
    const lang = searchParams.get('language') || localStorage.getItem('calendar_language');

    if (lang) {
      void i18n.changeLanguage(lang);
    } else if (language !== 'he' && language !== 'en') {
      void i18n.changeLanguage('en').then(() => {
        window.location.reload();
      });
    }
  }, []);

  theme.direction = i18n.dir();
  document.body.dir = i18n.dir();
  let cache = cacheLtr;
  if (theme.direction === 'rtl') {
    document.dir = 'rtl';
    cache = cacheRtl;
  }
  moment.locale(language);
  const env = import.meta.env.VITE_REACT_APP_ENVIRONMENT || 'local';
  if (env !== 'local') {
    H.init('jd4920g5', {
      tracingOrigins: [/^(?!.*\b(auth|posthog)\b).*/],
      environment: env,
      networkRecording: {
        enabled: env !== 'local',
        recordHeadersAndBody: true,
        environment: env,
        urlBlocklist: [
          // insert full or partial urls that you don't want to record here
          // Out of the box, Highlight will not record these URLs (they can be safely removed):
          'https://www.googleapis.com/identitytoolkit',
          'https://securetoken.googleapis.com',
          'http://localhost:3000',
          'https://auth.staging.webook.live',
          'https://auth.webook.live',
        ],
      },
    });
  }
  return (
    <div className="App">
      <SWRConfig
        value={{
          onError: (error) => {
            if (error.status === 401 && window.location.pathname.includes('dashboard')) {
              setErrorOpen(true);
            }
          },
        }}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <CacheProvider value={cache}>
            <ThemeProvider theme={theme}>
              <StyleSheetManager stylisPlugins={[rtlPlugin]}>{content}</StyleSheetManager>
            </ThemeProvider>
          </CacheProvider>
        </LocalizationProvider>
      </SWRConfig>
      <Snackbar
        open={errorOpen}
        onClose={handleCloseError}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
          {t('unauth')}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;
