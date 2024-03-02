/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RepeatingEventRequestData } from './RepeatingEventRequestData';

export type CreateEventRequestData = {
  account_id: string;
  experience_id: string;
  order_page_id: string;
  date: string;
  time: number;
  tickets: number;
  hidden_from_customers?: boolean;
  repeating?: RepeatingEventRequestData;
};
