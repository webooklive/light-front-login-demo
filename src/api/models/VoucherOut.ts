/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { VoucherPaymentStatus } from './VoucherPaymentStatus';
import type { VoucherStatus } from './VoucherStatus';

export type VoucherOut = {
  id: string;
  account_id: string;
  experience_id: string;
  order_page_id: string;
  order_number: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  price: number;
  custom_details: any;
  custom_personal_details: any;
  language: string;
  status: VoucherStatus;
  payment_status: VoucherPaymentStatus;
  created_at: string;
  updated_at: string;
  punches: number;
  archived_at?: string;
  visits_used?: Array<string>;
  code: string;
  persons: number;
  duration: number;
  can_spam?: boolean;
  discount_id?: string;
};
