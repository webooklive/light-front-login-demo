/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderPersonalDetailsRequestData } from './OrderPersonalDetailsRequestData';

export type WaitingListRegisterRequestData = {
  language: string;
  account_id: string;
  experience_id: string;
  order_page_id: string;
  dates: Array<string>;
  personal_details: OrderPersonalDetailsRequestData;
  persons?: number;
};
