import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';
import './HomePage.scss';
import { useTranslation } from 'react-i18next';
import { useRedirectFunctions } from '@propelauth/react';
import CalendlyButton from './CalendlyButton';

const HomePageHeader = (props: { activeTopBar?: boolean; showHomePageLink?: boolean }) => {
  const { redirectToLoginPage } = useRedirectFunctions();
  const smallScreen = false;
  const { activeTopBar, showHomePageLink } = props;
  const { t } = useTranslation();
  // eslint-disable-next-line no-return-assign
  const redirect = () => (window.location.href = '/');

  return (
    <header className={`marketplace-header${activeTopBar ? ' active-marketplace-header' : ''}`}>
      <Grid className="logo-container" onClick={redirect}>
        <img className="logo-dark" src="/images/logos/logo-lean-dark.png" />
        <img className="logo-light" src="/images/logos/logo-lean.png" />
      </Grid>
      {showHomePageLink && (
        <div className="links">
          <a className="active" href="/">
            {t('marketplace.header.homepage')}
          </a>
        </div>
      )}

      <Grid
        container
        className="login-container"
        gap={1}
        flexDirection="row"
        justifyContent={smallScreen ? 'center' : 'flex-end'}
        mt={2}>
        <Grid item width={'160px'}>
          <CalendlyButton />
        </Grid>
        <Grid item width={'160px'} />
        <Grid item mb={2} width={'160px'}>
          <Button
            fullWidth
            onClick={() => {
              redirectToLoginPage();
            }}
            variant="outlined">
            {t('marketplace.header.login')}
          </Button>
        </Grid>
      </Grid>
    </header>
  );
};

export default HomePageHeader;
