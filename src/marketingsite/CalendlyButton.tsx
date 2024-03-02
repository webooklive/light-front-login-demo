import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PopupModal } from 'react-calendly';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import EventIcon from '@mui/icons-material/Event';

const CALENDLY_COLOR = '#006bff';

function CalendlyButton() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        fullWidth
        disableElevation
        disableRipple
        size="medium"
        variant="contained"
        sx={{
          backgroundColor: CALENDLY_COLOR,
          border: '0px solid black',
          '&:hover': {
            backgroundColor: '#003c9f',
          },
        }}
        onClick={() => setIsOpen(true)}>
        <EventIcon sx={{ mr: 1, color: 'white' }} />
        <Typography color="white">{t('marketplace.header.calendlycta')}</Typography>
      </Button>
      <PopupModal
        url="https://calendly.com/eli-lj0/webook-demo"
        rootElement={document.getElementById('root')!}
        open={isOpen}
        onModalClose={() => {
          setIsOpen(false);
        }}
      />
    </>
  );
}

export default CalendlyButton;
