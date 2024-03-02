/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderDateAndTimeDetailsRequestData } from './OrderDateAndTimeDetailsRequestData';
import type { OrderDetailsRequestData } from './OrderDetailsRequestData';
import type { OrderPersonalDetailsRequestData } from './OrderPersonalDetailsRequestData';

export type CreateOrderRequestData = {
  language: string;
  account_id: string;
  experience_id: string;
  order_page_id: string;
  parent_id?: string;
  details: OrderDetailsRequestData;
  date_and_time_details?: OrderDateAndTimeDetailsRequestData;
  personal_details: OrderPersonalDetailsRequestData;
  can_spam?: boolean;
  comment?: string;
  employee_ids?: Array<string>;
  create_payment_link?: boolean;
  voucher_id_to_redeem?: string;
};
