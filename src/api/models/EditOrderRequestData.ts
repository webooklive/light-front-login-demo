/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderDateAndTimeDetailsRequestData } from './OrderDateAndTimeDetailsRequestData';
import type { OrderDetailsRequestData } from './OrderDetailsRequestData';
import type { OrderPersonalDetailsRequestData } from './OrderPersonalDetailsRequestData';

export type EditOrderRequestData = {
  order_id: string;
  parent_id?: string;
  new_parent_id?: string;
  details: OrderDetailsRequestData;
  date_and_time_details?: OrderDateAndTimeDetailsRequestData;
  personal_details: OrderPersonalDetailsRequestData;
  employee_ids: Array<string>;
  comment?: string;
  order_page_id?: string;
};
