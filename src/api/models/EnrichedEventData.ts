/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CustomDetail } from './CustomDetail';

export type EnrichedEventData = {
  account_id: string;
  experience_id: string;
  order_page_id: string;
  id: string;
  date: string;
  time: number;
  timestamp?: number;
  tickets: number;
  sequence: number;
  created_at: string;
  updated_at: string;
  employee_ids: Array<string>;
  custom_details: Array<CustomDetail>;
  hidden_from_customers: boolean;
  duration: number;
  used_tickets: number;
};
