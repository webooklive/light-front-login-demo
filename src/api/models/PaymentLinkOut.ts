/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PaymentLinkPaymentStatus } from './PaymentLinkPaymentStatus';

export type PaymentLinkOut = {
  account_id: string;
  order_id: string;
  price: number;
  title: string;
  id: string;
  payment_status: PaymentLinkPaymentStatus;
  created_at: string;
  updated_at: string;
  link: string;
  created_by: string;
};
