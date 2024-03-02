/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderDetailsRequestData } from './OrderDetailsRequestData';

export type GetAvailableDatesRequestData = {
  account_id: string;
  order_page_id: string;
  order_details: OrderDetailsRequestData;
};
