import { Grid } from '@mui/material';
import React from 'react';
import RotatingLoader from '../common/ui/RotatingLoader';

type LogoItem = {
  logo: string;
  order: number;
  alt: string;
  link?: string;
};
type LogosSectionProps = {
  logoList: LogoItem[];
  maxHeight: number;
};
const LogosSection = ({ logoList, maxHeight }: LogosSectionProps) => {
  if (logoList.length === 0) return <RotatingLoader />;

  return (
    <Grid container justifyContent="center" direction="row" spacing={4} width="75%">
      {logoList
        .sort((a: any, b: any) => a.order - b.order)
        .map((item: LogoItem, index: number) => {
          return (
            <Grid
              key={index}
              item
              xs={6}
              sm={6}
              md={6}
              lg={4}
              xl={3}
              maxWidth="360px"
              display="flex"
              justifyContent="center"
              alignItems="center">
              <a href={item.link} target={'_blank'} rel="noreferrer">
                <img
                  src={item.logo}
                  className="page-logo"
                  alt={item.alt}
                  style={{ maxWidth: '100%', maxHeight: `${maxHeight}px` }}
                />
              </a>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default LogosSection;
