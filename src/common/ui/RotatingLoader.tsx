import React from 'react';
import './RotatingLoader.css';
import { Grid, useMediaQuery, useTheme } from '@mui/material';

export const RotatingLoader = ({ useRegualarColor }: { useRegualarColor?: boolean }) => {
  const theme = useTheme();
  const darkLogo = false;
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid className="rotating-image">
        <img
          src={`/${darkLogo ? 'favicon_white' : 'favicon'}.png`}
          alt="Rotating logo"
          width={isSmallScreen ? undefined : '50px'}
        />
      </Grid>
    </Grid>
  );
};

export default RotatingLoader;
