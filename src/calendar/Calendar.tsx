import { Button, Grid } from '@mui/material';
import './Calendar.scss';
import React from 'react';
import { useLogoutFunction, withAuthInfo } from '@propelauth/react';
import { useOrders } from './swr/useOrders';

const Calendar = () => {
  // example of loafing data
  const {
    isLoading: isLoadingOrders,
    items: orders,
    deleteItem: deleteOrder,
    addItem: addOrder,
    updateItem: updateOrder,
  } = useOrders({ startDate: '2024-01-01', endDate: '2024-02-01' });
  const logoutFn = useLogoutFunction();

  return (
    <Grid>
      Logged in
      <Button onClick={() => logoutFn(true)}>log out</Button>
    </Grid>
  );
};

export default withAuthInfo(Calendar);
