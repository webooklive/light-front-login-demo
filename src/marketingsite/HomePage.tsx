import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Grid } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import Typography from '@mui/material/Typography';
import HomePageHeader from './HomePageHeader';
import { MarketPlaceItemData, MarketplaceItemsService } from '../api';
import LogosSection from './LogosSection';
import { useAuth } from '../session/InternalAuthProvider';

export const SECTION_BGCOLOR = 'rgba(57,154,31,0.38)';

const SCROLL_HEIGHT_TO_ACTIVE_TOPBAR = 100;

const Title = ({ children }: { children: string }) => {
  const isSmallScreen = false;
  return (
    <Typography align="center" style={{ fontSize: isSmallScreen ? '22px' : '40px', fontWeight: 700 }}>
      {children}
    </Typography>
  );
};
const SubTitle = ({ children }: { children: string }) => {
  const isSmallScreen = false;
  return (
    <Typography align="center" style={{ fontSize: isSmallScreen ? '11px' : '20px', fontWeight: 500 }}>
      {children}
    </Typography>
  );
};
const HomePage = () => {
  const [activeTopBar, setActiveTopBar] = useState(false);
  const isSmallScreen = false;
  const {
    authState: { isInitialized, isAuthenticated },
  } = useAuth();
  const [marketPlaceItems, setMarketPlaceItems] = useState<MarketPlaceItemData[] | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const scrollCheck = window.scrollY > SCROLL_HEIGHT_TO_ACTIVE_TOPBAR;
      if (scrollCheck) {
        setActiveTopBar(true);
      } else {
        setActiveTopBar(false);
      }
    });

    const fetchMarketplaceItems = async () => {
      const result = await MarketplaceItemsService.getMarketplaceItems();
      setMarketPlaceItems(result);
    };

    void fetchMarketplaceItems();
  }, []);
  useEffect(() => {}, [isInitialized, isAuthenticated]);
  if (isAuthenticated && isInitialized) {
    window.location.href = '/dashboard/calendar';
    return null;
  }
  return (
    <div className="market-place-main">
      <Helmet>
        <title>WeBook - {t('marketplace.main_title')}</title>
        <meta name="description" content={t('marketplace.meta_description')} />
        <link rel="canonical" href="https://www.webook.live/" />
      </Helmet>
      <div className="image-bg">
        <div className="overlay" />
        <div className="inner">
          <HomePageHeader activeTopBar={activeTopBar} />
          <div>
            <div className="titles-container" style={{ paddingTop: isSmallScreen ? '5px' : '20px' }}>
              <div className="big-title" style={{ marginBottom: isSmallScreen ? '0px' : '20px' }}>
                {t('marketplace.search.big_title')}
              </div>
              <Grid container gap={1} alignItems="center" justifyContent="center">
                <h2 className="small-title">{t('marketplace.search.small_titlepart1')}</h2>
                <Grid item minWidth={isSmallScreen ? 110 : 200}>
                  <TypeAnimation
                    sequence={[
                      t('marketplace.spinnerbenifits.benifits1'),
                      1500,
                      t('marketplace.spinnerbenifits.benifits3'),
                      1500,
                      t('marketplace.spinnerbenifits.benifits2'),
                      1500,
                    ]}
                    wrapper="span"
                    cursor
                    repeat={Infinity}
                    style={{ fontWeight: '800', fontSize: isSmallScreen ? '15px' : '30px', display: 'inline-block' }}
                  />
                </Grid>
                <h2 className="small-title">{t('marketplace.search.small_titlepart2')}</h2>
              </Grid>
            </div>
          </div>
        </div>
      </div>
      <Grid container height={isSmallScreen ? 20 : 80} bgcolor={SECTION_BGCOLOR} />
      <Grid container flexDirection="column" gap={3}>
        <Grid
          container
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={2}
          bgcolor={SECTION_BGCOLOR}
          pb={10}>
          <Title>{t('marketplace.beforeaftertitle')}</Title>
          <Grid item>
            <img
              src={'https://webook-static.s3.eu-central-1.amazonaws.com/webook/screenshot.png'}
              width={isSmallScreen ? '300px' : '1024px'}
              alt={'Without webook'}
            />
          </Grid>
        </Grid>
        <Grid container flexDirection="column" alignItems="center" gap={4} py={4}>
          <Title>{t('marketplace.voucherTitle')}</Title>
          <Grid item display="flex" justifyContent="center">
            <img
              src={'https://webook-static.s3.eu-central-1.amazonaws.com/webook/testgif2.gif'}
              width={isSmallScreen ? '360px' : undefined}
              alt={'voucher gif'}
            />
          </Grid>
        </Grid>

        <Grid container flexDirection="column" alignItems="center" gap={4} py={4} pb={4} bgcolor={SECTION_BGCOLOR}>
          <Grid>
            <Title>{t('marketplace.widgetsTitle')}</Title>
            <SubTitle>{t('marketplace.widgetssubTitle')}</SubTitle>
          </Grid>
          <LogosSection
            maxHeight={80}
            logoList={(marketPlaceItems || []).map((x: any) => ({
              logo: x.logo,
              order: x.order,
              alt: x.title.en,
              link: x.link,
            }))}
          />
        </Grid>
        <Grid container flexDirection="column" alignItems="center" gap={4} py={4}>
          <Title>{t('marketplace.integrationsTitle')}</Title>
          <LogosSection
            maxHeight={50}
            logoList={[
              {
                logo: 'https://webook-static.s3.eu-central-1.amazonaws.com/webook/morning.png',
                alt: 'Green invoice morning',
                order: 2,
                link: 'https://www.greeninvoice.co.il/',
              },
              {
                logo: 'https://webook-static.s3.eu-central-1.amazonaws.com/webook/grow.png',
                alt: 'Grow payments',
                order: 0,
                link: 'https://grow.business/',
              },
              {
                logo: 'https://webook-static.s3.eu-central-1.amazonaws.com/webook/tranzila.png',
                alt: 'Tranzila payments',
                order: 3,
                link: 'https://tranzila.com/',
              },
              {
                logo: 'https://webook-static.s3.eu-central-1.amazonaws.com/webook/stripe.png',
                alt: 'Stripe',
                order: 1,
                link: 'https://stripe.com',
              },
              {
                logo: 'https://webook-static.s3.eu-central-1.amazonaws.com/webook/payplus.jpg',
                alt: 'Payplus payments',
                order: 4,
                link: 'https://www.payplus.co.il/',
              },
            ]}
          />
        </Grid>
        <Grid
          gap={4}
          py={4}
          container
          flexDirection="column"
          alignItems="center"
          pb={isSmallScreen ? 2 : 10}
          bgcolor={SECTION_BGCOLOR}>
          <Title>{t('marketplace.worksWith')}</Title>
          <LogosSection
            maxHeight={40}
            logoList={[
              {
                logo: 'https://webook-static.s3.eu-central-1.amazonaws.com/webook/shopify.png',
                alt: 'Shopify',
                order: 1,
              },
              {
                logo: 'https://webook-static.s3.eu-central-1.amazonaws.com/webook/wix.png',
                alt: 'Wix',
                order: 0,
              },
              {
                logo: 'https://webook-static.s3.eu-central-1.amazonaws.com/webook/site123.png',
                alt: 'Site 123',
                order: 2,
              },
              {
                logo: 'https://webook-static.s3.eu-central-1.amazonaws.com/webook/wordpress.png',
                alt: 'Wordpress',
                order: 3,
              },
            ]}
          />
        </Grid>
        <Grid gap={4} justifyContent="center" container alignItems="center" mt={-2}>
          <Link target="_blank" to={`/privacy?language=$en}`}>
            <Typography fontSize="14px" color="gray">
              Privacy policy
            </Typography>
          </Link>
          <Link target="_blank" to={`/terms?language=en}`}>
            <Typography fontSize="14px" color="gray">
              Terms of use
            </Typography>
          </Link>
        </Grid>
      </Grid>
      <footer
        style={{
          display: 'grid',
          justifyContent: 'center',
          marginBottom: '8px',
        }}>
        <div hidden>
          <a target="_blank" href="https://uptime.betterstack.com" rel="noreferrer">
            <img
              style={{ width: '130px', height: '52px' }}
              alt="Better Stack Website Monitoring"
              src="https://uptime.betterstack.com/assets/static_assets/badges/light.png"
            />
          </a>
        </div>
      </footer>
      <Outlet />
    </div>
  );
};

export default HomePage;
