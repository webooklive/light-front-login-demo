/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CheckinData } from './CheckinData';
import type { OrderStatus } from './OrderStatus';

export type OrderData = {
  account_id: string;
  experience_id: string;
  order_page_id: string;
  parent_id?: string;
  id: string;
  order_number?: number;
  date?: string;
  time?: number;
  timestamp?: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  duration: number;
  price: number;
  persons: number;
  rooms: number;
  custom_details?: any;
  custom_personal_details?: any;
  checkin?: CheckinData;
  language: string;
  sequence: number;
  status: OrderStatus;
  created_at: string;
  updated_at: string;
  voucher_id?: string;
  employee_ids: Array<string>;
  comment?: string;
  can_spam?: boolean;
  allowed_to_reschedule?: boolean;
  payment_link?: string;
  discount_id?: string;
  returning_customer: boolean;
  tip_amount?: number;
};
