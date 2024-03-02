import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { Box, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import moment from 'moment/moment';

import { useAuth } from '../session/InternalAuthProvider';

const MainLayout = () => {
  const { authState } = useAuth();
  const { i18n } = useTranslation();
  const theme = useTheme();

  useEffect(() => {
    const defaultLang = authState.account.default_system_language || 'he';
    const localStorageLanguage = localStorage.getItem('calendar_language');
    if (localStorageLanguage && localStorageLanguage !== 'undefined') {
      return;
    }
    void i18n.changeLanguage(defaultLang);
    document.body.dir = i18n.dir();
    theme.direction = i18n.dir();
    moment.locale('en');
    localStorage.setItem('calendar_language', defaultLang);
  }, [authState.account]);
  return (
    <div className="main-layout">
      <Box
        sx={{
          minWidth: { sm: '0' },
          backgroundImage: 'linear-gradient(rgba(34, 42, 69, 0.96), rgba(34, 42, 69, 0.96))',
        }}
      />
      <div className="main-container">
        <Box className="page-container">
          <Outlet />
        </Box>
      </div>
    </div>
  );
};

export default MainLayout;
