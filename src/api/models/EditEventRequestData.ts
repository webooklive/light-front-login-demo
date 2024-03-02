/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CustomDetail } from './CustomDetail';

export type EditEventRequestData = {
  event_id: string;
  date: string;
  time: number;
  tickets: number;
  employee_ids: Array<string>;
  custom_details?: Array<CustomDetail>;
  order_page_id?: string;
  hidden_from_customers?: boolean;
};
